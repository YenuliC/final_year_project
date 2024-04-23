import React from 'react'
import './RecentDesign.css'
import Carousel from 'react-bootstrap/Carousel';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';


const RecentDesign = () => {
    return (
        <Container fluid>
            <Row className='recent-designs-container'>

                <Row>
                    <h2>Recent Designs</h2>
                </Row>
                <Row>
                    <Carousel data-bs-theme="dark">
                        <Carousel.Item>

                            <div className='img-set-2'>
                                <img
                                    className="d-block w-100"
                                    src=".\img\design1.jpeg" alt="Design 1" 
                                />
                                <img
                                    className="d-block w-100"
                                    src=".\img\design2.jpeg" alt="Design 2"
                                /><img
                                    className="d-block w-100"
                                    src=".\img\design3.jpeg" alt="Design 3"
                                />
                                <img
                                    className="d-block w-100"
                                    src=".\img\design4.png" alt="Design 4"
                                />
                            </div>

                        </Carousel.Item>
                        <Carousel.Item>

                            <div className='img-set-2'>
                            <img
                                    className="d-block w-100"
                                    src=".\img\design1.jpeg" alt="Design 1" 
                                />
                                <img
                                    className="d-block w-100"
                                    src=".\img\design2.jpeg" alt="Design 2"
                                /><img
                                    className="d-block w-100"
                                    src=".\img\design3.jpeg" alt="Design 3"
                                />
                                <img
                                    className="d-block w-100"
                                    src=".\img\design4.png" alt="Design 4"
                                />
                            </div>
                        </Carousel.Item>

                        <Carousel.Item>

                            <div className='img-set-2'>
                            <img
                                    className="d-block w-100"
                                    src=".\img\design1.jpeg" alt="Design 1" 
                                />
                                <img
                                    className="d-block w-100"
                                    src=".\img\design2.jpeg" alt="Design 2"
                                /><img
                                    className="d-block w-100"
                                    src=".\img\design3.jpeg" alt="Design 3"
                                />
                                <img
                                    className="d-block w-100"
                                    src=".\img\design4.png" alt="Design 4"
                                />
                            </div>
                        </Carousel.Item>

                        <Carousel.Item>

                            <div className='img-set-2'>
                            <img
                                    className="d-block w-100"
                                    src=".\img\design1.jpeg" alt="Design 1" 
                                />
                                <img
                                    className="d-block w-100"
                                    src=".\img\design2.jpeg" alt="Design 2"
                                /><img
                                    className="d-block w-100"
                                    src=".\img\design3.jpeg" alt="Design 3"
                                />
                                <img
                                    className="d-block w-100"
                                    src=".\img\design4.png" alt="Design 4"
                                />
                            </div>
                        </Carousel.Item>

                    </Carousel>
                </Row>

            </Row>



        </Container>

    )
}


export default RecentDesign