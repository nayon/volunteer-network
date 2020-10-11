import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logos/Group 1329.png';

const DeleteNote = () => {
    return (
        <div className='page-bg delete-container' style={{height:'100vh'}}>
            <Link to='/home'><img className='logo m-5' src={logo} alt="" /></Link>
            <div className='container delete-body bg-white rounded w-50 text-center py-5 mt-2'>
                <h3>Deleted successfully</h3>
                <Link className='btn btn-primary mt-3 mr-2' to='/events'>Go Back to Register list</Link>
                <Link className='btn btn-primary mt-3 ml-2' to='/userEvents'>Go Back to Your collections</Link>
            </div>
        </div>
    );
};

export default DeleteNote;