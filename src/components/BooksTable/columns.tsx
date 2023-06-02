import {Book} from "../../core/models/book";
import {ColumnsType} from "antd/es/table";
import ratingIcon from "../../assets/icons/rating.svg";
import React from "react";
import {Tooltip, Typography} from "antd";
import editIcon from "../../assets/icons/edit.svg";
import deleteIcon from "../../assets/icons/delete.svg";
import classes from './BooksTable.module.scss'

const {Text} = Typography;

/** Books table columns. */
export const getColumns = (setEditorState: (book: Book | null, isOpen: boolean) => void, deleteBook: (book: Book) => void): ColumnsType<Book> => ([
    {
        title: 'Название',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Авторы',
        dataIndex: 'authors',
        key: 'authors',
    },
    {
        title: 'Рейтинг',
        dataIndex: 'rating',
        key: 'rating',
        render: (_, {rating}) => (
            <div className={`${classes['book-table__rating-wrapper']}`}>
                {rating && <img src={ratingIcon} alt="book rating"/>}
                <Text className={`${classes['book-table__rating']}`}>
                    {rating || ''}
                </Text>
            </div>
        )
    },
    {
        title: 'Год публикации',
        dataIndex: 'publicationYear',
        key: 'publicationYear',
    },
    {
        title: 'ISBN',
        dataIndex: 'ISBN',
        key: 'ISBN',
    },
    {
        title: '',
        key: 'action',
        render: (_, book) => (
            <div className={`${classes['book-table__actions']}`}>
                <Tooltip title={'Редактировать книгу'} mouseEnterDelay={0.5}>
                    <img className={`${classes['book-table__action']}`}
                         src={editIcon}
                         onClick={() => setEditorState(book, true)}
                         alt="edit book's information"/>
                </Tooltip>
                <Tooltip title={'Удалить книгу'} mouseEnterDelay={0.5}>
                    <img className={`${classes['book-table__action']}`}
                         src={deleteIcon}
                         onClick={() => deleteBook(book)}
                         alt="delete book"/>
                </Tooltip>
            </div>
        ),
    },
])