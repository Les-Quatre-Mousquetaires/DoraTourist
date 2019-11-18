/*
 * Created by @tranphuquy19 on 15/11/2019
 * Email: tranphuquy19@gmail.com
 */
import React from 'react';
import LoginComponent from "../components/AuthenticationPage/LoginComponent";
import RegisterComponent from "../components/AuthenticationPage/RegisterComponent";
import MasterPage from "../components/MasterPage/MasterPage";
import PageError404 from "../components/Meta/PageError404";
import LoginContainer from "../components/AuthenticationPage/LoginContainer";

const authRoutes = [
    {
        path: '/login',
        exact: true,
        main: () => <LoginContainer/>
    }, {
        path: '/register',
        exact: true,
        main: () => <RegisterComponent/>
    }, {
        path: '/',
        exact: false,
        main: () => <MasterPage/>
    }

]
export default authRoutes;
