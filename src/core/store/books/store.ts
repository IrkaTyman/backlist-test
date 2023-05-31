import {create} from 'zustand';
import {BooksState, BooksActions} from './types';
import {initialState} from './state';
import {BooksService} from "../../services/books-service";
import {Book} from "../../models/book";
import {Sorting} from "../../models/sorting";

export const useBooksStore = create<BooksState & BooksActions>(set => ({
    ...initialState,
    async updateBooks(sorting: Sorting) {
        set(() => ({isLoading: true, errorStatus: null, books: null}))
        const books = await BooksService.getBooks(sorting);
        let bestBook: Book | null = null;
        if (books !== null) {
            for (let i = 0; i < books.length; i++) {
                const book = books[i];
                if ((book.publicationYear === null || book.publicationYear <= new Date().getFullYear() - 3)
                    && (bestBook === null || (book.rating || 0) > (bestBook.rating || 0))
                    && (Math.random() * 10 < 5 || bestBook === null)) {
                    bestBook = book;
                }
            }
        }
        set(() => ({isLoading: false, books, bestBook}));
    },
    setEditorState(book, isOpen) {
        set(() => ({editingBook: book, isEditorOpened: isOpen}))
    },
    setSortingState(sorting: Sorting) {
        set(() => ({sorting}));
    },
    reset() {
        set(() => ({...initialState}));
    },
}));
