import React from 'react';

import logo from './images/logo.png';

const LoadingScreen = () => {

    return (
        <div className="bg-overlay">
            <div className="loading">
                <div className="loading-img">
                    <img src={logo} alt="error"/>
                </div>
            </div>
        </div>
    )
}

export default LoadingScreen;