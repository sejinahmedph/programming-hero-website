import React from 'react';
import './css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import banner from './images/banner-bg.png';
import logo from './images/logo.svg';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button  from 'react-bootstrap/Button';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';


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
          

          

    <Navbar expand="lg" className="">
      <Container>
        <img src={logo} height={'66px'} width={'66px'} alt="logo-phero"/>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-center gap-4">
            <Nav.Link className='text-white' href="/Level-2">Level 2</Nav.Link>
            <Nav.Link className='text-white' href="/Course-details">Course Details</Nav.Link>
            <Nav.Link className='text-white' href="/About">About Us</Nav.Link>
            <Nav.Link className='text-white' href="/Login">Login</Nav.Link>
            <Button className='btn' onClick={handleShow}>Enroll Now</Button>
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
      <section>
        <h1>sdighdshuh</h1>
      </section>
    </div>
  
  );
}

export default Home;