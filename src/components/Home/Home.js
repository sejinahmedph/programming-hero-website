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
import webPopupEnrollment from './images/web-popup-enroll.webp';
import zeroToCareer from './images/zero-career.svg';
import globe from './images/globe.svg';
import liveSupport from './images/live-support.svg';
import crashCourse from './images/crash-course.svg';
import offlineVideos from './images/offline-videos.svg';
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
  const [show, setShow] = useState(true);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
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
                  <Button className='ms-auto me-auto' style={{width: "120px"}} onClick={handleShow}>Enroll Now</Button>
                  <>
                    <Modal show={show} onHide={() => setShow(false)} dialogClassName="modal-90w" 
                    aria-labelledby="example-custom-modal-styling-title">
                      <Modal.Header className='p-2 px-0 border-0'>
                        <Button className='ms-auto bg-none' onClick={handleClose}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 28 28">
                          <rect width="28" height="28" fill="#EB5757" fill-opacity="0.08" rx="4"></rect>
                          <path stroke="#EB5757" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" 
                          d="M19 9L9 19M9 9l10 10"></path>
                        </svg>
                        </Button>
                      </Modal.Header>
                      <Modal.Body>
                        <div>
                          <img src={webPopupEnrollment} className='w-100' alt="web-popup-enrollment"/>
                        </div>
                        <div className='py-4 text-center'>
                          <span className='text-white'>৯ম ব্যাচের এনরোলমেন্ট চলছে। এনরোলমেন্ট চলবে ডিসেম্বর ২৪ তারিখ পর্যন্ত। ডিসেম্বর ২৪ 
                          তারিখের পর একজনকেও এই ব্যাচে সুযোগ দেওয়া হবে না। তোমাদের চেষ্টা, আমাদের গাইড। 
                          নয়া নবম দিবে ফাইট 🔥🎯</span><br/><br/>
                          <a href="/Register">
                            <Button>Register Now</Button>
                          </a>
                        </div>
                      </Modal.Body>
                    </Modal>
                  </>
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
          <h1 className='title text-end'>Our <br/> Impact_</h1>
          <article className='p-5 rounded-3' id='impact-card'>
            <div className='py-3'>
              <Row>
                <Col id='first'>
                  <h1 className='fw-bold'>3000+</h1>
                  <h5>Job placement worldwide</h5>
                </Col>
                <Col className='px-3'>
                  <h1 className='fw-bold'>1200+</h1>
                  <h5>Connected companies</h5>
                </Col>
                <Col id='last'>
                  <h1 className='fw-bold'>14+</h1>
                  <h5>Dedicated Job Placement Executives</h5>
                </Col>
              </Row>
            </div>
          </article>
        </Container>
      </section>
      <section id='x-factors-section'>
        <h1 className='title'>X-Factors Of <br/> Programming Hero_</h1>
        <Container className='py-5'>
          <article className='rounded-4' id='first'>
            <div className='py-4 ps-4 pe-4'>
              <span className="fs-5 fw-500">ZERO TO CAREER</span><br/>
              <h1 className='my-3'>ZERO TO CAREER</h1>
              <h4 className='instruction fw-500'>You will <span className='bg-warning text-dark p-1 px-2 rounded'>get everything</span> 
              from the beginning of your journey <span className='bg-warning text-dark p-1 px-2 rounded'>until you get an 
              internship or a full-time job.</span></h4>
            </div>
            <div className='image-container bg-white ms-auto rounded-end-4'>
              <img src={zeroToCareer} height={'100%'} width={'300px'} alt="img"/>
            </div>
          </article>
          <article className='rounded-4' id='second'>
            <div className='py-4 ps-4 pe-4'>
              <span className="fs-5 fw-500">LOCAL AND INTERNATIONAL JOBS</span><br/>
              <h2 className='my-3'>LOCAL AND INTERNATIONAL JOBS</h2>
              <h4 className='instruction fw-500'>Dedicated <span className='text-white p-1 px-2 rounded'
              style={{background: "#1B1E5C"}}> 17+ Job Placement 
              Managers</span> will help you to <span className='text-white p-1 px-2 rounded' 
              style={{background: "#1B1E5C"}}>find a job locally and internationally.</span></h4>
            </div>
            <div className='image-container bg-white ms-auto rounded-end-4'>
              <img src={globe} height={'100%'} width={'300px'} alt="img"/>
            </div>
          </article>
          <article className='rounded-4' id='third'>
            <div className='py-4 ps-4 pe-4'>
              <span className="fs-5 fw-500">UNLIMITED LIVE SUPPORT</span><br/>
              <h2 className='my-3'>UNLIMITED LIVE SUPPORT</h2>
              <h4 className='instruction fw-500'>You can Join <span className='bg-warning text-dark p-1 px-2 rounded'>one to one 
              live support sessions three times a day.</span> It is guaranteed to 
              <span className='bg-warning text-dark p-1 px-2 rounded'>get answers</span> to every question 
              <span className='bg-warning text-dark p-1 px-2 rounded'>within 10 hours.</span></h4>
            </div>
            <div className='image-container bg-white ms-auto rounded-end-4'>
              <img src={liveSupport} height={'100%'} width={'300px'} alt="img"/>
            </div>
          </article>
          <article className='rounded-4' id='fourth'>
            <div className='py-4 ps-4 pe-4'>
              <span className="fs-5 fw-500">ADVANCED CRASH COURSE</span><br/>
              <h2 className='my-3'>ADVANCED CRASH COURSE</h2>
              <h4 className='instruction fw-500'>After completing the main course seriously in time you will 
              <span className='bg-danger text-white p-1 px-2 rounded'>get access to SCIC (Super Charged Interviewee Club) and ACC </span>
              (Redux, Node, Mongodb)</h4>
            </div>
            <div className='image-container bg-white ms-auto rounded-end-4'>
              <img src={crashCourse} height={'100%'} width={'300px'} alt="img"/>
            </div>
          </article>
          <article className='rounded-4' id='fifth'>
            <div className='py-4 ps-4 pe-4'>
              <span className="fs-5 fw-500">OFFLINE VIDEOS</span><br/>
              <h2 className='my-3'>OFFLINE VIDEOS</h2>
              <h4 className='instruction fw-500'>Watch <span className='bg-warning text-dark p-1 px-2 rounded'>course videos offline</span> 
              in our <span className='bg-warning text-dark p-1 px-2 rounded'>mobile</span> and <span 
              className='bg-warning text-dark p-1 px-2 rounded'>desktop</span> app at your convenience.</h4>
            </div>
            <div className='image-container bg-white ms-auto rounded-end-4'>
              <img src={offlineVideos} height={'100%'} width={'300px'} alt="img"/>
            </div>
          </article>
        </Container>
      </section>
    </div>
  );
}

export default Home;