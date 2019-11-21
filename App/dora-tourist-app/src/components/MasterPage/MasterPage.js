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
import renderRoutes from "../../utils/RouteUtil";

class MasterPage extends Component {

    render() {
        return (
            <div>
                {/* <Preloader/> */}
                <div id="main-wrapper">
                    <Header/>
                    <LeftSideBar/>
                    <div className="page-wrapper">
                        <div className="container-fluid">
                            <HomeSearchBar/>

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
