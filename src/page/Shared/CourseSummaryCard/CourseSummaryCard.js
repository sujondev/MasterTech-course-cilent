import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const CourseSummaryCard = ({ course }) => {
    const { title, img, price } = course
    return (
        <div className='col-4'>
            <Card style={{ width: '18rem', height: '420px' }}>
                <Card.Img style={{ height: '200px' }} variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <p>{price}</p>
                    <Button variant="primary">Course Details</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default CourseSummaryCard;