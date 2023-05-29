import {dbBooks} from "./firestore";
import {query, getDocs, orderBy} from "firebase/firestore";
import {Book} from "../models/book";
import {BooksData} from "../models/books-data";
import {Ordering} from "../models/ordering";

export namespace BooksService {
    export async function getBooks(sortingName: string, ordering: Ordering): Promise<BooksData> {
        const q = query(dbBooks, orderBy(sortingName, ordering), orderBy('name'))
        const data: BooksData = new Map();
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            const book = doc.data() as Book;
            const key = book.publicationYear ?? 0;

            const books = data.get(key) || [];
            books.push(book)
            data.set(key, books);
        });
        return data;
    }
}