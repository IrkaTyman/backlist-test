import {useBooksStore} from "../../store/books/store";

export const useBookEditorState = () => {
    const editingBook = useBooksStore(store => store.editingBook);
    const setEditorState = useBooksStore(store => store.setEditorState)
    const isEditorOpened = useBooksStore(store => store.isEditorOpened);
    const updateBooks = useBooksStore(store => store.updateBooks);

    return{
        editingBook,
        isEditorOpened,
        setEditorState,
        updateBooks,
    }
}