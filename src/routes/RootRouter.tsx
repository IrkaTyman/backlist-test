import {FC} from 'react';
import {Navigate, RouteObject, useRoutes} from 'react-router-dom';
import {booksRoutes} from "../features/books/routes";

const routes: RouteObject[] = [
    {
        path: '*',
        element: <Navigate to="/backlist-test/"/>,
    },
    ...booksRoutes,
];

export const RootRouter: FC = () => useRoutes(routes);
