import {Ordering} from "./ordering";

/** Model: Sorting (name and order) */
export type Sorting = {

    /** Sorting name. */
    name: 'authors' | 'publicationYear' | 'rating';

    /** Order type (asc or desc). */
    order: Ordering;
}