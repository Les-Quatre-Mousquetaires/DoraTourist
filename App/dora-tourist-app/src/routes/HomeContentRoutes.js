/*
 * Created by @tranphuquy19 on 15/11/2019
 * Email: tranphuquy19@gmail.com
 */
import React from 'react';
import {HomeContent} from "../components/HomePage/HomeContent";
import TestRoute from "../components/UtilElementComponents/TestRoute";
import TestRoute2 from "../components/UtilElementComponents/TestRoute2";
import PageError404 from "../components/Meta/PageError404";
import TourDetailElement from "../components/UtilElementComponents/TourDetailElement";
import DashBoard from "../components/UtilElementComponents/DashBoard";
import Profile from "../components/UtilElementComponents/Profile";
import TourContainer from '../components/HomePage/TourContainer';


const homeContentRoutes = [
    {
        path: '/',
        exact: true,
        main: () => <TourContainer/>
    },{
        path: '/test',
        exact: true,
        main: () => <TestRoute/>
    },{
        path: '/test2',
        exact: true,
        main: () => <TestRoute2/>
    },{
        path: '/tours/:id',
        exact: false,
        main: ({match}) => <TourDetailElement match={match} />
    },
    {
        path: '/dashboard',
        exact: false,
        main: () => <DashBoard/>
    },
    {
        path: '/profile/:id',
        exact: false,
        main: () => <Profile/>
    },
    {
        path: '*',
        exact: true,
        main: () => <PageError404/>
    },
];

export default homeContentRoutes;
