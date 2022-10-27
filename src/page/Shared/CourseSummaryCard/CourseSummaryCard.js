import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


const CourseSummaryCard = ({ course }) => {
    const { title, img, price, details, id } = course
    return (
        <div className='col-lg-4 col-md-6 col-12'>
            <Card style={{ width: '18rem', height: '420px' }}>
                <Card.Img style={{ height: '200px' }} variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {details.length > 30 ? details.slice(0, 30) + "..." : details}
                    </Card.Text>
                    <p className='fw-bold'>{price}</p>
                    <Link to={`/details/${id}`}> <Button variant="primary">Course Details</Button></Link>
                </Card.Body>
            </Card>
        </div >
    );
};

export default CourseSummaryCard;