import React from 'react';
import './style.css';
import footerBg from './images/footerbg.jpg';
import facebook from './images/ic_facebook.svg';
import youtube from './images/ic_youtube.svg';
import linkedIn from './images/ic_linkedin.svg';
import instagram from './images/ic_instagram.svg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
const Footer = () => {
    return (
        <footer style={{background: `url(${footerBg}) no-repeat`, backgroundSize: "cover"}}>
            <Container>
                <Row className='gap-4'>
                    <Col>
                        <span className='fs-5'>Office Address</span>
                        <div className='py-4'>
                            <p>
                               Level-4, 34, Awal Centre, Banani, Dhaka <br/>
                               Support: Web@Programming-Hero.Com <br/>
                               Helpline: 01322810867, 01322810882, 01322901105 <br/>
                               (Available: Sat - Thu, 10:00 AM To 7:00 PM)
                            </p>
                        </div>
                    </Col>
                    <Col>
                        <span className='fs-5'>Useful Links</span>
                        <div className="py-4">
                            <a href="/Home">Home</a><br/>
                            <a href="/About">About Us</a><br/>
                            <a href="/Success">Success</a><br/>
                            <a href="/Tearms-conditions">Tearms And Condition</a><br/>
                        </div>
                    </Col>
                    <Col className='text-center'>
                        <span className='fs-5'>Follow Us</span>
                        <div className="py-3">
                            <a href="https://www.facebook.com/programmingherowebcourse">
                                <Button className='border-0'>
                                    <img src={facebook} alt="ic_facebook"/>
                                </Button>
                            </a>
                            <a href="https://www.instagram.com/programminghero/">
                                <Button className='border-0'>
                                    <img src={instagram} alt="ic_instagram"/>
                                </Button>
                            </a>
                            <a href="https://www.linkedin.com/company/programminghero/">
                                <Button className='border-0'>
                                    <img src={linkedIn} alt="ic_linkedin"/>
                                </Button>
                            </a>
                            <a href="https://www.youtube.com/c/ProgrammingHeroCommunity">
                                <Button className='border-0'>
                                    <img src={youtube} alt="ic_youtube"/>
                                </Button>
                            </a>
                        </div>
                    </Col>
                </Row>
                <div className='text-center pt-4'>
                    <span>© Programming Hero, Sejin Ahmed, 2023</span>
                </div>
            </Container>
        </footer>
    );
};
export default Footer;