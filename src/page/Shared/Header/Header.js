import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import LeftsideNav from '../LeftSideNav/LeftSideNav';

const Header = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand>Master Tech Course</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Link to='/' className='text-decoration-none ms-3 fw-semi-bold fs-5'>Course</Link>
                            <Link to='/login' className='text-decoration-none ms-3 fw-semi-bold fs-5'>Login</Link>
                            <Link to="/blog" className='text-decoration-none ms-3 fw-semi-bold fs-5'>Blog</Link>
                            <Link to="/faq" className='text-decoration-none ms-3 fw-semi-bold fs-5'>FAQ</Link>
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