import React from 'react';
import Logo from './imgs/Logo.png';
import Home from './imgs/home.png';
import Search from './imgs/search.png';
import Library from './imgs/library.png';
import './styles/menu.css'

function Menu() {
  return (
    <div class="menu">
      <img src={Logo} alt="logo" />
      <div>
        <ul>
          <li><img src={Home} alt="home" />Home</li>
          <li><img src={Search} alt="search" />Busca</li>
          <li><img src={Library} alt="library" />Biblioteca</li>
        </ul>

        <ul>
          <li>Liked songs</li>
          <li>your episodes</li>
          <li>create playlsit</li>
        </ul>

        <ul>
          <li>Minha playlsit</li>
          <li>Mix</li>
          <li>My vibe</li>
          <li>liked</li>
          <li>gym</li>
          <li>Daily Mix 1</li>
          <li>Daily Mix 2</li>
          <li>MPB</li>
        </ul>
      </div>
    </div>
  );
}

export default Menu;
