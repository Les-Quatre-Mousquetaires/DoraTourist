/*
 * Created by @tranphuquy19 on 15/11/2019
 * Email: tranphuquy19@gmail.com
 */
import React, {Component} from 'react';
import {Preloader} from "../Meta/Preloader";
import {Header} from "../Header/Header";
import {LeftSideBar} from "../LeftSideBar/LeftSideBar";
import {HomeSearchBar} from "../HomePage/HomeSearchBar";
import homeContentRoutes from "../../routes/HomeContentRoutes";
import {HomeRightSideBar} from "../HomePage/HomeRightSideBar";
import {Route, Switch} from "react-router-dom";

class MasterPage extends Component {
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
                                {this.renderRoutes(homeContentRoutes)}
                            </Switch>


                            <HomeRightSideBar/>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default MasterPage;
