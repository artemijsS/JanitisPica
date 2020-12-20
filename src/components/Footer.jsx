import React from 'react';

import logo from './images/logo.png';

export const Footer = () => {

    return (
        <div className="footer">
            <div className="container">
                <div className="center">
                    <img width="150" src={logo} alt="Pizza logo"/>
                </div>
            </div>
        </div>
    )
}

export default Footer;