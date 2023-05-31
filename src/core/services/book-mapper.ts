import {Book} from "../models/book";
import {BookDto} from "../dto/book-dto";

export namespace BookMapper {
    export function toDto(book: Book): BookDto {
        return {
            name: book.name,
            authors: book.authors,
            publicationYear: book.publicationYear,
            ISBN: book.ISBN,
            rating: book.rating,
            cover: book.cover,
        };
    }

    export function fromDto(dto: BookDto, uid: string): Book {
        return {...dto, uid};
    }
}
