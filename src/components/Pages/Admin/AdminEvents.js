import React, { useEffect, useState } from 'react';
import DisplayAddedEvents from './DisplayAddedEvents';

const AdminEvents = () => {
    const [newEvent, setNewEvent] = useState([]);

    useEffect(() => {
        fetch('https://whispering-hamlet-56486.herokuapp.com/adminEvents')
            .then(res => res.json())
            .then(data => setNewEvent(data))
    })

    return (
        <div className="container">
            <div className="row d-flex">
                <div className="col row">
                    {
                        newEvent.map(evt => <DisplayAddedEvents key={evt._id} addedEvents={evt} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default AdminEvents;