import {Book} from "../../core/models/book";
import {ColumnsType} from "antd/es/table";
import ratingIcon from "../../assets/icons/rating.svg";
import React from "react";
import {Typography} from "antd";
import classes from './BooksTable.module.scss'
import {BookActions} from "../BookActions";

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
            <BookActions editBook={() => setEditorState(book, true)}
                         deleteBook={() => deleteBook(book)}/>
        ),
    },
])