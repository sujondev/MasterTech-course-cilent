import React from 'react';
import { useContext } from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import LeftsideNav from '../LeftSideNav/LeftSideNav';
import { FaUser } from "react-icons/fa";

const Header = () => {
    const { user, logout } = useContext(AuthContext)
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand>Master Tech Course</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Link to='/' className='text-decoration-none ms-3 fw-semi-bold fs-5'>Course</Link>

                            <Link to="/blog" className='text-decoration-none ms-3 fw-semi-bold fs-5'>Blog</Link>
                            <Link to="/faq" className='text-decoration-none ms-3 fw-semi-bold fs-5'>FAQ</Link>
                        </Nav>
                        <Nav>
                            {user?.uid ? <>
                                <p className='m-3'> {user.displayName}</p>
                                <button onClick={logout} className='btn btn-primary m-3'>logout</button>
                            </>
                                :
                                <Link to='/login' className='text-decoration-none ms-3 fw-semi-bold fs-5'>Login</Link>
                            }
                        </Nav>
                        <Nav>
                            {
                                user?.photoURL ?
                                    <Image style={{ height: '30px' }} roundedCircle src={user?.photoURL}></Image>
                                    :
                                    <FaUser className='ms-3'></FaUser>
                            }
                        </Nav>
                        <div className='d-lg-none'>
                            <LeftsideNav></LeftsideNav>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;