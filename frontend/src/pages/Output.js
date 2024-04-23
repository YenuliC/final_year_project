import React from 'react'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Figure from 'react-bootstrap/Figure';
import Dropdown from 'react-bootstrap/Dropdown';
import Stack from 'react-bootstrap/Stack';
import './output.css'
import Footer from "../components/Footer"
import Header1 from '../components/Header1';

const Output = () => {

    const handleDownload = () => {
        const imageUrl = ".\\img\\design1.png"; // Path to your image
        const link = document.createElement('a');
        link.href = imageUrl;
        link.download = 'design1.png';  // Set the download filename here
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    
    return (
        <div className='app'>
            <Container fluid>
                <Row>
                    <Header1></Header1>

                </Row>

                <Container>
                    <Row>
                        <Col className='select-lt'>
                            <label>Select Layout</label>
                        </Col>
                    </Row>

                    <Row>
                        <Figure>
                            <Figure.Image
                                width={1480}
                                height={2046}
                                alt="171x180"
                                src=".\img\design1.png"
                                className='mx-auto'
                            />

                        </Figure>
                    </Row>
                </Container>

                <hr className="horizontal-line" />

                <Container>
                    <Row className='row align-items-end'>

                        <Stack direction="horizontal" gap={3}>
                            <div className="p-2">
                                <Dropdown>
                                    <Dropdown.Toggle id="dropdown-basic" className='dropdown1'>
                                        JPG
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>



                            <div className="p-2 ms">
                                <Button type="button" className='btn btn-output'onClick={handleDownload}>Download Image<img src='.\img\Arrow - Bottom.svg' alt='arrow'></img></Button>
                            </div>

                        </Stack>
                    </Row>

                </Container>



                <hr className="horizontal-line" />

                <Row>
                    <Footer></Footer>
                </Row>




            </Container>










        </div>
    )
}

export default Output