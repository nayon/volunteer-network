import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../logos/Group 1329.png';

const Header = () => {
    const { value2 } = useContext(UserContext);
    const [loggedInUser, setLoggedInUser] = value2;
    const { name, photo } = loggedInUser;
    return (
        <div className='container'>
            <div className="row d-flex align-items-center pt-3">

                {/* logo */}
                <div className="col-md-4 py-3">
                    <Link to='/home'><img className='logo' src={logo} alt="" /></Link>
                </div>


                {/* navbar */}
                <div className="col-md-8 pt-3 d-flex justify-content-end">
                    <NavLink className='nav-link' to='/home'>Home</NavLink>
                    <NavLink className='nav-link' to='/login'>login</NavLink>
                    <NavLink className='nav-link' to='/events'>Events</NavLink>
                    <NavLink className='nav-link' to='/blog'>Blog</NavLink>
                    {
                        loggedInUser &&
                        <div>
                            <h6 className='px-3 mt-2'>
                                <Link className="text-danger" to='/userEvents'>{name}</Link>
                                <img className="ml-2 user-img" src={photo} alt="" />
                            </h6>

                        </div>
                    }
                    <NavLink className='mr-2' to='/register'><button className='register btn btn-primary'>Register</button></NavLink>
                    <NavLink className=' ' to='/admin'><button className='admin btn btn-dark'>Admin</button></NavLink>
                </div>
            </div>
        </div>
    );
};

export default Header;