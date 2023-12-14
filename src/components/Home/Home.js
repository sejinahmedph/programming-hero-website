import React from 'react';
import './css/style.css';
import banner from './images/banner-bg.png';
import logo from './images/logo.svg'

function Home() {
  return (
    <main>
      <header id='header'>
        <img src={logo} height={'66px'} width={'66px'} alt="logo-phero"/>
      </header>
      <section id='banner-section'>
        <img src={banner} width={'100%'} id='banner-bg' alt="banner-bg"/>
      </section>
    </main>
  
  );
}

export default Home;