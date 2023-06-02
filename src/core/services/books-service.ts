import {dbBooks, coverStorage} from "./firebase";
import {query, getDocs, orderBy, setDoc, addDoc, doc, deleteDoc} from "firebase/firestore";
import {uploadBytes, ref, getDownloadURL} from "firebase/storage";
import {Book} from "../models/book";
import {BookMapper} from "./book-mapper";
import {BookDto} from "../dto/book-dto";
import {Sorting} from "../models/sorting";

export namespace BooksService {

    /** Axios: get books. */
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
                const lowerSearch = search.toLowerCase();
                return data.filter(book => book.name.toLowerCase().includes(lowerSearch) ||
                    book.authors.toLowerCase().includes(lowerSearch) ||
                    book.ISBN && book.ISBN.toLowerCase().includes(lowerSearch));
            }
            return data;
        } catch (error) {
            return null;
        }
    }

    /** Axios: upload cover. */
    export async function uploadBookCover(cover: File): Promise<string | null> {
        try {
            const imageRef = ref(coverStorage, cover.name)
            await uploadBytes(imageRef, cover);
            const url = await getDownloadURL(imageRef);
            return url;
        } catch (error) {
            return null;
        }
    }

    /** Axios: create books. */
    export async function createBook(book: Book): Promise<boolean> {
        try {
            await addDoc(dbBooks, BookMapper.toDto(book));
            return true;
        } catch (error) {
            return false;
        }
    }

    /** Axios: edit books. */
    export async function editBook(book: Book): Promise<boolean> {
        try {
            await setDoc(doc(dbBooks, book.uid), BookMapper.toDto(book));
            return true;
        } catch (error) {
            return false;
        }
    }

    /** Axios: delete books. */
    export async function deleteBook(uid: string): Promise<boolean> {
        try {
            await deleteDoc(doc(dbBooks, uid));
            return true;
        } catch (error) {
            return false;
        }
    }
}