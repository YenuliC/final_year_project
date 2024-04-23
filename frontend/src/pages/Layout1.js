// import React from 'react'
// import './layout1.css'
// import { Container } from 'react-bootstrap'
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
// import Image from 'react-bootstrap/Image';
// import Header from '../components/Header';
// import Footer from "../components/Footer"
// import Button from 'react-bootstrap/Button';
// import {useNavigate } from 'react-router-dom';



// const Layout1 = () => {
//     const navigate = useNavigate();
//     return (
//         <div className='app'>
//             <Container fluid>

//                 <Row>
//                     <Header></Header>

//                 </Row>
//                 <hr className="horizontal-line" />


//                 <Container fluid='md'>
//                     <Row>
//                         <Col className='select-lt'>
//                             <label>Select Layout</label>
//                         </Col>
//                     </Row>
//                     <Row className="square-images-container">
//                         <Col>
//                             <Image className='square-image' src=".\img\design1.png" thumbnail alt='square-image' />
//                         </Col>
                       
//                     </Row>
    

//                 </Container>
//                 <hr className="horizontal-line" />
//                 <Container >
//                     <Row >

//                         <Col>
//                             <div className="p-2 ms-auto">
//                                 <Button type="button" className='btn btn-output'>Regenerate <img src='.\img\Rotate.svg' alt='generate'></img></Button>
//                             </div>
//                         </Col>
//                         <Col md={3} sm={6}>
//                             <div className='p-2 ms-auto'>
//                                 <Button onClick={() => navigate("/Output")} type="button" className='btn btn-output'>Check Output</Button>

//                             </div>
//                         </Col>




//                     </Row>

//                 </Container>
//                 <hr className="horizontal-line" />



//                 <Row>
//                     <Footer></Footer>
//                 </Row>
//             </Container>

//         </div>
//     )
// }

// export default Layout1