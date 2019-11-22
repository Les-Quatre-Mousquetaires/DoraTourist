/*
 * Created by @tranphuquy19 on 15/11/2019
 * Email: tranphuquy19@gmail.com
 */
import React, {Component} from 'react';
import {Preloader} from "../Meta/Preloader";
import {Header} from "../Header/Header";
import {LeftSideBar} from "../LeftSideBar/LeftSideBar";

import homeContentRoutes from "../../routes/HomeContentRoutes";
import {HomeRightSideBar} from "../HomePage/HomeRightSideBar";
import renderRoutes from "../../utils/RouteUtil";
import HomeSearchBar from '../HomePage/HomeSearchBar';

class MasterPage extends Component {

    render() {
        const currentPath = window.location.pathname;        
        return (
            <div>
                {/* <Preloader/> */}
                <div id="main-wrapper">
                    <Header/>
                    <LeftSideBar/>
                    <div className="page-wrapper">
                        <div className="container-fluid">
                            {/* <HomeSearchBar /> */}
                            { !currentPath.includes('/tours/') && !currentPath.includes('profile') ? <HomeSearchBar /> : null}
                            
                            {/*body content here!*/}
                            {renderRoutes(homeContentRoutes, true)}

                            <HomeRightSideBar/>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default MasterPage;
