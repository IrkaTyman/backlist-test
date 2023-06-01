import React, {FC} from 'react';
import {Book} from "core/models/book";
import {typedMemo} from "core/utils/typed-memo";
import {useBooksStore} from "../../core/store/books/store";
import {Table} from "antd";
import {getColumns} from "./columns";
import classes from "./BookTable.module.scss";

type Props = Readonly<{
    books: Book[];
    deleteBook(book: Book): void;
}>

const BookTableComponent: FC<Props> = ({books, deleteBook}) => {
    const setEditorState = useBooksStore(store => store.setEditorState)

    return (
        <div className={`${classes['book-table__wrapper']}`}>
            <Table dataSource={books}
                   columns={getColumns(setEditorState, deleteBook)}/>
        </div>
    )
}

export const BookTable = typedMemo(BookTableComponent);