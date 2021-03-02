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
import {PageNotFound} from "../pages/404";

export const AppRoutes = () =>{
    return (
        <Router>
            <App>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path='/github' component={() => { 
                        window.location.href = 'https://github.com/VidalLeonardoDeLosSantosRincon'; 
                        return null;
                    }}/>
                    <Route component={PageNotFound}/>
                    <Redirect to="/"/>                   
                </Switch>
            </App>
        </Router>
    );
}