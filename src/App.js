import React from 'react';
import './App.css';
import logo from './assets/logo.png';
import Header from './Components/Header';
import Delivery from './Components/Delivery';
import Contacto from './Components/Contacto';
import Slider from './Components/Slider';
import Footer from './Components/Footer';
import { IoMdArrowDropdown } from "react-icons/io";

function App() {
  return (
    <div className="App">
      <span className='progress'></span>
      <Header />
      <a href='#menu'><IoMdArrowDropdown className="header__arrow"/></a>
        <nav className='header__nav'>
            <img src={logo} alt="Logo Mola" />
            <ul>
                <li><a href="#menu">Menú</a></li>
                <li><a href="#delivery">Delivery</a></li>
                <li><a href="#contacto">Contacto</a></li>
            </ul>
        </nav>
      <section id='menu'>
        <Slider />
      </section>
      <section id='delivery'>
        <Delivery />
      </section>
      <section id='contacto'>
        <Contacto />
      </section>
      <Footer />
    </div>
  );
}

export default App;
