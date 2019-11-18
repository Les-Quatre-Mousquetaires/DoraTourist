/*
 * Created by @tranphuquy19 on 15/11/2019
 * Email: tranphuquy19@gmail.com
 */
import React from 'react';
import {HomeContent} from "../components/HomePage/HomeContent";
import DetailPage from "../components/DetailPage/DetailPage";

const homeContentRoutes = [
    {
        path: '/',
        exact: false,
        main: () => <HomeContent/>
    },
];

export default homeContentRoutes;
