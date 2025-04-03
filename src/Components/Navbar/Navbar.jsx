import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Dropdown from 'react-bootstrap/Dropdown';
import {Form, FormControl, Button } from 'react-bootstrap';
import React , { useState, useEffect, use } from "react";
import './Navbar.css';
const App = () =>{
  const [visibleClass, setVisibleClass] = useState('visually-hidden');
  const [visibleClass2, setVisibleClass2] = useState('');

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setVisibleClass('');
      setVisibleClass2('true');
    } else {
      setVisibleClass('visually-hidden');
      setVisibleClass2('');
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return(
      <Navbar xpand="lg"  className='sticky-top'>
        <Container>
          
        <Dropdown className={visibleClass}>
          <Dropdown.Toggle variant="warning" id="dropdown-basic">
            <Navbar.Brand href="#">Martin Dantes</Navbar.Brand>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Features</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Pricing</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        
        <Navbar.Brand hidden={visibleClass2} href="#">Martin Dantes </Navbar.Brand>
            <Nav hidden={visibleClass2} className="me-auto" >
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
        
          
        </Container>
      </Navbar>
      
      
  
  )
}

export default App
