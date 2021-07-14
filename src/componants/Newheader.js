import React, { Component } from 'react';
import './Newheader.css';
import { withAuth0 } from '@auth0/auth0-react';


import {
    BrowserRouter as Router,
    Link
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import LoginButton from './LoginButton'
import LogOutButton from './LogOutButton';



class Newheader extends Component {
    render() {
        const { user, isAuthenticated } = this.props.auth0;
        console.log(this.props.auth0)
        console.log(user);
        console.log(isAuthenticated);
        return (
            <div>
                <Navbar>


                    <Link to="/"> <img src='/logo.png' alt='logo' className="Logo1"/></Link>
                   
                    <Link to="/postwork" className="navBar1">Posted Jobs</Link>

                    <Link to="/findtalent" className="navBar1">Find Talent</Link>
                    <Link to="/contactus" className="navBar1">Contact Us</Link>
                    {isAuthenticated ? <Link to="/profile" className="navBar1">Profile</Link> : ''}

                    {isAuthenticated ? <LogOutButton  className='logIn1'/> : <LoginButton  />}


                </Navbar>
            </div>
        )
    }
};

export default withAuth0(Newheader);
