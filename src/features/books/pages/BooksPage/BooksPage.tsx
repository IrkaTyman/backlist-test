import React, {useState, useEffect, FC, memo} from 'react';
import {Header} from "../../../../components/Header";
import {useBooksState} from "../../../../core/services/hooks/useBooksState";


const BooksPageComponent: FC = () => {
    const {books, errorStatus, isLoading} = useBooksState('')
    return <Header/>;
}

export const BooksPage = memo(BooksPageComponent);