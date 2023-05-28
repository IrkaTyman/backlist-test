import React, {FC} from 'react';
import {Book} from "../../core/models/book";
import classes from './BookCard.module.scss';
import {Typography} from "antd";
import {typedMemo} from "../../core/utils/typed-memo";
import ratingIcon from '../../assets/icons/rating.svg';

const {Text} = Typography;

type Props = Readonly<Book & {}>

const BookCardComponent: FC<Props> = (props) => {
    return (
        <div className={`${classes['book-card']}`}>
            <div className={`${classes['book-card__cover-wrapper']}`}>
                {props.cover ?
                    <img className={`${classes['book-card__cover']}`}/>
                    : <div className={`${classes['book-card__cover-empty']}`}>
                        <Text>Нет обложки</Text>
                    </div>
                }
                {props.rating !== null
                    && <div className={`${classes['book-card__rating-wrapper']}`}>
                        <img src={ratingIcon} alt="book rating"/>
                        <Text className={`${classes['book-card__rating']}`}>
                            {props.rating}
                        </Text>
                    </div>}
            </div>

            <Text className={`${classes['book-card__name']}`}>{props.name}</Text>
            <Text className={`${classes['book-card__authors']}`}>{props.authors.join(', ')}</Text>
            {props.publicationYear !== null
                && <Text className={`${classes['book-card__additional-info']}`}>
                    Год выпуска: {props.publicationYear}
                </Text>}
            {props.ISBN !== null
                && <Text className={`${classes['book-card__additional-info']}`}>
                    ISBN: {props.ISBN}
                </Text>}
        </div>
    )
}

export const BookCard = typedMemo(BookCardComponent);