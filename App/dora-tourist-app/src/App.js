import React, {Component} from 'react';
import {Preloader} from "./components/Meta/Preloader";
import {Header} from "./components/Header/Header";
import {LeftSideBar} from "./components/LeftSideBar/LeftSideBar";
import {HomeSearchBar} from "./components/HomePage/HomeSearchBar";
import {HomeContent} from "./components/HomePage/HomeContent";
import {HomeRightSideBar} from "./components/HomePage/HomeRightSideBar";

class App extends Component {
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

                            <HomeContent/>

                            <HomeRightSideBar/>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default App;
