import React from 'react';

const SingleUserEventDetail = (props) => {
    const { events, _id } = props.singleUserEvents;
    // console.log(props.singleUserEvents);
    return (

        <div className="col-md-6 my-5 p-2">
            <div className="single-event rounded bg-white p-4">
                <h6>{events.title}</h6>
                <p>{events.date}</p>
                <p><small><strong>{events.email}</strong></small></p>
                <button onClick={() => props.handleCancelBtn(_id)} className="btn btn-primary">Cancel</button>
            </div>
        </div>
    );
};

export default SingleUserEventDetail;