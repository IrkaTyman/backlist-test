import React from "react";
import {Book} from "../../../../core/models/book";
import classes from "./BooksPage.module.scss";
import {BookCard} from "../../../../components/BookCard";
import {Typography} from "antd";
import {Sorting} from "../../../../core/models/sorting";

const {Title} = Typography;

/** Render book cards. */
export const renderCards = (books: Book[], sorting: Sorting, deleteBook: (book: Book) => void): React.ReactElement[] => {
    const elements: React.ReactElement[] = [];
    let prevSortingValue = null;

    for (let i = 0; i < books.length; i++) {
        if (prevSortingValue !== books[i][sorting.name]) {
            prevSortingValue = books[i][sorting.name]
            elements.push(<div className={`${classes['books-page__catalog__subtitle_wrapper']}`} key={`title-${i}`}>
                <Title level={2} className={`${classes['books-page__catalog__subtitle']}`}>
                    {getSubtitle(sorting)}: {prevSortingValue}
                </Title>
                <hr/>
            </div>)
        }
        elements.push(<BookCard book={books[i]} deleteBook={deleteBook} key={i}/>)
    }
    return elements;
}

/** Get subtitle text from sorting name. */
function getSubtitle(sorting: Sorting): string {
    switch (sorting.name) {
        case 'publicationYear':
            return 'Год публикации';
        case 'rating':
            return 'Рейтинг';
        default:
            return ''
    }
}