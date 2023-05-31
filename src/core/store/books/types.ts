import {Book} from "../../models/book";
import {Sorting} from "../../models/sorting";

/** Books state. */
export type BooksState = Readonly<{

    /** Books. */
    books: Book[] | null;

    /** Best books. */
    bestBook: Book | null;

    /** Is loading books. */
    isLoading: boolean;

    /** Error status while loading data. */
    errorStatus: number | null;

    /** Is opened book editor. */
    isEditorOpened: boolean;

    /** Editing book. */
    editingBook: Book | null;

    /** Sorting. */
    sorting: Sorting;
}>

/** Books actions. */
export interface BooksActions {

    /** Update books. */
    updateBooks(sorting: Sorting): void;

    /** Set editing book. */
    setEditorState(book: Book | null, isOpen: boolean): void;

    /** Set sorting state. */
    setSortingState(sorting: Sorting): void;

    /** Reset store. */
    reset(): void;
}
