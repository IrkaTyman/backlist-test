import {useState, useEffect} from 'react';
import {useBooksStore} from "../../store/books/store";
import {Ordering} from "../../models/ordering";

type Props = Readonly<{
    sortingName: string;
    ordering?: Ordering
}>

export const useBooksState = (props:Props) => {
    const books = useBooksStore(store => store.books);
    const isLoading = useBooksStore(store => store.isLoading);
    const errorStatus = useBooksStore(store => store.errorStatus);
    const updateBooks = useBooksStore(store => store.updateBooks);

    useEffect(()=>{
        updateBooks(props.sortingName, props.ordering);
    },[props.sortingName, props.ordering]);

    return{
        books,
        isLoading,
        errorStatus
    }
}