import {FC} from 'react';
import {Navigate, RouteObject, useRoutes} from 'react-router-dom';
import {booksRoutes} from "../features/books/routes";

const routes: RouteObject[] = [
    {
        path: '*',
        element: <Navigate to="/"/>,
    },
    ...booksRoutes,
];

export const RootRouter: FC = () => useRoutes(routes);
