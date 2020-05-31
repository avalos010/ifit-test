import React from 'react';
import Logo from '../images/ifit-coach-logo.svg'
import MainNavLinks from './MainNavLinks';
const MainNav = () => (
    <div className="d-flex flex-row justify-content-between align-items-center main-nav">
        <div className="main-nav-logo ml-4">
            <img width={176} src={Logo} alt="logo" />
        </div>
        <MainNavLinks />
        <div className="main-nav-btn-container">
            <button className="main-nav-btn mr-4">SIGN UP</button>
        </div>
    </div>
)

export default MainNav;