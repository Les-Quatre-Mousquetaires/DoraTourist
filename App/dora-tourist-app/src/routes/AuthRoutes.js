/*
 * Created by @tranphuquy19 on 15/11/2019
 * Email: tranphuquy19@gmail.com
 */
import React from 'react';
import RegisterComponent from "../components/AuthenticationPage/RegisterComponent";
import MasterPage from "../components/MasterPage/MasterPage";
import LoginContainer from "../components/AuthenticationPage/LoginContainer";
import BookingPage from "../components/UtilElementComponents/BookingPage";

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
        path: '/booking/:id',
        exact: false,
        main: ({match}) => <BookingPage match={match}/>
    },{
        path: '/',
        exact: false,
        main: () => <MasterPage/>
    }

]
export default authRoutes;
