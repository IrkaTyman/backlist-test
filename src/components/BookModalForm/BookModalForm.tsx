import React, {useState, FC, memo} from "react";
import {Button, Input, Upload, Typography, UploadFile} from "antd";
import {Formik, Form, ErrorMessage} from "formik";
import classes from "./BookModalForm.module.scss";
import {CloseIcon, DeleteIcon} from "../Icons/Icons";
import {useBookEditorState} from "../../core/services/hooks/useBookEditorState";
import {defaultFormValues, validationSchema} from "./config";
import {Book} from "../../core/models/book";
import {RcFile} from "antd/es/upload";

const {Text, Title} = Typography;

const BookModalFormComponent: FC = () => {
    const {editingBook, setEditorState, isEditorOpened, updateBooks} = useBookEditorState();
    const [authors, setAuthors] = useState<string[]>([''])
    const [file, setFile] = useState<File | null>(null);

    function onSubmit(book: Book) {

    }

    function onAuthorChange(value: string, order: number) {
        setAuthors(authors => authors.map((currAuthor, i) => {
            if (i === order) return value;
            return currAuthor;
        }))
    }

    function onAuthorAdd() {
        setAuthors(authors => [...authors, '']);
    }

    function onAuthorDelete(order: number) {
        setAuthors(authors => authors.filter((_, i) => i !== order));
    }

    return (
        <div className={`${classes['book-form__modal__overlay']}`}>
            <div className={`${classes['book-form__modal']}`}>
                <Title className={`${classes['book-form__header']}`}>Добавление книги</Title>
                <CloseIcon width={20} height={20} className={`${classes['book-form__close_btn']}`}/>
                <Formik initialValues={editingBook || defaultFormValues}
                        validationSchema={validationSchema}
                        onSubmit={onSubmit}>
                    {({values, setFieldValue, handleSubmit, errors, setFieldTouched, touched}) => (
                        <Form className={`${classes['book-form']}`}>
                            <Upload className={`${classes['book-form__cover']}`}
                                    onChange={({file}) => {
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
                            <div className={`${classes['book-form__name']}`}>
                                <Input value={values.name}
                                       className={`${errors.name ? classes['error-input'] : ''}`}
                                       onChange={(e) => setFieldValue('name', e.target.value)}
                                       prefix={'Название:'}/>
                                <Text className={`${classes['error-message']}`}>
                                    <ErrorMessage name={'name'}/>
                                </Text>
                            </div>

                            <Input value={values.publicationYear || new Date().getFullYear()}
                                   onChange={(e) => setFieldValue('publicationYear', e.target.value)}
                                   prefix={'Год публикации:'}/>
                            <Input value={values.ISBN || ''}
                                   onChange={(e) => setFieldValue('ISBN', e.target.value)}
                                   prefix={'ISBN:'}/>
                            <Input value={values.rating || ''}
                                   onChange={(e) => setFieldValue('rating', e.target.value)}
                                   prefix={'Рейтинг:'}/>

                            <div className={`${classes['book-form__authors-select']}`}>
                                <Text className={`${classes['book-form__authors-select__label']}`}>
                                    Авторы
                                </Text>
                                {authors.map((author, i) => (
                                    <div>
                                        <Input value={author}
                                               className={`${touched.authors && author.length == 0 ? classes['error-input'] : ''}`}
                                               onChange={(e) => onAuthorChange(e.target.value, i)}
                                               suffix={i !== 0 ?
                                                   <DeleteIcon width={15} height={15}
                                                               onClick={() => onAuthorDelete(i)}
                                                               className={`${classes['book-form__authors-select__delete']}`}/> :
                                                   null}
                                               prefix={'ФИО:'}/>
                                        <Text className={`${classes['error-message']}`}>
                                            {touched.authors && author.length == 0 && 'Введите ФИО автора'}
                                        </Text>
                                    </div>
                                ))}
                                <Button type={'text'}
                                        onClick={onAuthorAdd}
                                        className={`${classes['book-form__authors-select__add_btn']}`}>
                                    Добавить автора
                                </Button>
                            </div>

                            <div className={`${classes['book-form__buttons']}`}>
                                <Button type={'primary'} htmlType={'submit'}
                                        onSubmit={() => handleSubmit()}>Добавить</Button>
                                <Button type={'default'}>Отмена</Button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export const BookModalForm = memo(BookModalFormComponent);
