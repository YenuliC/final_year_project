import React from 'react'
import './Footer.css'

const Footer = () => {

    const websiteURL_1 = "https://chat.openai.com/";
    const websiteURL_2 = "";
    // const websiteURL_3 = "";
    const websiteURL_4 = "https://www.facebook.com/";
    const websiteURL_5 = "https://twitter.com/?lang=en";
    const websiteURL_6 = "https://www.instagram.com/";



    return (
        <div className='footer'>
            <div className='sb_footer section_padding'>

                <div className='sb_footer-links'>
                    <div className='sb_footer-div'>
                        <img className='circle' src='.\img\Ellipse 5.svg' alt='logo'></img>
                        <h1>VEXEL FLYER</h1>
                        <h1>IMAGE GENERATOR</h1>
                        <p>© 2024 Vexel, All rights reserved.</p>
                        {/* <p>Vexel © 2024</p> */}
                    </div>
                    <div className='sb-footer-links-div'>

                        <div className='top-links'>
                  
                            <a href={websiteURL_2} target='_blank' rel='noopener noreferrer'>
                                <img src='.\img\link2.png' alt='link2'></img>

                            </a>

                            <a href={websiteURL_2} target='_blank' rel='noopener noreferrer'>
                                <img src='.\img\link3.png' alt='link3'></img>

                            </a>
                        </div>

                        <div className='bottom-links'>

                            <a href={websiteURL_4} target='_blank' rel='noopener noreferrer'>
                                <img src='.\img\facebook.png' alt='link1'></img>

                            </a>
                            <a href={websiteURL_5} target='_blank' rel='noopener noreferrer'>
                                <img src='.\img\twitter.png' alt='link1'></img>

                            </a>
                            <a href={websiteURL_6} target='_blank' rel='noopener noreferrer'>
                                <img src='.\img\instagram.png' alt='link1'></img>

                            </a>



                        </div>

                    </div>



                </div>

                <div className='sb_footer-below-links'>
                    <a href='#terms'><p>Help</p></a>
                    <a href='#terms'><p>English(US)</p></a>
                    <a href='#terms'><p>Q&A</p></a>
                    <a href='#terms'><p>Privacy</p></a>


                </div>





            </div>


        </div>
    )
}

export default Footer