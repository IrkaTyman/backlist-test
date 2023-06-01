/** Dto: Book. */
export type BookDto = Readonly<{

    /** Book name. */
    name: string;

    /** Book authors. */
    authors: string;

    /** Book publication year. */
    publicationYear: number | null;

    /** Book rating. */
    rating: number | null;

    /** Book ISBN. */
    ISBN: string | null;

    /** Book cover. */
    cover: string | null;
}>;