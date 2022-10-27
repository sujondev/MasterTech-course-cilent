import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const CourseDeatails = () => {
    const courseDetail = useLoaderData()
    console.log(courseDetail);
    const { title, details, img, price, id } = courseDetail
    return (
        <div>
            <img className='img-fluid' src={img} alt="" />
            <div>
                <h3>{title}</h3>
                <p>{details}</p>
            </div>
            <p className='fw-semibold'>Price: {price}</p>
            <div className='d-flex justify-content-between align-items-center mb-3'>
                <button className='btn btn-primary fw-semi-bold'>Pdf Download</button>
                <Link to={`/premimum/${id}`}><button className='btn btn-primary fw-semi-bold'>Premium Access</button></Link>
            </div>
        </div>
    );
};

export default CourseDeatails;