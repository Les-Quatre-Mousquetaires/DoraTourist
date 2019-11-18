/*
 * Created by @tranphuquy19 on 15/11/2019
 * Email: tranphuquy19@gmail.com
 */
import React from 'react';
import {HomeContent} from "../components/HomePage/HomeContent";
import TestRoute from "../components/UtilElementComponents/TestRoute";
import TestRoute2 from "../components/UtilElementComponents/TestRoute2";
import TourDetailElement from "../components/UtilElementComponents/TourDetailElement";
import DashBoard from "../components/UtilElementComponents/DashBoard";
import Profile from "../components/UtilElementComponents/Profile";

const homeContentRoutes = [
    {
        path: '/',
        exact: true,
        main: () => <HomeContent/>
    },{
        path: '/test',
        exact: false,
        main: () => <TestRoute/>
    },{
        path: '/test2',
        exact: false,
        main: () => <TestRoute2/>
    },
    {
        path: '/tour',
        exact: false,
        main: () => <TourDetailElement/>
    },
    {
        path: '/dashboard',
        exact: false,
        main: () => <DashBoard/>
    },
    {
        path: '/profile',
        exact: false,
        main: () => <Profile/>
    },

];

export default homeContentRoutes;
