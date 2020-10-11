import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';
import logo from '../../../logos/Group 1329.png';
import plusIcon from '../../../logos/plus 1.png';

const AdminForm = () => {
    const history = useHistory()
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        const addNewEvent = { data }

        fetch('https://whispering-hamlet-56486.herokuapp.com/addedEvents', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(addNewEvent)
        })
            .then(res => res.json())
            .then(data => {
                alert('Event added successfully')
            })
        history.push('/home');

    };

    return (
        <>
            <div className="page-bg ">
                <div className="d-flex align-items-center bg-white py-4">
                    <Link to="/home"><img className='logo mx-5 pr-5' src={logo} alt="" /></Link>
                    <h5>Add Event</h5>
                </div>
                <div className="container row mt-5">
                    <div className="col-md-3 sidebar pt-5">
                        <Link to="/admin" className='pl-5'><img style={{ width: '10px' }} src={plusIcon} alt="" />  Add Event</Link>
                    </div>
                    <div className="col-md-9 bg-white p-2 admin-form">
                        <form className='d-flex ' onSubmit={handleSubmit(onSubmit)}>
                            <div className='p-4'>
                                <input name="title" ref={register({ required: true })} placeholder='Enter Title' />
                                {errors.title && <span className='error'>Name is required</span>}

                                <input className="description-input" name="description" ref={register({ required: true })} placeholder='Enter Description' />
                                {errors.description && <span className='error'>Email is required</span>}
                            </div>

                            <div className='p-4'>
                                <input name="date" type="date" ref={register({ required: true })} />
                                {errors.date && <span className='error'>date is required</span>}

                                <input name="banner" type="link" ref={register({ required: true })} placeholder="upload image url" />
                                {errors.banner && <span className='error'>image url is required</span>}
                                <input className='add-event' type="submit" value="Add Event" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminForm;