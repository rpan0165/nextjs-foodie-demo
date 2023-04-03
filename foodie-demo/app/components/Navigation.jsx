'use client'
import React from 'react';
import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Nav, Navbar, NavDropdown, Form, FormControl, Button } from "react-bootstrap";


function Navigation() {
    const [showSidebar, setShowSidebar] = useState(false);

    const toggleSidebar = () => setShowSidebar(!showSidebar);

    return (
        <>
            <Navbar bg="light" expand="lg" sticky="top">
                <Navbar.Brand>
                    <Link href="/">
                        <img
                            src="https://foodie.sysco.com/wp-content/themes/sysco-2022/assets/static/img/Sysco_Foodie_Web_Logo.svg"
                            width="130"
                            height="60"
                            className="d-inline-block align-top"
                            alt="Logo"
                        />
                    </Link>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    {showSidebar ? (
                        <FontAwesomeIcon icon={faTimes} />
                    ) : (
                        <FontAwesomeIcon icon={faBars} />
                    )}
                </Navbar.Toggle>

                <Navbar.Collapse id="basic-navbar-nav">


                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        {/* <Button variant="outline-success">Search</Button> */}
                    </Form>

                    <Nav className="mr-auto align-right">
                    <FontAwesomeIcon icon={faCartShopping} className="d-inline-block align-right"/>
                        <Nav.Link href="/my-basket">My basket</Nav.Link>
                    </Nav>

                    <Button type="button" class="btn btn-primary mr-4 bg-primary ">Become a Customer</Button>
                </Navbar.Collapse>
            </Navbar>

            <Navbar bg="light" expand="lg" className="border-top">
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">

                    <Link href="/category1">
                       <NavDropdown title="Publications" id="basic-nav-dropdown">
                            <Link href="/category1">
                                <NavDropdown.Item>Latest Foodie Magazine</NavDropdown.Item>
                            </Link>
                            <Link href="/category2">
                                <NavDropdown.Item>Foodie Restaurant Solutions</NavDropdown.Item>
                            </Link>
                            <Link href="/category2">
                                <NavDropdown.Item>Recipe Books</NavDropdown.Item>
                            </Link>
                            <Link href="/category2">
                                <NavDropdown.Item>Product Catalogs</NavDropdown.Item>
                            </Link>
                            <Link href="/category2">
                                <NavDropdown.Item>Operations</NavDropdown.Item>
                            </Link>
                            <Link href="/category2">
                                <NavDropdown.Item>The Edge</NavDropdown.Item>
                            </Link>
                            <Link href="/category2">
                                <NavDropdown.Item>Cutting Edge Solutions</NavDropdown.Item>
                            </Link>
                            <Link href="/category2">
                                <NavDropdown.Item>Blog</NavDropdown.Item>
                            </Link>
                        </NavDropdown>
                        </Link>

                        <Link href="/">
                            <Nav.Link>Recipes</Nav.Link>
                        </Link>
                    

                        <Link href="/category3">
                            <Nav.Link>Tips & Trends</Nav.Link>
                        </Link>

                        <Link href="/category3">
                        <NavDropdown title="Publications" id="basic-nav-dropdown">
                            <Link href="/category1">
                                <NavDropdown.Item>Latest Foodie Magazine</NavDropdown.Item>
                            </Link>
                            <Link href="/category2">
                                <NavDropdown.Item>Foodie Restaurant Solutions</NavDropdown.Item>
                            </Link>
                            <Link href="/category2">
                                <NavDropdown.Item>Recipe Books</NavDropdown.Item>
                            </Link>
                            <Link href="/category2">
                                <NavDropdown.Item>Product Catalogs</NavDropdown.Item>
                            </Link>
                            <Link href="/category2">
                                <NavDropdown.Item>Operations</NavDropdown.Item>
                            </Link>
                            <Link href="/category2">
                                <NavDropdown.Item>The Edge</NavDropdown.Item>
                            </Link>
                            <Link href="/category2">
                                <NavDropdown.Item>Cutting Edge Solutions</NavDropdown.Item>
                            </Link>
                            <Link href="/category2">
                                <NavDropdown.Item>Blog</NavDropdown.Item>
                            </Link>
                        </NavDropdown>
                        </Link>

                        <Link href="/category4">
                            <Nav.Link>Category 4</Nav.Link>
                        </Link>

                        <NavDropdown title="Dropdown 2" id="basic-nav-dropdown-2">
                            <Link href="/category5">
                                <NavDropdown.Item>Category 5</NavDropdown.Item>
                            </Link>
                            <Link href="/category6">
                                <NavDropdown.Item>Category 6</NavDropdown.Item>
                            </Link>
                        </NavDropdown>

                        <Link href="/category7">
                            <Nav.Link>Category 7</Nav.Link>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default Navigation
