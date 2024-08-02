import React from 'react';
import Menu from '../componentes/Menu';
import Principal from '../componentes/Principal';
import Footer from '../componentes/Footer';
import '../styles/home.css';

function Home(){
    return (
    <div>
      <div class="home">
      <Menu />
      <Principal />
      </div>
      <div class="footerApp">
      <Footer />
    </div>
    </div>
    );
}

export default Home;