import {Book} from "./book";

export type BooksData = Readonly<Map<number | string, Book[]>>;