import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const CourseSummaryCard = ({ course }) => {
    const { title, img, price, details } = course
    return (
        <div className='col-4'>
            <Card style={{ width: '18rem', }}>
                <Card.Img style={{ height: '200px' }} variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {details.length > 30 ? details.slice(0, 30) + "..." : details}
                    </Card.Text>
                    <p>{price}</p>
                    <Button variant="primary">Course Details</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default CourseSummaryCard;