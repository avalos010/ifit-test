import React from 'react'

const MainNavLinks = () => (
    <>
        <div className="mobile-menu">
            <label htmlFor="show" className="fa fa-bars"></label>
            <input type="checkbox" id="show" />

            <div className="main-nav-links d-flex flex-md-row">
                <a href="#">EXCERCISE</a>
                <a href="#">NUTRITION</a>
                <a href="#">ACTIVITY</a>
                <a href="#">SLEEP</a>
            </div>
        </div>
    </>
)
export default MainNavLinks