import React from 'react';
import './css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// Images
import banner from './images/banner-bg.png';
import logo from './images/logo.svg';
import ic_menu from './images/ic_menu.svg';
import jhankarMahbub from './images/ceo.png';
import masudRana from './images/senior-web-developer.png';
import sejinAhmed from './images/junior-web-developer.png';
// Bootstrap Components
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button  from 'react-bootstrap/Button';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function Home() {
  // Modal Controller ====
  const [lgShow, setLgShow] = useState(false);
  const handleClose = () => setLgShow(false);
  const handleShow = () => setLgShow(true);
  // =====================
  return (
    <div>
      <main>
        <header id='header'>
          <Navbar expand="lg">
            <Container>
              <div className="d-flex align-items-center">
                <img src={logo} height={'66px'} width={'66px'} style={{marginTop: "-7px"}} alt="logo-phero"/>
                <span className="fs-5 text-white" style={{marginLeft: "-15px"}}>Programming Hero</span>
              </div>
              <Navbar.Toggle aria-controls="basic-navbar-nav">
                <img src={ic_menu} alt="ic_menu"/>
              </Navbar.Toggle>
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto text-center gap-4">
                  <Nav.Link className='text-white' href="/Level-2">Level 2</Nav.Link>
                  <Nav.Link className='text-white' href="/Course-details">Course Details</Nav.Link>
                  <Nav.Link className='text-white' href="/About">About Us</Nav.Link>
                  <Nav.Link className='text-white' href="/Login">Login</Nav.Link>
                  <Button className='btn ms-auto me-auto' style={{width: "120px"}} onClick={handleShow}>Enroll Now</Button>
                  <Modal show={lgShow} onHide={handleClose} backdrop="static" keyboard={false}>
                    <Modal.Header closeButton>
                      <Modal.Title>Modal title</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      I will not close if you click outside me. Do not even try to press
                      escape key.
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Close
                      </Button>
                      <Button variant="primary">Understood</Button>
                    </Modal.Footer>
                  </Modal>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </header>
        <section id='banner-section'>
          <div id='banner'>
            <img src={logo} id='logo' alt="logo"/>
            <h1 id='title'>Let's Code_ <br/> Your Career</h1>
          </div>
          <img src={banner} width={'100%'} id='banner-bg' alt="banner-bg"/>
        </section>
      </main>
      <section id='hero-section'>
        <div className='text-center ms-auto me-auto' style={{maxWidth: "850px"}}>
          <h1 className='title'>Heroes In Top Companies_</h1>
          <span>We can not guarantee you a job/intern. However, 70-80% of the students who finish our main course 
          and SCIC on time get a job or an internship within 3-6 months of their completion.</span>
        </div>
        <div className='text-center py-5'>
          <Container>
            <Row className='gap-2'>
              <Col>
                <img src={jhankarMahbub} className='rounded' height={"300px"} width={"260px"} 
                style={{background: `url(${logo}) center bottom / 500px no-repeat`}} alt="hero"/>
                <div className='py-2'>
                  <span className='fs-4 title-color'>Jhankar Mahbub</span><br/>
                  <span className='title-color'>Senior Web Developer - CEO</span>
                </div>
              </Col>
              <Col>
                <img src={masudRana} className='rounded' height={"300px"} width={"260px"} 
                style={{background: `url(${logo}) center bottom / 500px no-repeat`}} alt="hero"/>
                <div className='py-2'>
                  <span className='fs-4 title-color'>Masud Rana</span><br/>
                  <span className='title-color'>Senior Web Developer - IT</span>
                </div>
              </Col>
              <Col>
                <img src={sejinAhmed} className='rounded' height={"300px"} width={"260px"} 
                style={{background: `url(${logo}) center bottom / 500px no-repeat`}} alt="hero"/>
                <div className='py-2'>
                  <span className='fs-4 title-color'>Sejin Ahmed</span><br/>
                  <span className='title-color'>Junior Web Developer</span>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      <section id='impact-section'>
        <Container>
          <h1 className='title text-end'>Our Impact_</h1>
          <article className='p-5 rounded-3' id='impact-card'>
            frghf
          </article>
        </Container>
      </section>
    </div>
  
  );
}

export default Home;