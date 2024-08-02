import React from 'react';
import Menu from './Menu';
import Principal from './Principal';
import Footer from './Footer';
import './styles/app.css';

function App() {
  return (
    <div>
      <div class="app">
      <Menu />
      <Principal />
      </div>
      <div class="footerApp">
      <Footer />
    </div>
    </div>
  );
}

export default App;
