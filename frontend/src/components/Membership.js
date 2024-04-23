import React from 'react'
import './Membership.css'
import { Button, Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {useNavigate } from 'react-router-dom';


const Membership = () => {
    const navigate = useNavigate()
    return (

        <Container fluid>
            <Row className='membership-container'>
                <Col className='amount'>
                    <h1 className='price'>$99</h1>
                    <p className='duration'>Month</p>
                </Col>


                <Col sm={8}>
                    <Row className='tittle-bar'>

                        <Col className='tittle-sub'>

                            <Col sm={1}>
                                <img src='.\img\membershipimg.png' alt='membership-img' className='membership-img'></img>
                            </Col>
                            <Col className='tittle-mem'>

                                <h1>Membership</h1>
                                <h1>Tittle</h1>
                                <p>Sub tittle here</p>

                            </Col>


                        </Col>



                        <Col sm={4}>
                            <Button onClick={() => navigate('/input')} className='btn-subscribe'>Get Started</Button>
                        </Col>

                    </Row>


                </Col>

            </Row>



        </Container>

    )
}

export default Membership