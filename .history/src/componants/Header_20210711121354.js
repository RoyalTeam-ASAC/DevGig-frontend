import React, { Component } from 'react';
import './Header.css';
import Home from './Home';
import { withAuth0 } from '@auth0/auth0-react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
} from 'react-router-dom';


class Header extends Component {
    render() {
        return (
            <div>

                <Router>
                    <nav>
                        <ul>
                            <li className="navBar">
                                <Link to="/" className="Logo">DivGig</Link>
                            </li>
                            <li className="navBar">
                                <Link to="/">Post Work</Link>
                            </li>
                            <li className="navBar">
                                <Link to="/" >Find Talent</Link>
                            </li>
                            <li className="navBar">
                                <Link to="/" >Contact Us</Link>
                            </li>
                            <li className="navBar">
                                <Link to="/" className="logIn">Log in</Link>
                            </li>
                        </ul>
                    </nav>
                    <Switch>
                        <Route exact path='/'>
                            <Home />
                        </Route>
                        <Route exact path='/postWork'>
                            <Home />
                        </Route>
                        <Route exact path='/findTalent'>
                            <Home />
                        </Route>
                        <Route exact path='/findTalent'>
                            <Home />
                        </Route>
                    </Switch>
                </Router>
            </div>
        )
    }
};

export default withAuth0(Header);
