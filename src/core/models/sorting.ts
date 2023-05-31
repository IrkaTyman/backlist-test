import {Ordering} from "./ordering";

export type Sorting = {
    name: 'authors' | 'publicationYear' | 'rating';
    order: Ordering;
}