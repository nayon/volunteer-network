import React from 'react';
import { Card } from 'react-bootstrap';

const DisplayAddedEvents = ({ addedEvents }) => {
    const { data } = addedEvents;
    return (
        <div className="col-md-3">
            <div className=" pb-3">
                <Card className='bg-primary text-white single-card'>
                    <Card.Img variant="top" src={data.banner} />
                    <Card.Body>
                        <Card.Title>{data.title}</Card.Title>
                        <p>{data.description}</p>
                        <p><small><strong>{data.date}</strong></small></p>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default DisplayAddedEvents;