/*
 * Created by @tranphuquy19 on 15/11/2019
 * Email: tranphuquy19@gmail.com
 */
import React from 'react';
import {HomeContent} from "../components/HomePage/HomeContent";
<<<<<<< Updated upstream
import DetailPage from "../components/DetailPage/DetailPage";
=======
import TestRoute from "../components/UtilElementComponents/TestRoute";
import TestRoute2 from "../components/UtilElementComponents/TestRoute2";
import {HotelElement} from "../components/UtilElementComponents/HotelElement";
>>>>>>> Stashed changes

const homeContentRoutes = [
    {
        path: '/',
        exact: false,
        main: () => <HomeContent/>
    },
    {
        path: '/tours',
        exact: false,
        main: () => <DetailPage/>
    },
    {
        path: '/tours',
        exact: false,
        main: () => <TestRoute2/>
    },
];

export default homeContentRoutes;
