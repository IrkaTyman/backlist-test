import {dbBooks} from "./firestore";
import { query, getDocs, orderBy, startAt, endAt, limit } from "firebase/firestore";
import {Book} from "../models/book";
import {converter} from "./firebase-mapper";

export namespace BooksService{

    export async function getBooks(page: number){
        const q = query(dbBooks, orderBy('publicationYear', 'desc'), orderBy('name'))
        const data: Map<number, Book[]> = new Map();
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            const book = doc.data() as Book;
            if(book.publicationYear === null){
                if(data.has(0)) data[0].push(book)
            }
            else if(data.has(book.publicationYear)) data[book.publicationYear].push(book)
            else{
                data[book.name] = [book];
            }
        });
    }
}