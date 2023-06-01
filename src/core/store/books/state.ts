import {BooksState} from './types';

export const initialState: BooksState = {
    books: null,
    bestBook: null,
    isLoading: false,
    errorStatus: null,
    isEditorOpened: false,
    editingBook: null,
    sorting: {name: 'publicationYear', order: 'desc'},
    search: '',
};
