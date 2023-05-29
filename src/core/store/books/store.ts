import {create} from 'zustand';
import {BooksState, BooksActions} from './types';
import {initialState} from './state';
import {BooksService} from "../../services/books-service";
import {Ordering} from "../../models/ordering";

export const useBooksStore = create<BooksState & BooksActions>(set => ({
    ...initialState,
    async updateBooks(sortingName: string, ordering: Ordering = 'desc') {
        set(()=>({isLoading: true, errorStatus: null, books: null}))
        const books = await BooksService.getBooks(sortingName, ordering);
        set(()=>({isLoading: false, books: books}));
    },
    setEditorState(book, isOpen) {
        set(() => ({editingBook: book, isEditorOpened: isOpen}))
    },
    reset() {
        set(() => ({...initialState}));
    },
}));
