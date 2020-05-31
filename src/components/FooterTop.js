import React from 'react'

const FooterTop = () => (
    <div className="footer-top-container d-flex flex-row justify-content-center align-items-top text-light">
        <div className="footer-top-item d-flex flex-column m-5">
            <p className="font-weight-bold">Company</p>
            <a href="" className="mt-n2">About</a>
            <a href="" className="mt-2">Contact Us</a>
            <a href="" className="mt-2">Careers</a>
        </div>
        <div className="footer-top-item d-flex flex-column m-5">
            <p className="font-weight-bold">Account</p>
            <a href="" className="mt-n2">Log In</a>
            <a href="" className="mt-2">Create Account</a>
        </div>
        <div className="footer-top-item d-flex flex-column m-5">
            <p className="font-weight-bold">Support</p>
            <a href="" className="mt-n2">Help Center</a>
            <a href="" className="mt-2">Accessibility</a>
        </div>
    </div>
)

export default FooterTop;