'use client'
import React from 'react'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import '../styles/css/bootstrap.min.css';
import '../styles/topnav.css';

function TopNav() {
  return (
    <>
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">
      <img
          src="https://foodie.sysco.com/wp-content/themes/sysco-2022/assets/static/img/Sysco_Foodie_Web_Logo.svg"
          width="130"
          height="60"
          className="d-inline-block align-top"
          alt="Logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title="Publications" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/1.1">Latest Foodie Magazine</NavDropdown.Item>
            <NavDropdown.Item href="#action/1.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/1.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/1.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
        <Nav.Link href="#cart">Recipes</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
        <Nav className="ml-auto">
          <Nav.Link href="#cart">Cart</Nav.Link>
          <Button variant="primary">Become a customer</Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    <Navbar bg="light" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title="Publications" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/1.1">Latest Foodie Magazine</NavDropdown.Item>
            <NavDropdown.Item href="#action/1.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/1.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/1.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
        <Nav.Link href="#cart">Recipes</Nav.Link>
        </Nav>
        <Nav className="ml-auto">
          <Nav.Link href="#cart">Cart</Nav.Link>
          <Button variant="primary">Become a customer</Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </>
  );
}



export default TopNav
