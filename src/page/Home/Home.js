import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseSummaryCard from '../Shared/CourseSummaryCard/CourseSummaryCard';

const Home = () => {
    const allCoureses = useLoaderData()
    return (
        <div className='row gy-4'>
            {
                allCoureses.map(course => <CourseSummaryCard key={course.id} course={course}></CourseSummaryCard>)
            }
        </div>
    );
};

export default Home;