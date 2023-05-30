import {dbBooks} from "./firestore";
import {query, getDocs, orderBy} from "firebase/firestore";
import {Book} from "../models/book";
import {Ordering} from "../models/ordering";

export namespace BooksService {
    export async function getBooks(sortingName: string, ordering: Ordering): Promise<Book[]> {
        const q = query(dbBooks, orderBy(sortingName, ordering), orderBy('name'))
        const data: Book[] = [];
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            const book = {...doc.data(), uid: doc.id} as Book;
            data.push(book);
        });
        return data;
    }
}