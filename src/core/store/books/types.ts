import {Book} from "../../models/book";
import {Ordering} from "../../models/ordering";

/** Books state. */
export type BooksState = {

    /** Books. */
    readonly books: Book[] | null;

    /** Best books. */
    readonly bestBook: Book | null;

    /** Is loading books. */
    readonly isLoading: boolean;

    /** Error status while loading data. */
    readonly errorStatus: number | null;

    /** Is opened book editor. */
    readonly isEditorOpened: boolean;

    /** Editing book. */
    readonly editingBook: Book | null;
}

/** Books actions. */
export interface BooksActions {

    /** Update books. */
    updateBooks(sortingName: string, ordering?: Ordering): void;

    /** Set editing book. */
    setEditorState(book: Book, isOpen: boolean): void;

    /** Reset store. */
    reset(): void;
}
