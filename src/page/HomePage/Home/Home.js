import Carousel from 'react-bootstrap/Carousel';
import React from 'react';

const Home = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://jthemes.net/themes/html/etreeks/files/images/slider/slide-4.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <div className='w-100 d-flex flex-column justify-content-center align-items-center'>
                            <h2>25K+ STUDENTS TRUST OUR ONLINE COURSES</h2>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://jthemes.net/themes/html/etreeks/files/images/slider/slide-5.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <div className='d-flex flex-column justify-content-center align-items-center'>
                            <h2>LEARN OUR COURSES AND EARN NEW SKILLS</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://jthemes.net/themes/html/etreeks/files/images/slider/slide-6.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <div className='d-flex flex-column justify-content-center align-items-center'>
                            <h2>2,769 ONLINE COURSES FROM THE BEST TUTORS</h2>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Home;