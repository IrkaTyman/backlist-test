export type Book = Readonly<{
    name: string;
    authors: string;
    publicationYear: number | null;
    rating: number | null;
    ISBN: string | null;
    cover: string | null;
    uid: string;
}>