import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from '../page/Shared/Header/Header';
import LeftsideNav from '../page/Shared/LeftSideNav/LeftSideNav';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container className='mt-4'>
                <Row>
                    <Col lg='2' className='d-none d-lg-block'>
                        <LeftsideNav></LeftsideNav>
                    </Col>
                    <Col lg='10'>
                        <Outlet></Outlet>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Main;