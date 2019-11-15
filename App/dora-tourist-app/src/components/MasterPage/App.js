import React, {Component} from 'react';
import {Preloader} from "../Meta/Preloader";
import {Header} from "../Header/Header";
import {LeftSideBar} from "../LeftSideBar/LeftSideBar";
import {HomeSearchBar} from "../HomePage/HomeSearchBar";
import {HomeContent} from "../HomePage/HomeContent";
import {HomeRightSideBar} from "../HomePage/HomeRightSideBar";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import authRoutes from "../../routes/AuthRoutes";

class App extends Component {
    renderRoutes = (routes) => {
        let routesRendered = null;
        if (routes.length > 0) {
            routesRendered = routes.map((route, index) => {
                return (
                    <Route key={index} path={route.path} exact={route.exact} component={route.main}/>
                );
            });
            return routesRendered;
        }
    };

    render() {
        return (
            <BrowserRouter>
                {this.renderRoutes(authRoutes)}
            </BrowserRouter>
        );
    }
}

export default App;
