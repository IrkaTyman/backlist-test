import React, {useState, FC, memo, useRef, useEffect} from "react";
import {Button, Upload, Typography} from "antd";
import {Formik, Form} from "formik";
import classes from "./BookEditor.module.scss";
import {CloseIcon, DeleteIcon} from "../Icons/Icons";
import {useBookEditorState} from "../../core/services/hooks/useBookEditorState";
import {defaultFormValues, validationSchema} from "./config";
import {Book} from "../../core/models/book";
import {useClickAway} from "../../core/services/hooks/useClickAway";
import {InputWithError} from "../InputWithError";
import {BooksService} from "../../core/services/books-service";

const {Text, Title} = Typography;

/** Component: Book editor. */
const BookEditorComponent: FC = () => {

    const {editingBook, setEditorState, isEditorOpened, createBook, editBook} = useBookEditorState();

    /** Authors book. */
    const [authors, setAuthors] = useState<string[]>(['']);

    /** Cover file. */
    const [file, setFile] = useState<File | null>(null);

    /** Error while uploaded file. */
    const [fileError, setFileError] = useState<string | null>(null);

    /** Ref to modal component. */
    const modalRef = useRef<HTMLDivElement | null>(null);

    const {setIsActive} = useClickAway([modalRef.current], closeEditor);

    useEffect(() => {
        setIsActive(true);
    }, [isEditorOpened])

    useEffect(() => {
        if (editingBook !== null) {
            setAuthors(editingBook.authors.split(', '));
        }
    }, [editingBook])

    /** Submit form. */
    async function submit(book: Book) {
        if (authors.some(author => author.length == 0)) return;

        let coverUrl = null
        if (file) {
            coverUrl = await BooksService.uploadBookCover(file);
        }

        const parsedBook: Book = {...book, authors: authors.join(', '), cover: coverUrl};

        editingBook ? editBook(parsedBook) : createBook(parsedBook);
    }

    /** Change book authors. */
    function changeAuthor(value: string, order: number) {
        setAuthors(authors => authors.map((currAuthor, i) => {
            if (i === order) return value;
            return currAuthor;
        }))
    }

    /** Add book author. */
    function addAuthor() {
        setAuthors(authors => [...authors, '']);
    }

    /** Delete book author. */
    function deleteAuthor(order: number) {
        setAuthors(authors => authors.filter((_, i) => i !== order));
    }

    /** Close editor. */
    function closeEditor() {
        setAuthors(['']);
        setEditorState(null, false);
    }

    return (
        <div className={`${classes['book-form__modal__overlay']} ${isEditorOpened ? classes['opened'] : ''}`}>
            <div className={`${classes['book-form__modal']}`} ref={modalRef}>
                {isEditorOpened && <>
                    <Title
                        className={`${classes['book-form__header']}`}>{editingBook ? 'Редактирование книги' : 'Добавление книги'}</Title>
                    <CloseIcon width={20} height={20} className={`${classes['book-form__close_btn']}`}
                               onClick={closeEditor}/>
                    <Formik initialValues={editingBook || defaultFormValues}
                            validationSchema={validationSchema}
                            onSubmit={submit}>
                        {({values, setFieldValue, handleSubmit, errors, touched}) => (
                            <Form className={`${classes['book-form']}`}>
                                <Upload className={`${classes['book-form__cover']}`}
                                        accept={'.jpg, .png'}
                                        maxCount={1}
                                        beforeUpload={(file) => {
                                            const pathName = file.name.split('.');
                                            const maxSize = 8 * 1024 * 1024 * 2;
                                            if (pathName[pathName.length - 1] !== 'jpg'
                                                && pathName[pathName.length - 1] !== 'png'
                                                && file.size > maxSize) {
                                                setFileError('Выберите изображение в формате .jpg, .png, не больше 2Мб')
                                                return false;
                                            }
                                        }}
                                        onChange={({file}) => {
                                            if (file.originFileObj === undefined) return;
                                            setFile(file.originFileObj || null);
                                            const url = URL.createObjectURL(file.originFileObj as Blob);
                                            setFieldValue('cover', url);
                                        }}
                                        showUploadList={false}
                                        listType={'picture-card'}
                                >
                                    {values.cover ?
                                        <div className={`${classes['book-form__upload']}`}>
                                            <img src={values.cover} alt="avatar" style={{width: '100%'}}/>
                                            <div className={`${classes['book-form__upload__delete']}`}>
                                                <DeleteIcon width={20}
                                                            height={20}
                                                            fill={'#fff'}
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                setFile(null);
                                                                setFieldValue('cover', null)
                                                            }}/>
                                            </div>
                                        </div> :
                                        <div className={`${classes['book-form__upload']}`}>
                                            <Text className={`${classes['book-form__upload__name']}`}>
                                                Обложка книги
                                            </Text>
                                            <Text className={`${classes['book-form__upload__action']}`}>
                                                Нажмите или перетащите
                                            </Text>
                                        </div>}
                                </Upload>
                                <InputWithError containerClassName={classes['book-form__name']}
                                                value={values.name}
                                                onChange={(e) => setFieldValue('name', e.target.value)}
                                                prefix={'Название:'}
                                                error={errors.name}/>

                                <InputWithError value={values.publicationYear || ''}
                                                onChange={(e) => setFieldValue('publicationYear', e.target.value)}
                                                prefix={'Год публикации:'}
                                                error={errors.publicationYear}/>

                                <InputWithError value={values.ISBN || ''}
                                                onChange={(e) => setFieldValue('ISBN', e.target.value)}
                                                prefix={'ISBN:'}
                                                error={errors.ISBN}/>

                                <InputWithError value={values.rating || ''}
                                                onChange={(e) => setFieldValue('rating', e.target.value)}
                                                prefix={'Рейтинг:'}
                                                error={errors.rating}/>

                                <div className={`${classes['book-form__authors-select']}`}>
                                    <Text className={`${classes['book-form__authors-select__label']}`}>
                                        Авторы
                                    </Text>
                                    {authors.map((author, i) => (
                                        <InputWithError value={author}
                                                        className={`${touched.authors && author.length == 0 ? classes['error-input'] : ''}`}
                                                        onChange={(e) => changeAuthor(e.target.value, i)}
                                                        suffix={i !== 0 ?
                                                            <DeleteIcon width={15} height={15}
                                                                        onClick={() => deleteAuthor(i)}
                                                                        className={`${classes['book-form__authors-select__delete']}`}/> :
                                                            null}
                                                        prefix={'ФИО:'}
                                                        error={touched.authors && author.length == 0 ? 'Введите ФИО автора' : undefined}/>
                                    ))}
                                    <Button type={'text'}
                                            onClick={addAuthor}
                                            className={`${classes['book-form__authors-select__add_btn']}`}>
                                        Добавить автора
                                    </Button>
                                </div>

                                <div className={`${classes['book-form__buttons']}`}>
                                    <Button type={'primary'} htmlType={'submit'}
                                            onSubmit={() => handleSubmit()}>
                                        {editingBook ? 'Сохранить' : 'Добавить'}
                                    </Button>
                                    <Button type={'default'} onClick={closeEditor}>Отмена</Button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </>
                }
            </div>
        </div>
    )
}

export const BookEditor = memo(BookEditorComponent);
