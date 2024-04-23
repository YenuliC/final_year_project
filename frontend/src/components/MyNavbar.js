import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './MyNavbar.css';
import { Link, useNavigate } from 'react-router-dom';

const MyNavbar = () => {
    const navigate = useNavigate(); 

    const handleLogout = () => {   
        navigate('/signin'); 
    };
    return (
        <div>

            <Navbar style={{ backgroundColor: '#11002A' }} data-bs-theme="dark" variant='dark'>
                <Container>


                    <img src='.\img\user 1.png' alt='user' className='user-img'></img>

                    <Nav className="justify-content-end">



                        <Nav.Link as={Link} to='/Home' className='navbar-link' >Home</Nav.Link>

                        <Nav.Link as={Link} to='/input' className='navbar-link'>Discover</Nav.Link>

                        <Nav.Link as={Link} to='/About' className='navbar-link'>About</Nav.Link>

                        <button className='btn-login' onClick={handleLogout}>Log Out</button>

                    </Nav>
                </Container>
            </Navbar>

        </div>
    )
}

export default MyNavbar
