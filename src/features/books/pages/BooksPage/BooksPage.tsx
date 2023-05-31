import React, {FC, memo} from 'react';
import {useBooksState} from "../../../../core/services/hooks/useBooksState";
import classes from "./BooksPage.module.scss";
import {Spin, Tooltip, Typography} from "antd";
import editIcon from "../../../../assets/icons/edit.svg";
import deleteIcon from "../../../../assets/icons/delete.svg";
import ratingIcon from "../../../../assets/icons/rating.svg";
import {Book} from "../../../../core/models/book";
import {BookCard} from "../../../../components/BookCard";
import {useBooksStore} from "../../../../core/store/books/store"; // only needs to be imported once

const {Title, Text} = Typography;

const BooksPageComponent: FC = () => {
    const {books, errorStatus, isLoading, bestBook, sorting, setSortingState, ordering, deleteBook} = useBooksState()
    const setEditorState = useBooksStore(store => store.setEditorState)

    const renderBooks = (books: Book[]) => {
        const elements: React.ReactElement[] = [];
        let prevSortingValue = null;

        for (let i = 0; i < books.length; i++) {
            if (prevSortingValue !== books[i].publicationYear) {
                prevSortingValue = books[i].publicationYear
                elements.push(<div className={`${classes['books-page__catalog__subtitle_wrapper']}`} key={`title-${i}`}>
                    <Title level={2} className={`${classes['books-page__catalog__subtitle']}`}>Год
                        выпуска: {prevSortingValue}</Title>
                    <hr/>
                </div>)
            }
            elements.push(<BookCard book={books[i]} deleteBook={deleteBook} key={i}/>)
        }
        return elements;
    }


    if (isLoading) return <Spin/>
    if (books === null) return null;
    return (
        <div className={`${classes['books-page']}`}>
            {bestBook &&
                <div className={`${classes['books-page__best-book']}`}>
                    <Title className={`${classes['books-page__best-book__title']}`}>#ЛУЧШЕЕ</Title>

                    <div className={`${classes['books-page__best-book__actions']}`}>
                        <Tooltip title={'Редактировать книгу'} mouseEnterDelay={0.5}>
                            <img className={`${classes['books-page__best-book__action']}`}
                                 src={editIcon}
                                 onClick={() => setEditorState(bestBook, true)}
                                 alt="edit book's information"/>
                        </Tooltip>
                        <Tooltip title={'Удалить книгу'} mouseEnterDelay={0.5}>
                            <img className={`${classes['books-page__best-book__action']}`}
                                 onClick={() => deleteBook(bestBook)}
                                 src={deleteIcon}
                                 alt="delete book"/>
                        </Tooltip>
                    </div>

                    <div className={`${classes['books-page__best-book__content']}`}>
                        {bestBook.cover ?
                            <div className={`${classes['books-page__best-book__cover']}`}
                                 style={{backgroundImage: `url(${bestBook.cover})`}}>
                                {bestBook.rating !== null
                                    && <div className={`${classes['books-page__best-book__rating-wrapper']}`}>
                                        <img src={ratingIcon} alt="book rating"/>
                                        <Text className={`${classes['books-page__best-book__rating']}`}>
                                            {bestBook.rating}
                                        </Text>
                                    </div>}
                            </div>
                            : <div
                                className={`${classes['books-page__best-book__cover']} ${classes['books-page__best-book__cover_empty']}`}>
                                <Text>Нет обложки</Text>
                            </div>
                        }
                        <div className={`${classes['books-page__best-book__info']}`}>
                            <Text className={`${classes['books-page__best-book__name']}`}>{bestBook.name}</Text>
                            <Text className={`${classes['book-card__authors']}`}>{bestBook.authors}</Text>
                            {bestBook.publicationYear !== null
                                && <Text className={`${classes['books-page__best-book__add-info']}`}>
                                    Год выпуска: {bestBook.publicationYear}
                                </Text>}
                            {bestBook.ISBN !== null
                                && <Text className={`${classes['books-page__best-book__add-info']}`}>
                                    ISBN: {bestBook.ISBN}
                                </Text>}
                        </div>
                    </div>
                </div>}

            <Title className={`${classes['books-page__container']}`}>Книги каталога</Title>
            <div className={`${classes['books-page__catalog']} ${classes['books-page__container']}`}>
                {renderBooks(books)}
            </div>
        </div>
    );
}

export const BooksPage = memo(BooksPageComponent);