import React, {FC, memo, useState} from 'react';
import {useBooksState} from "../../../../core/services/hooks/useBooksState";
import classes from "./BooksPage.module.scss";
import {Spin, Tooltip, Typography} from "antd";
import editIcon from "../../../../assets/icons/edit.svg";
import deleteIcon from "../../../../assets/icons/delete.svg";
import ratingIcon from "../../../../assets/icons/rating.svg";
import {renderCards} from "./render";
import {useBooksStore} from "../../../../core/store/books/store";
import {BooksSortingSelect} from "../../../../components/BooksSortingSelect";
import {BooksTable} from "../../../../components/BooksTable";
import {CardGridIcon, RowGridIcon} from "../../../../components/Icons/Icons";
import {GridType} from "./types";

const {Title, Text} = Typography;

/** Books page. */
const BooksPageComponent: FC = () => {

    const {books, isLoading, bestBook, sorting, setSortingState, deleteBook} = useBooksState();

    /** Book display type. */
    const [gridType, setGridType] = useState(GridType.Card);

    /** Set editor state - editingBook and isOpened. */
    const setEditorState = useBooksStore(store => store.setEditorState);

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

            <div className={`${classes['books-page__container']} ${classes['books-page__catalog_header']}`}>
                <Title>Книги каталога</Title>
                <div className={`${classes['books-page__settings']}`}>
                    <CardGridIcon onClick={() => setGridType(GridType.Card)}
                                  className={`${classes['books-page__grid-type']} ${gridType === GridType.Card ? classes['active'] : ''}`}/>
                    <RowGridIcon onClick={() => setGridType(GridType.Row)}
                                 className={`${classes['books-page__grid-type']} ${gridType === GridType.Row ? classes['active'] : ''}`}/>
                    <BooksSortingSelect onChange={setSortingState} sorting={sorting}/>
                </div>
            </div>

            {books.length > 0 ?
                gridType === GridType.Card ?
                <div className={`${classes['books-page__catalog']} ${classes['books-page__container']}`}>
                    {renderCards(books, sorting, deleteBook)}
                </div> :
                <BooksTable books={books} deleteBook={deleteBook}/>
                : <Title className={`${classes['books-page__empty-catalog']} ${classes['books-page__container']}`}>Книги не найдены</Title>}
        </div>
    );
}

export const BooksPage = memo(BooksPageComponent);