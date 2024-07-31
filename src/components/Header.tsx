// @ts-ignore
import React from 'react';
import '/src/components/styles/header.css';

function Header() {
    return (
        <>
            <div className="header-main">
                <div className="header-logo">
                    <img className="logo" src="../public/assets/logo/logo.png" alt="logo"/>
                </div>
                <div className="header-middle">
                    <p>Mid Section</p>
                </div>

                <div className="header-end">
                    <p>End Section</p>
                </div>
            </div>
        </>
    );
}

export default Header;
