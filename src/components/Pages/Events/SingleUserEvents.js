import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../../App';
import Header from '../../Home/Header';
import SingleUserEventDetail from './SingleUserEventDetail'





const SingleUserEvents = () => {

    // getting loggedInUser
    const { value2 } = useContext(UserContext);
    const [loggedInUser] = value2;
    const userEmail = { ...loggedInUser }

    // loading all events data
    const [userEvents, setUserEvents] = useState([]);
    useEffect(() => {
        fetch('https://whispering-hamlet-56486.herokuapp.com/userEvent')
            .then(res => res.json())
            .then(data => setUserEvents(data));
    }, [])


    // filtering loggedInUsers details
    const history = useHistory();
    const selectedEvents = userEvents.filter(evt => evt.events.email === userEmail.email);

    const handleCancelBtn = (id) => {
        fetch(`https://whispering-hamlet-56486.herokuapp.com/delete/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(result => {
            if(result > 0){
                history.push('/delete');
            }
        })
        console.log(id);
    }

    return (
        <div style={{height:'100vh'}} className='container page-bg'>
            <Header />
            <div className="row d-flex">
                <div className="col row">
                    {
                        selectedEvents.map(evt => <SingleUserEventDetail key={evt._id} singleUserEvents={evt} handleCancelBtn={handleCancelBtn}></SingleUserEventDetail>)
                    }
                </div>
            </div>

        </div>
    );
};

export default SingleUserEvents;