import {Book} from "../../models/book";
import {Ordering} from "../../models/ordering";

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
    sorting: string;

    /** Ordering. */
    ordering: Ordering;
}>

/** Books actions. */
export interface BooksActions {

    /** Update books. */
    updateBooks(sorting: string, ordering: Ordering): void;

    /** Set editing book. */
    setEditorState(book: Book | null, isOpen: boolean): void;

    /** Set sorting state. */
    setSortingState(sorting: string, ordering: Ordering): void;

    /** Reset store. */
    reset(): void;
}
