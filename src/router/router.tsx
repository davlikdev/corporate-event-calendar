import React from "react";
import Event from "../pages/Event"
import Login from "../pages/Login";
import {Navigate} from "react-router-dom";


export interface IRoute {
    path: string;
    element: React.ReactNode
}
export enum RouteNames {
    LOGIN = "/login",
    EVENT = "/",
}
export const privateRoutes : IRoute[] = [
    {path:RouteNames.EVENT, element: <Event/>,},
    {path:"*", element: <Navigate to="/" replace/>}

]
export const publicRoutes : IRoute[] = [
    {path: RouteNames.LOGIN, element: <Login/>,},
    {path:"*", element: <Navigate to={RouteNames.LOGIN} replace/>}
]