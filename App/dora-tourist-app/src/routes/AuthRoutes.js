/*
 * Created by @tranphuquy19 on 15/11/2019
 * Email: tranphuquy19@gmail.com
 */
import React from 'react';
import LoginComponent from "../components/AuthenticationPage/LoginComponent";
import RegisterComponent from "../components/AuthenticationPage/RegisterComponent";
import MasterPage from "../components/MasterPage/MasterPage";
import PageError404 from "../components/Meta/PageError404";

const authRoutes = [
    {
        path: '/login',
        exact: false,
        main: () => <LoginComponent/>
    },{
        path: '/register',
        exact: false,
        main: () => <RegisterComponent/>
    },{
        path: '/',
        exact: true,
        main: () => <MasterPage/>
    },{
        path: '*',
        exact: true,
        main: () => <PageError404/>
    },

]
export default authRoutes;
