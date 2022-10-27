import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const LeftsideNav = () => {
    const [categories, setCategroies] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/categroies')
            .then(res => res.json())
            .then(data => setCategroies(data))
    }, [])

    return (
        <div>
            <h2>this is left side nav</h2>
            {
                categories.map(category => <p key={category.id}>
                    <Link to={`category/${category.id}`}>{category.name}</Link>
                </p>)
            }
        </div>
    );
};

export default LeftsideNav;