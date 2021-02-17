import React from "react";
import {
    Route,
    Switch,
    BrowserRouter as Router,
    Redirect
} from "react-router-dom";

//components
import App from "../components/App";

//pages
import {Home} from "../pages/Home";

export const AppRoutes = () =>{
    return (
        <Router>
            <App>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Redirect to="/"/>                   
                </Switch>
            </App>
        </Router>
    );
}