/*
 * Created by @tranphuquy19 on 15/11/2019
 * Email: tranphuquy19@gmail.com
 */
import React from 'react';
import {HomeContent} from "./components/HomePage/HomeContent";

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <HomeContent/>
    },
];

export default routes;
