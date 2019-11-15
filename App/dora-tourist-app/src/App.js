import React, {Component} from 'react';
import {Preloader} from "./components/Meta/Preloader";
import {Header} from "./components/Header/Header";
import {LeftSideBar} from "./components/LeftSideBar/LeftSideBar";
import {HomeSearchBar} from "./components/HomePage/HomeSearchBar";
import {HomeContent} from "./components/HomePage/HomeContent";
import {HomeRightSideBar} from "./components/HomePage/HomeRightSideBar";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import routes from "./routes";

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
                <div>
                    <Preloader/>
                    <div id="main-wrapper">
                        <Header/>
                        <LeftSideBar/>
                        <div className="page-wrapper">
                            <div className="container-fluid">
                                <HomeSearchBar/>

                                {/*body content here!*/}
                                <Switch>
                                    {this.renderRoutes(routes)}
                                </Switch>

                                <HomeRightSideBar/>
                            </div>
                        </div>

                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
