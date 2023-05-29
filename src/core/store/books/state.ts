import {BooksState} from './types';

export const initialState: BooksState = {
    books: null,
    isLoading: false,
    errorStatus: null,
    isEditorOpened: false,
    editingBook: null,
};
