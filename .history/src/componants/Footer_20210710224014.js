import React, { Component } from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Footer extends Component {
    render() {
        return (
            <div>
                <p>DivGiG &copy; 2021</p>
                <p>Phone: 000-000-000</p>
                <FontAwesomeIcon icon={["fab","fa-facebook"]}/>
            </div>
        )
    }
}

export default Footer
