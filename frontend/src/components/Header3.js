import React from 'react'


import { Container, Navbar } from 'react-bootstrap'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import {useNavigate } from 'react-router-dom';

import './header3.css';

const Header3 = () => {
    const navigate = useNavigate();
    return (
        <div>
            <Navbar className='nav'>
                <Container >
                    <Row>
                        <Col>
                            <Navbar.Brand href='#'>
                                <img src='.\img\user 1.png' alt='user' className='user_1'></img>
                            </Navbar.Brand>
                        </Col>

                        <Col md="auto">
                            <Nav className='bold-link'>Input your Data</Nav>
                        </Col>
                    </Row>

                    <Row>
                        <Col xs="auto">
                            <NavLink className='step-ct'>Step 1 of 3</NavLink>
                        </Col>
                        <Col xs="auto">
                            <button onClick={() => navigate("/Home")} className='btn'><img src='.\img\back-btn.svg' alt='btn'></img></button>
                        </Col>
                    </Row>


                </Container>
                <hr className="horizontal-line" />


            </Navbar>



        </div>
    )
}

export default Header3