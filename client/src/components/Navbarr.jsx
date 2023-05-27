import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'
const Navbarr = () => {
  return (
    <Navbar  variant="dark" style={{backgroundColor:'rgb(255,168,0)'}}>
    <Container>
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav className="me-auto" >
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
        <Nav.Link href="#pricing"><Link to='/add'>Add</Link></Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  )
}

export default Navbarr