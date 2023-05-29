import {Book} from "../../models/book";

/** Books state. */
export type BooksState = {

    /** Is opened book editor. */
    readonly isEditorOpened: boolean;

    /** Editing book. */
    readonly editingBook: Book | null;
}

/** Books actions. */
export interface BooksActions {

    /** Set editing book. */
    setEditorState(book: Book, isOpen: boolean) : void;

    /** Reset store. */
    reset(): void;
}
