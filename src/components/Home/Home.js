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
// import htmlBg from './images/html-active.svg';
// import cssBg from './images/css-active.svg';
// import tailwindBg from './images/tailwind-active.svg';
// import firebaseBg from './images/firebase-active.svg';
// import mongoBg from './images/mongodb-active.svg';
// import ic_html from './images/ic_html.svg';
// import ic_css from './images/ic_css.svg';
// import ic_tailwind from './images/ic_tailwind.svg';
// import ic_js from './images/ic_js.svg';
// import ic_react from './images/ic_react.svg';
// import ic_firebase from './images/ic_firebase.svg';
// import ic_mongo from './images/ic_mongo.svg';
import projectBg from './images/project-bg.png';
import leaderBoard from './images/Project-2-Leaderboard.jpeg';
import shoppingCart from './images/Project-5-Shopping-Cart.jpeg';
import hotGadgets from './images/Project-6-Hot-gadget.jpeg';
import emaJohn from './images/Project-7-Ema-John.jpeg';
import geniusCar from './images/Project-8-Genius-Car-Mechanics.jpeg';
import doctorsPortal from './images/Project-9-Doctor-Portal.jpeg';
import ic_arrow from './images/ic_arrow-right.svg';
import faqGridBg from './images/faq-grid-bg.png';
// Bootstrap Components
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button  from 'react-bootstrap/Button';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import Footer from '../Footer/Footer';


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
              <Navbar.Toggle className='border-0' aria-controls="basic-navbar-nav">
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
        <h1 className='title m-2'>X-Factors Of <br/> Programming Hero_</h1>
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
      {/* <section id='what-will-learn-section'>
        <div className='text-center p-2'>
          <h1 className='title'>What Will You Learn?_</h1>
          <span className='fs-5 fw-500'>The web course consists of 80+ modules, 25+ course projects, 15+ practice 
          projects and 12 assignments.</span>
        </div>
        <article className='py-5' id='what-will-learn'>
          <div className='item-1'>
            <img src={htmlBg} className='background' alt="background"/>
            <div className='icon'>
              <img src={ic_html} height={"80px"} width={"80px"} alt="icon"/><br/>
              <span className='fs-5 fw-500'>Html5</span>
            </div>
          </div>
          <div className='item-2'>
            <img src={cssBg} className='background' alt="background"/>
            <div className='icon'>
              <img src={ic_css} height={"80px"} width={"80px"} alt="icon"/><br/>
              <span className='fs-5 fw-500'>Css3</span>
            </div>
          </div>
          <div className='item-1'>
            <img src={tailwindBg} className='background' alt="background"/>
            <div className='icon'>
              <img src={ic_tailwind} height={"80px"} width={"80px"} alt="icon"/><br/>
              <span className='fs-5 fw-500'>Tailwind</span>
            </div>
          </div>
          <div className='item-2'>
            <img src={firebaseBg} className='background' alt="background"/>
            <div className='icon'>
              <img src={ic_js} height={"80px"} width={"80px"} alt="icon"/><br/>
              <span className='fs-5 fw-500'>Javascript</span>
            </div>
          </div>
          <div className='item-1'>
            <img src={cssBg} className='background' alt="background"/>
            <div className='icon'>
              <img src={ic_react} height={"80px"} width={"80px"} alt="icon"/><br/>
              <span className='fs-5 fw-500'>React</span>
            </div>
          </div>
          <div className='item-2'>
            <img src={firebaseBg} className='background' alt="background"/>
            <div className='icon'>
              <img src={ic_firebase} height={"80px"} width={"80px"} alt="icon"/><br/>
              <span className='fs-5 fw-500'>Firebase</span>
            </div>
          </div>
          <div className='item-1'>
            <img src={mongoBg} className='background' alt="background"/>
            <div className='icon'>
              <img src={ic_mongo} height={"80px"} width={"80px"} alt="icon"/><br/>
              <span className='fs-5 fw-500'>Mongo db</span>
            </div>
          </div>
        </article>
      </section> */}
      <section id='projects-section'>
        <h1 className='title'>Projects You Will Build_</h1>
        <Container className='py-5'>
          <article className='py-5' style={{background: `url(${projectBg}) center bottom / cover no-repeat`}} id='container'>
            <div className='item rounded-4'>
              <div>
                <h1 className='title m-2'>Ranking Board</h1>
              </div>
              <div className='d-flex align-items-center'>
                <img src={leaderBoard} className='w-100 rounded-4' alt="project"/>
                <img src={ic_arrow} className='ic_arrow' alt="ic_arrow"/>
              </div>
            </div>
            <div className='item rounded-4'>
              <div>
                <h1 className='title m-2'>Shopping Cart</h1>
              </div>
              <div className='d-flex align-items-center'>
                <img src={shoppingCart} className='w-100 rounded-4' alt="project"/>
                <img src={ic_arrow} className='ic_arrow' alt="ic_arrow"/>
              </div>
            </div>
            <div className='item rounded-4'>
              <div>
                <h1 className='title m-2'>Hot Gadgets</h1>
              </div>
              <div className='d-flex align-items-center'>
                <img src={hotGadgets} className='w-100 rounded-4' alt="project"/>
                <img src={ic_arrow} className='ic_arrow' alt="ic_arrow"/>
              </div>
            </div>
            <div className='item rounded-4'>
              <div>
                <h1 className='title m-2'>Ema John</h1>
              </div>
              <div className='d-flex align-items-center'>
                <img src={emaJohn} className='w-100 rounded-4' alt="project"/>
                <img src={ic_arrow} className='ic_arrow' alt="ic_arrow"/>
              </div>
            </div>
            <div className='item rounded-4'>
              <div>
                <h1 className='title m-2'>Genius Car</h1>
              </div>
              <div className='d-flex align-items-center'>
                <img src={geniusCar} className='w-100 rounded-4' alt="project"/>
                <img src={ic_arrow} className='ic_arrow' alt="ic_arrow"/>
              </div>
            </div>
            <div className='item rounded-4'>
              <div>
                <h1 className='title m-2'>Doctors Portal</h1>
              </div>
              <div className='d-flex align-items-center'>
                <img src={doctorsPortal} className='w-100 rounded-4' alt="project"/>
                <img src={ic_arrow} className='ic_arrow' alt="ic_arrow"/>
              </div>
            </div>
          </article>
          <div className='text-center py-5'>
            <a href="/Home/Projects">
              <Button className='bg-none border px-5'>All Projects</Button>
            </a>
          </div>
        </Container>
      </section>
      <section id='meet-team-section'>
        <h1 className='title'>Meet Our Team_</h1>
        <Container className='py-5 text-center'>
          <Row className='gap-4'>
            <Col>
              <div>
                <img src={jhankarMahbub} className='rounded-circle shadow-lg' height={"300px"} width={"263px"} alt="jhankar-mahbub"/><br/>
                <span className='fs-4 fw-500 text-white'>Jhankar Mahbub</span><br/>
                <span className='text-white fw-500'>Senior Web Developer - CEO</span>
              </div>
            </Col>
            <Col>
              <div>
                <img src={masudRana} className='rounded-circle shadow-lg' id='hero-2' height={"300px"} width={"263px"} alt="m-rana"/><br/>
                <span className='fs-4 fw-500 text-white'>Masud Rana</span><br/>
                <span className='text-white fw-500'>Senior Web Developer - IT</span>
              </div>
            </Col>
          </Row>
          <div className='text-center py-5'>
            <a href="/About">
              <Button className='bg-none border px-5'>Explore Full Team</Button>
            </a>
          </div>
        </Container>
      </section>
      <section id='faq-section'>
        <h1 className='title'>Faq_</h1>
        <Container style={{background: `url(${faqGridBg}) center / contain no-repeat`}} className='py-5'>
          <div className='rounded-5' id='accordion-container' style={{border: "1px solid rgba(255, 255, 255, 0.1)"}}>
            <Accordion>
              <Accordion.Item className='my-1' eventKey="0">
                <Accordion.Header>For Whom Is This Course?</Accordion.Header>
                <Accordion.Body>
                  <span className='fs-5'>
                    This Course Is Created For Those Who Want To Learn Web Development From Scratch And Build A Career As A Web 
                    Developer In Software Companies. Even Those Who Studied CSE For Four Years But Didn't Learn Much And Couldn't 
                    Decide What To Do, Can Complete Web Development From This Course And Apply For Jobs. 😀
                  </span>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item className='my-3' eventKey="1">
                <Accordion.Header>What prior experience is needed for this course?</Accordion.Header>
                <Accordion.Body>
                  <span className="fs-5">
                    Since We'll Be Teaching From Scratch, You Don't Need To Know Anything Beforehand. But If You Have Free Time, 
                    You Can Do These Things: Be Comfortable With A Computer, Internet So That You Can Search Anything Online You 
                    Should Have Basic English Literacy Typing Speed 15-30 Wpm Will Be Excellent. Familiarity With HTML, CSS Would 
                    Be Fantastic..
                  </span>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item className='my-3' eventKey="2">
                <Accordion.Header>What Educational Background Is Required?</Accordion.Header>
                <Accordion.Body>
                  <span className="fs-5">
                    We Have Designed The Course In Such A Way That Your Educational Background Doesn't Matter Here. You Can Do 
                    This Course From Any Educational Background. Anyone, Such As A University Student, College Student, Jobber, 
                    Unemployed, Lover, Runaway Lover, Even The Girlfriend Who Doesn't Pick Up The Phone Can Do This Course. 
                    However, You Have To Commit 6-8 Hours Everyday.
                  </span>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item className='my-3' eventKey="3">
                <Accordion.Header>How will I get a job after completing the course?</Accordion.Header>
                <Accordion.Body>
                  <span className="fs-5">
                    Take Note Of One Thing Clearly: We Cannot Guarantee You A Job. However, You'll Go To SCIC If You Finish The 
                    Main Course On Time. There You Will Get Job-Related And Interview-Related Specific Training. Work Hard 
                    There And One Of Our Job Placement Team Members Will Send Your CV/Resume To Several Companies. 
                    Interestingly, Many Of Our Students Get Jobs As They Apply By Themselves. Finally, If You Keep Working Hard,
                    One Of Our Job Placement Managers Will Keep Guiding You Until You Get A Job.
                  </span>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item className='my-3' eventKey="4">
                <Accordion.Header>I work full time. Should I join this course?</Accordion.Header>
                <Accordion.Body>
                  <span className="fs-5">
                    If You Want To Finish With Our Course Flow And Go To SCIC, You Will Have To Give It All. If You Do Not Devote 
                    At Least 6 Hours Everyday Or Extra Time On Weekends And Holidays, You Will Be Unable To Complete Our Course 
                    Content, Assignments, And Practice Problems Intime. You Will Not Be Able To Use All Of The Course's Facilities. 
                    So, We Would Say, If You Can Assure At Least 6 Hours Everyday, You May Join This Course.
                  </span>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item className='my-3' eventKey="5">
                <Accordion.Header>What's inside the course?</Accordion.Header>
                <Accordion.Body>
                  <span className="fs-5">
                    You Will Learn Everything Needed To Become A Serious Web Developer. Starting From HTML, CSS, You'll Learn Bootstrap, 
                    JavaScript, Git, ES6, REST API, Server, JSON, Etc. Not Only That, You'll Also Learn The Most Famous Framework, 
                    ReactJS, Alongside These And Will Make A Complete Website. In Addition, You'll Learn Node, Database (Mongodb), 
                    Debug, Problem Solving, Interview Questions And Many Other Things. We'll Teach You How To Build 11 Websites In 
                    The Entire Course. Moreover, You'll Get 11 Websites To Build As Your Homework. If You Finish This Anyhow, Then 
                    You'll Surely Be A Junior Developer.
                  </span>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item className='my-3' eventKey="6">
                <Accordion.Header>How much time will it take to finish the course?</Accordion.Header>
                <Accordion.Body>
                  <span className="fs-5">
                    If You Watch Tutorials For 1 To 1.5 Hours And Practice Those For 4 To 6 Hours, It Will Take 5 Months To Complete 
                    The Course. But For Homework And Takeaway Projects You Have To Allot Extra Time. You Must Have A Hard Working 
                    Mentality For Enrolling In This Course. There Is No Shortcut.
                  </span>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item className='my-3' eventKey="7">
                <Accordion.Header>How can I get the course videos?</Accordion.Header>
                <Accordion.Body>
                  <span className="fs-5">
                    Course Videos Will Be Pre-Recorded. You Have To Create An Account And Register For This Course. From The Beginning, 
                    Videos Will Be Distributed In One Module Every Day. Each Module Typically Has 10 To 12 Videos. You Must Watch These 
                    Videos Within 24 Hours Of Their Release. As A Result, You Have To Allot A Space From Your Day To Day Life. You Can 
                    Watch The Videos While Laying Down, Standing, Reclining, Swinging Your Legs, Dancing Or Even Hiding Under The Bed.
                  </span>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item className='my-3' eventKey="8">
                <Accordion.Header>Does everyone get a job from your course?</Accordion.Header>
                <Accordion.Body>
                  <span className="fs-5">
                    No. Everyone Is Not Hired. But Those Who Complete The Main Course And Do Well In SCIC, About 70% Of Them Get Jobs 
                    Or Internships. Some Of The Others May Be In Their Early Stages Of University Or School And Are Not Looking For 
                    Employment Or Internships. Those Who Are Unable To Qualify For The SCIC, They Try Themselves And Also Occasionally 
                    Get Hired.
                  </span>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item className='my-3' eventKey="9">
                <Accordion.Header>What computer configuration do I need for this course?</Accordion.Header>
                <Accordion.Body>
                  <span className="fs-5">
                    First And Foremost, You Should Have Dedicated Time. 6-8 Hours Per Day. 8-10 Hours If Possible (If You Can't Give 
                    Time Or If You Don't Want To Do Hard Work, There Will Be No Benefit For You In The Course.) Secondly, You'll Need 
                    A Laptop Or A Computer (Where Essential Softwares Such As Node, Visual Studio Code Can Be Installed). 
                    And Thirdly, You'll Need At Least 2-10 Mbps Internet. Broadband Is Recommended For Viewing The Course Videos. 
                    A Minimum Of Four Months Dedicated Hard Work Is Required To Become A Professional Web Developer.
                  </span>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item className='my-3' eventKey="10">
                <Accordion.Header>I'm having trouble while paying for this course. What should I do?</Accordion.Header>
                <Accordion.Body>
                  <span className="fs-5">
                    Nothing To Worry About. Send Your Problem In Detail To Web@Programming-Hero.Com. You Can Call Us In Our Number 
                    Too. We Will Resolve Your Issue Within 24 Hours.
                  </span>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item className='my-3' eventKey="11">
                <Accordion.Header>Is there anything in this course about WordPress or Freelancing?</Accordion.Header>
                <Accordion.Body>
                  <span className="fs-5">
                    This Course Does Not Cover Freelancing Or Wordpress. However, If You Want To Customize WordPress There At An 
                    Advanced Level, You Must Be Familiar With HTML, CSS, Bootstrap, JavaScript, And Even React. All Of Them Can Be 
                    Learned From This Course.
                  </span>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item className='my-3' eventKey="12">
                <Accordion.Header>What should I do if I get stuck somewhere while following the course?</Accordion.Header>
                <Accordion.Body>
                  <span className="fs-5">
                    We've Set Up A Private Facebook Group For The Course. Our Goal Is To Respond To All Of Your Questions Within 
                    10 Hours. On Average, All Responses Will Be Received Within 2-3 Hours. Furthermore, There Will Be A Few Parallel 
                    Meet Sessions Scheduled Three Times Everyday Where You Can Use Screen Sharing To Fix Your Problem. What Else 
                    Does It Take? 😉
                  </span>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item className='my-3' eventKey="13">
                <Accordion.Header>How can I get access to videos offline?</Accordion.Header>
                <Accordion.Body>
                  <span className="fs-5">
                    You Will Get Access To Your Offline Mobile Application (Android And IOS) Called Neptune. Also, You Will Get 
                    Access To Our Offline Desktop App. YAY.
                  </span>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item className='my-3' eventKey="14">
                <Accordion.Header>Apart from these, I have one more question. Where should I ask?</Accordion.Header>
                <Accordion.Body>
                  <span className="fs-5">
                    No Worries. Please Direct Any Questions To Web@Programming-Hero.Com. We Will Get Back To You Within 24 Hours.
                  </span>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </Container>
      </section>
      <Footer></Footer>
    </div>
  );
}
export default Home;