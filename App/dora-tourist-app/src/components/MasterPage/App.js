import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import authRoutes from "../../routes/AuthRoutes";
import renderRoutes from "../../utils/RouteUtil";
class App extends Component {

    render() {
        return (
            <BrowserRouter>
                {renderRoutes(authRoutes)}
            </BrowserRouter>
        );
    }
}

export default App;
