import {create} from 'zustand';
import {BooksState, BooksActions} from './types';
import {initialState} from './state';

export const useBookEditorStore = create<BooksState & BooksActions>(set => ({
    ...initialState,
    setEditorState(book, isOpen) {
        set(() => ({editingBook: book, isEditorOpened: isOpen}))
    },
    reset() {
        set(() => ({...initialState}));
    },
}));
