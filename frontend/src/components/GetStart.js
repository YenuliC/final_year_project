import React from 'react'
import './GetStart.css'
import { Button} from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import RecentDesign from './RecentDesign';
import MyNavbar from './MyNavbar';
import Membership from './Membership';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

const GetStart = () => {

    const navigate = useNavigate()
    return (



        // <Container fluid>
        <div className='input-page-container'>

            <>
                <MyNavbar />
            </>

            <Row className="get-start-container">
                <Col sm={8} className="get-start-topic">
                    <h1>EXPLORE ~</h1>
                    <h2>THE NEW FANTASY WORLD</h2>
                    <Button onClick={() => navigate('/Input')} className=" get-start-button">Get Started</Button>
                </Col>
                <Col sm={4} className='home-pg-img'>
                    <img src='.\img\home-pg-img.png' alt='home-pg-img'></img>
                </Col>

            </Row>


            <RecentDesign />

            <Membership />


            <Footer />
</div>





        // </Container>
    )
}

export default GetStart