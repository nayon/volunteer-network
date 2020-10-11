import React from 'react';
import { Card } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';

const HomeCard = (props) => {
    const { title, img } = props.data;

    const history = useHistory();
    const handleCardItem = () => {
        history.push('/login')
    }

    return (
        <Link onClick={handleCardItem} to={'/title/' + title} className="col-md-3 nav-link">
            <div className=" pb-3">
                <Card onClick={handleCardItem} className='bg-primary text-white single-card'>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                    </Card.Body>
                </Card>
            </div>
        </Link>
    );
};

export default HomeCard;