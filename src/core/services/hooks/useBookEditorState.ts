import {useBooksStore} from "../../store/books/store";
import {Book} from "../../models/book";
import {BooksService} from "../books-service";
import {toast} from "react-toastify";

export const useBookEditorState = () => {
    const editingBook = useBooksStore(store => store.editingBook);
    const setEditorState = useBooksStore(store => store.setEditorState)
    const isEditorOpened = useBooksStore(store => store.isEditorOpened);
    const updateBooks = useBooksStore(store => () => store.updateBooks(store.sorting, store.search));

    async function createBook(book: Book) {
        const isSuccess = await BooksService.createBook(book);
        if (isSuccess) {
            toast.success('Книга добавлена в каталог');
            updateBooks();
            setEditorState(null, false);
        } else {
            toast.error('Произошла ошибка при добавлении книги');
        }
    }

    async function editBook(book: Book) {
        const isSuccess = await BooksService.editBook(book);
        if (isSuccess) {
            toast.success('Книга изменена');
            setEditorState(null, false);
            updateBooks();
        } else {
            toast.error('Произошла ошибка при редактировании книги');
        }
    }

    return {
        editingBook,
        isEditorOpened,
        setEditorState,
        editBook,
        createBook,
    }
}