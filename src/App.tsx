import React from 'react';
import Home from "./Pages/Home";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Report from "./Pages/Report";
import Patient from "./Pages/Patient";

export default function App() {
    return (

        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/patientform">Patient</Link>
                    </li>
                    <li>
                        <Link to="/patientreport">Verslag</Link>
                    </li>
                </ul>

                <hr/>

                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route path="/patientform">
                        <Patient/>
                    </Route>
                    <Route path="/patientreport">
                        <Report/>
                    </Route>
                </Switch>
            </div>
        </Router>

    );
}
