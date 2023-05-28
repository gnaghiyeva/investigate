import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'
import navStyle from "./navbar.module.css"
const Navbarr = () => {
  return (
    <>
    <div className={navStyle.navbar}>
    <Navbar style={{backgroundColor:'white'}}>
    <Container>
      <Navbar.Brand href="#home">INVEST</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
      <Navbar.Text style={{marginRight:'20px'}}>
         <span>BTC $10200</span>
        </Navbar.Text>
       
        <Navbar.Text style={{marginRight:'20px'}}>
         <span> ETH $979 </span>
        </Navbar.Text>
        <Navbar.Text style={{marginRight:'20px'}}>
         <span> LTC $230</span>
        </Navbar.Text>
        <Navbar.Text>
          <a href="#login">Register | Login</a>
        </Navbar.Text>
      </Navbar.Collapse>
    </Container>
  </Navbar>
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
  </div>
  </>
  )
}

export default Navbarr