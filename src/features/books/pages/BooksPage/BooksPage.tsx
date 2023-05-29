import React, {useState, useEffect, FC, memo} from 'react';
import {Header} from "../../../../components/Header";
import {BooksService} from "../../../../core/services/books-service";

const BooksPageComponent: FC = () => {
    useEffect(()=>{
        BooksService.getBooks(1);
    })
    return <Header/>;
}

export const BooksPage = memo(BooksPageComponent);