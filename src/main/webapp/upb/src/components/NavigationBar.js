import React from 'react';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import image from '../assets/images/book.png';
class NavigationBar extends React.Component{
 render(){
        return(
        <Navbar bg="primary" data-bs-theme="" >
          <Link to ={""}className='navbar-brand'>
          <img src={image} alt='logo' width={70} />UPB BOOKSTORE
          </Link>

           
          <Nav className="ms-auto ">
            <Link to={"add"} className='navbar-brand text-light' >Ajouter des livres</Link>
            <Link to={"list"} className='navbar-brand text-white'>Liste des livres</Link>
          </Nav>
        </Navbar>
        
        
        );
    }
}

export default NavigationBar