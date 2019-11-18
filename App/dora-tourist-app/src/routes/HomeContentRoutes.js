/*
 * Created by @tranphuquy19 on 15/11/2019
 * Email: tranphuquy19@gmail.com
 */
import React from 'react';
import {HomeContent} from "../components/HomePage/HomeContent";
import TestRoute from "../components/UtilElementComponents/TestRoute";
import TestRoute2 from "../components/UtilElementComponents/TestRoute2";

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
];

export default homeContentRoutes;
