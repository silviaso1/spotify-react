import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../imgs/Logo.png';
import Home from '../imgs/home.png';
import Search from '../imgs/search.png';
import Library from '../imgs/library.png';
import '../styles/menu.css'

function Menu() {
  return (
    <div class="menu">
      <img src={Logo} alt="logo" />
      <div>
        <ul class="borda">
          <li><img src={Home} alt="home" /><span>Home</span></li>
          <li><Link to="/search"><img src={Search} alt="search" />Busca</Link></li> 
          <li><img src={Library} alt="library" />Biblioteca</li>
        </ul>

        <ul class="borda">
          <li>Liked songs</li>
          <li>your episodes</li>
          <li>create playlist</li>
        </ul>

        <ul class="borda">
          <li>Minha playlist</li>
          <li>Mix</li>
          <li>My vibe</li>
          <li>liked</li>
        </ul>
      </div>
    </div>
  );
}

export default Menu;
