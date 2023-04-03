'use client'
import React from 'react';
import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Nav, Navbar, NavDropdown, Form, FormControl, Button } from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';



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
                        <FontAwesomeIcon icon={faCartShopping} className="d-inline-block align-right" />
                        <Nav.Link href="/my-basket">My basket</Nav.Link>
                    </Nav>

                    <Button type="button" class="btn btn-primary mr-4 bg-primary">Become a Customer</Button>
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
                                <Dropdown.Divider />
                                <Link href="/category2">
                                   <img src="https://foodie.sysco.com/wp-content/uploads/2021/01/Wholesome-Dining-Topnav-Image.png" alt="" />
                                    <p>View Flipbook</p>
                                </Link>
                                <Link href="/category2">
                                   <img src="https://foodie.sysco.com/wp-content/uploads/2020/08/148x87-WEB-IMAGES.png" alt="" />
                                   <p>Foodie Restaurant Solutions</p>
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
                            <NavDropdown title="Operations & Resources" id="basic-nav-dropdown" class="container">
                                <div class="row align-items-start">
                                    <div class="col">
                                        <Link href="/category1">
                                            <NavDropdown.Item>Latest Foodie Magazine</NavDropdown.Item>
                                        </Link>
                                    </div>
                                    <div class="col">
                                        <Link href="/category1">
                                            <NavDropdown.Item>Latest Foodie Magazine</NavDropdown.Item>
                                        </Link>
                                    </div>
                                    <div class="col">
                                        <img src="https://foodie.sysco.com/wp-content/uploads/2021/12/American-Restaurant.png" alt="" />
                                    </div>
                                </div>

                            </NavDropdown>
                        </Link>

                        <Link href="/category4">
                            <NavDropdown title="Sysco Brands" id="basic-nav-dropdown">
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

                        <Link href="/category3">
                            <NavDropdown title="Services" id="basic-nav-dropdown">
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

                        <Link href="/category3">
                            <NavDropdown title="Community Impact" id="basic-nav-dropdown">
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


                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default Navigation
