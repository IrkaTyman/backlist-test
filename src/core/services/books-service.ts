import {dbBooks} from "./firestore";
import {query, getDocs, orderBy, setDoc, addDoc, doc, deleteDoc, where} from "firebase/firestore";
import {Book} from "../models/book";
import {BookMapper} from "./book-mapper";
import {BookDto} from "../dto/book-dto";
import {Sorting} from "../models/sorting";

export namespace BooksService {
    export async function getBooks(sorting: Sorting, search: string): Promise<Book[] | null> {
        try {
            const q = query(dbBooks, orderBy(sorting.name, sorting.order),
                orderBy('name'))
            const data: Book[] = [];
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                const book = BookMapper.fromDto(doc.data() as BookDto, doc.id);
                data.push(book);
            });

            if (search) {
                return data.filter(book => book.name.includes(search) || book.authors.includes(search) || book.ISBN && book.ISBN.includes(search));
            }
            return data;
        } catch (error) {
            return null;
        }
    }

    export async function createBook(book: Book): Promise<boolean> {
        try {
            await addDoc(dbBooks, BookMapper.toDto(book));
            return true;
        } catch (error) {
            return false;
        }
    }

    export async function editBook(book: Book): Promise<boolean> {
        try {
            await setDoc(doc(dbBooks, book.uid), BookMapper.toDto(book));
            return true;
        } catch (error) {
            return false;
        }
    }

    export async function deleteBook(uid: string): Promise<boolean> {
        try {
            await deleteDoc(doc(dbBooks, uid));
            return true;
        } catch (error) {
            return false;
        }
    }
}