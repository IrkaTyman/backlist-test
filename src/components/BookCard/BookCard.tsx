import React, {FC} from 'react';
import {Book} from "core/models/book";
import classes from './BookCard.module.scss';
import {Tooltip, Typography} from "antd";
import {typedMemo} from "core/utils/typed-memo";
import ratingIcon from "assets/icons/rating.svg";
import editIcon from "assets/icons/edit.svg";
import deleteIcon from "assets/icons/delete.svg";
import {useBooksStore} from "../../core/store/books/store";

const {Text} = Typography;

type Props = Readonly<{

    /** Book. */
    book: Book;

    /** Delete book. */
    deleteBook(book: Book): void;
}>

/** Component: Book card. */
const BookCardComponent: FC<Props> = ({book, deleteBook}) => {

    /** Set editor state - editingBook and isOpened. */
    const setEditorState = useBooksStore(store => store.setEditorState)

    return (
        <div className={`${classes['book-card']}`}>
            <div className={`${classes['book-card__cover-wrapper']}`}>
                {book.cover ?
                    <div className={`${classes['book-card__cover']}`}
                         style={{backgroundImage: `url(${book.cover})`}}/>
                    : <div className={`${classes['book-card__cover-empty']}`}>
                        <Text>Нет обложки</Text>
                    </div>
                }
                {book.rating !== null
                    && <div className={`${classes['book-card__rating-wrapper']}`}>
                        <img src={ratingIcon} alt="book rating"/>
                        <Text className={`${classes['book-card__rating']}`}>
                            {book.rating}
                        </Text>
                    </div>}

                <div className={`${classes['book-card__actions']}`}>
                    <Tooltip title={'Редактировать книгу'} mouseEnterDelay={0.5}>
                        <img className={`${classes['book-card__action']}`}
                             src={editIcon}
                             onClick={() => setEditorState(book, true)}
                             alt="edit book's information"/>
                    </Tooltip>
                    <Tooltip title={'Удалить книгу'} mouseEnterDelay={0.5}>
                        <img className={`${classes['book-card__action']}`}
                             src={deleteIcon}
                             onClick={() => deleteBook(book)}
                             alt="delete book"/>
                    </Tooltip>
                </div>
            </div>

            <Text className={`${classes['book-card__name']}`}>{book.name}</Text>
            <Text className={`${classes['book-card__authors']}`}>{book.authors}</Text>
            {book.publicationYear !== null
                && <Text className={`${classes['book-card__additional-info']}`}>
                    Год выпуска: {book.publicationYear}
                </Text>}
            {book.ISBN !== null
                && <Text className={`${classes['book-card__additional-info']}`}>
                    ISBN: {book.ISBN}
                </Text>}
        </div>
    )
}

export const BookCard = typedMemo(BookCardComponent);