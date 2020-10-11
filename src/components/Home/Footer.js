import React from 'react';
import logo from '../../logos/footer-logo.png';

const Footer = () => {
    return (
        <div className='bg-dark footer mt-3'>
            <div className="d-flex justify-content-around py-5">
                <div><img className="logo" src={logo} alt=""/></div>
                <div className='text-white'>
                    <h5 className="text-secondary">Blog</h5>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit.</p>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="contact text-white">
                    <h5 className="text-secondary">Contact Us</h5>
                    <p><strong>Phone: </strong> 01838-00-000</p>
                    <p><strong>Email: </strong><em> <span className="text-info">volunteernetwork@gamil.com</span></em></p>
                    <p className="text-info text-center"><small>Copyright&copy; 2020 || all rights reserved by Volunteer Network</small></p>
                </div>
            </div>
           
        </div>
    );
};

export default Footer;