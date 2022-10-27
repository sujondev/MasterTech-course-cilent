import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const CheckOut = () => {
    const { user } = useContext(AuthContext)
    return (
        <div className='text-center'>
            <div className='text-center mt-3 fw-bold'>
                userUid:{user?.uid}
            </div>
        </div>
    );
};

export default CheckOut;