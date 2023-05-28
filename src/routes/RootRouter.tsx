import { FC } from 'react';
import { Navigate, RouteObject, useRoutes } from 'react-router-dom';
import {Comp} from "../features/cc";


const routes: RouteObject[] = [
  {
    path: '*',
    element: <Comp/>,
  },
  {
    path: '*',
    element: <Navigate to="/" />,
  },
];

export const RootRouter: FC = () => useRoutes(routes);
