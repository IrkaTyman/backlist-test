import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const BooksPage = lazy(() => import('./pages/BooksPage').then(module => ({ default: module.BooksPage })));

export const booksRoutes: RouteObject[] = [
    {
        path: '/',
        element: <BooksPage/>,
    },
];
