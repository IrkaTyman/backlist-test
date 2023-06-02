import React, {FC} from 'react'
import {Tooltip} from "antd";
import editIcon from "../../assets/icons/edit.svg";
import deleteIcon from "../../assets/icons/delete.svg";
import classes from "./BookActions.module.scss";
import {typedMemo} from "../../core/utils/typed-memo";

type Props = Readonly<{

    /** Edit book. */
    editBook: () => void;

    /** Delete book. */
    deleteBook: () => void;

    /** Classname form container actions. */
    containerClassName?: string;
}>

/** Component: Book actions. */
const BookActionsComponent: FC<Props> = ({editBook, deleteBook, containerClassName}) => (
    <div className={`${classes['book-actions']} ${containerClassName || ''}`}>
        <Tooltip title={'Редактировать книгу'} mouseEnterDelay={0.5}>
            <img className={`${classes['book-action']}`}
                 src={editIcon}
                 onClick={editBook}
                 alt="edit book's information"/>
        </Tooltip>
        <Tooltip title={'Удалить книгу'} mouseEnterDelay={0.5}>
            <img className={`${classes['book-action']}`}
                 onClick={deleteBook}
                 src={deleteIcon}
                 alt="delete book"/>
        </Tooltip>
    </div>
);

export const BookActions = typedMemo(BookActionsComponent);