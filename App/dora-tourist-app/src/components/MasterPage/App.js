import React, {Component} from 'react';
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
                <Switch>
                    {this.renderRoutes(authRoutes)}
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
