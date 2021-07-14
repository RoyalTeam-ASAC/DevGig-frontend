



import React, { Component } from 'react';
import './Newfooter.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faFacebook,
    faInstagram,
    faTwitter
 } from "@fortawesome/free-brands-svg-icons";




class Newfooter extends Component {
    render() {
        return (
            <div className='footer1'>
                <p className='paragraph1'>DivGiG &copy; 2021</p>
                <p className='paragraph1'>Phone: 000-000-000</p>

                <FontAwesomeIcon icon={faFacebook}  className="icon1" size="3x"/>
                <FontAwesomeIcon icon={faInstagram} className="icon1" size="3x"/>
                <FontAwesomeIcon icon={faTwitter} className="icon1" size="3x"/>
            </div>

        )
    }
}


export default Newfooter
