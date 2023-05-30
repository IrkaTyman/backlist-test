import React, {useState, useEffect, FC, memo} from 'react';
import {useBooksState} from "../../../../core/services/hooks/useBooksState";
import classes from "./BooksPage.module.scss";
import {Spin, Tooltip, Typography} from "antd";
import editIcon from "../../../../assets/icons/edit.svg";
import deleteIcon from "../../../../assets/icons/delete.svg";
import ratingIcon from "../../../../assets/icons/rating.svg";
import {Book} from "../../../../core/models/book";
import {BookCard} from "../../../../components/BookCard"; // only needs to be imported once

const {Title, Text} = Typography;

const BooksPageComponent: FC = () => {
    const {books, errorStatus, isLoading, bestBook} = useBooksState({sortingName: 'publicationYear'})

    const renderBooks = (books: Book[]) => {
        const elements: React.ReactElement[] = [];
        let prevSortingValue = null;

        for (let i = 0; i < books.length; i++) {
            if (prevSortingValue !== books[i].publicationYear) {
                prevSortingValue = books[i].publicationYear
                //elements.push(<h2 className={`${classes['books-page__catalog__h2']}`}>Год выпуска: {prevSortingValue}</h2>)
            }
            elements.push(<BookCard {...books[i]}/>)
        }
        return elements;
    }


    if (isLoading) return <Spin/>
    if (books === null) return null;
    return (
        <div className={`${classes['books-page']}`}>
            {bestBook &&
                <div className={`${classes['books-page__best-book']}`}>
                    <Title className={`${classes[' .books-page__best-book__title']}`}>#ЛУЧШЕЕ</Title>

                    <div className={`${classes['books-page__best-book__actions']}`}>
                        <Tooltip title={'Редактировать книгу'} mouseEnterDelay={0.5}>
                            <img className={`${classes['books-page__best-book__action']}`} src={editIcon}
                                 alt="edit book's information"/>
                        </Tooltip>
                        <Tooltip title={'Удалить книгу'} mouseEnterDelay={0.5}>
                            <img className={`${classes['books-page__best-book__action']}`} src={deleteIcon}
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
                            : <div className={`${classes['books-page__best-book__cover']}`}>
                                <Text>Нет обложки</Text>
                            </div>
                        }
                        <div className={`${classes['books-page__best-book__info']}`}>
                            <Text className={`${classes['books-page__best-book__name']}`}>Name</Text>
                            <Text className={`${classes['book-card__authors']}`}>Authors</Text>
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