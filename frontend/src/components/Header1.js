import React from 'react'
import './header1.css'

import { Container, Navbar } from 'react-bootstrap'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



const Header1 = () => {
    const navigate = useNavigate();
    return (

        <Navbar className="nav">
            <Container >
                <Row>
                    <Col xs lg="1">
                        <Navbar.Brand href="#user_profile">
                            <img src='.\img\user 1.png' alt='user' className='user_1'></img>
                        </Navbar.Brand>
                    </Col>

                    <Col xs lg='2'>
                        <Nav className='bold-link'>Output</Nav>
                    </Col>

                </Row>


                <Row>
                    <Col xs="auto">
                        <NavLink className='step-ct'>Step 3 of 3</NavLink>
                    </Col>
                    <Col xs="auto">
                        <button onClick={() => navigate("/Layout1")} className='btn'><img src='.\img\back-btn.svg' alt='btn'></img></button>
                    </Col>
                </Row>
            </Container>
            <hr className="horizontal-line" />
        </Navbar>

    )
}

export default Header1