import React, {FC} from 'react';
import {Book} from "core/models/book";
import {typedMemo} from "core/utils/typed-memo";
import {useBooksStore} from "../../core/store/books/store";
import {Table} from "antd";
import {getColumns} from "./columns";
import classes from "./BooksTable.module.scss";

type Props = Readonly<{

    /** All books. */
    books: Book[];

    /** Delete book. */
    deleteBook(book: Book): void;
}>

/** Component: Books table. */
const BooksTableComponent: FC<Props> = ({books, deleteBook}) => {

    /** Set editor state - editingBook and isOpened. */
    const setEditorState = useBooksStore(store => store.setEditorState)

    return (
        <div className={`${classes['book-table__wrapper']}`}>
            <Table dataSource={books}
                   columns={getColumns(setEditorState, deleteBook)}/>
        </div>
    )
}

export const BooksTable = typedMemo(BooksTableComponent);