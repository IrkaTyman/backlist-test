import {useEffect} from 'react';
import {useBooksStore} from "../../store/books/store";
import {Ordering} from "../../models/ordering";
import {Book} from "../../models/book";
import {BooksService} from "../books-service";
import {toast} from "react-toastify";

type Props = Readonly<{
    sortingName: string;
    ordering?: Ordering
}>

export const useBooksState = () => {
    const books = useBooksStore(store => store.books);
    const bestBook = useBooksStore(store => store.bestBook);
    const isLoading = useBooksStore(store => store.isLoading);
    const errorStatus = useBooksStore(store => store.errorStatus);
    const sorting = useBooksStore(store => store.sorting);
    const setSortingState = useBooksStore(store => store.setSortingState);
    const updateBooks = useBooksStore(store => () => store.updateBooks(store.sorting, store.search));

    useEffect(() => {
        updateBooks();
    }, [sorting]);

    async function deleteBook(book: Book) {
        if (!window.confirm(`Удалить книгу «${book.name}»?`)) {
            return;
        }
        const isSuccess = await BooksService.deleteBook(book.uid);
        if (isSuccess) {
            toast.success('Книга удалена');
            updateBooks();
        } else {
            toast.error('Произошла ошибка при удалении книги');
        }
    }

    return {
        books,
        bestBook,
        isLoading,
        errorStatus,
        sorting,
        setSortingState,
        deleteBook
    }
}