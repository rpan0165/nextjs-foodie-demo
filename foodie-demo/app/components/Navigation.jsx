'use client'
import React from 'react';
import { useState } from "react";
import Link from "next/link";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaBars, faTimes, FaShoppingCart } from "react-icons/fa";
import { IoSearch } from 'react-icons/io5'
import { BsBookmarkFill } from 'react-icons/bs'
import { HiOutlineShoppingCart } from 'react-icons/hi'
import { Nav, Navbar, NavDropdown, Form, FormControl, Button } from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';
import '../styles/navigation.css';



function Navigation() {
    const [showSidebar, setShowSidebar] = useState(false);

    const toggleSidebar = () => setShowSidebar(!showSidebar);

    return (
        <>
            <Navbar bg="light" expand="lg" sticky="top" width="100%">
                <Navbar.Brand>
                    <FaBars className='d-inline-block mt-3 ml-4 mr-3 text-gray-500' />
                    <Link href="/">
                        <img
                            src="https://foodie.sysco.com/wp-content/themes/sysco-2022/assets/static/img/Sysco_Foodie_Web_Logo.svg"
                            width="130"
                            height="60"
                            className="d-inline-block align-top"
                            alt="Foodie-Logo"
                        />
                    </Link>
                </Navbar.Brand>

                {/* <Navbar.Toggle aria-controls="basic-navbar-nav">
                    {showSidebar ? (
                        <FontAwesomeIcon icon={faTimes} />
                    ) : (
                        <FontAwesomeIcon icon={faBars} />
                    )}
                </Navbar.Toggle> */}

                <Navbar.Collapse id="basic-navbar-nav">


                    <Form inline >
                        {/* <FormControl type="text" placeholder="Search for recipes, ingredients and more" className="mr-sm-2 " /> */}
                        {/* <Button variant="outline-success">Search</Button> */}
                        <div class="form-group has-search">
                            <span className="fa fa-search form-control-feedback p-2 ml-2 text-xl font-bold"> <IoSearch /></span>
                            <input type="text" className="form-control mt-1 ml-2" placeholder="Search for recipes, ingredients and more" width="" />
                        </div>
                    </Form>

                    <Nav className="mr-auto ">
                        <BsBookmarkFill className='mt-2 ml-4 mr-3 pt-1 text-sky-600 text-xl' />
                        <span className='font-bold text-sky-600 text-md mt-2 '>0</span>
                        <HiOutlineShoppingCart className="d-inline-block mt-2 ml-5 pt-1 text-2xl" style={{ color: "#0781C5" }} />
                        <div className=''><span className='font-bold bg-sky-600 text-white rounded-xl h-5 px-2 pb-1 z-2'>0</span></div>
                        <Nav.Link href="/my-basket" className='font-bold text-end' style={{ color: "#0781C5" }} >My basket</Nav.Link>
                    </Nav>

                    <Button type="button" className="btn mr-4 pl-4 pr-4 bg-sky-600 text-white font-bold">Become a Customer</Button>
                </Navbar.Collapse>
            </Navbar>

            <Navbar bg="light" expand="lg" className="border-top navbar-bottom ">
                <Navbar.Collapse id="basic-navbar-nav ">
                    <Nav className="pl-4 pr-5 flex justify-center">

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

                        <Link href="/" className="pl-4 pr-4">
                            <Nav.Link>Recipes</Nav.Link>
                        </Link>


                        <Link href="/category3" className="pr-4">
                            <Nav.Link>Tips & Trends</Nav.Link>
                        </Link>

                        <Link href="/category3" className="pr-4">
                            <NavDropdown title="Operations & Resources" id="basic-nav-dropdown" class="container">

                                <Link href="/category1">
                                    <NavDropdown.Item>American Restaurant Recipe & Resources</NavDropdown.Item>
                                </Link>
                                <Link href="/category1">
                                    <NavDropdown.Item>Italian Restaurant Recipes & Resources</NavDropdown.Item>
                                </Link>
                                <Link href="/category1">
                                    <NavDropdown.Item>Food Safety Quality Assurance</NavDropdown.Item>
                                </Link>
                                <Link href="/category1">
                                    <NavDropdown.Item>Restaurants Reopening Resources</NavDropdown.Item>
                                </Link>

                                <Dropdown.Divider />

                                <Link href="/category1">
                                    <NavDropdown.Item>Operations</NavDropdown.Item>
                                </Link>
                                <Link href="/category1">
                                    <NavDropdown.Item>Virtual Restaurant</NavDropdown.Item>
                                </Link>
                                <Link href="/category1">
                                    <NavDropdown.Item>Market Corner</NavDropdown.Item>
                                </Link>

                                <Dropdown.Divider />

                                <img src="https://foodie.sysco.com/wp-content/uploads/2021/12/American-Restaurant.png" alt="" />


                            </NavDropdown>
                        </Link>

                        <Link href="/category4" className='pr-4'>
                            <NavDropdown title="Sysco Brands" id="basic-nav-dropdown">
                                <Link href="/category1">
                                    <NavDropdown.Item>Arezzio</NavDropdown.Item>
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

                                <img src="https://foodie.sysco.com/wp-content/uploads/2022/09/CES-Fall_2022-Digital-Banners_3383554_300x415-1.jpg" alt="" />

                            </NavDropdown>
                        </Link>

                        <Link href="/category3" className='pr-4'>
                            <NavDropdown title="Services" id="basic-nav-dropdown">
                                <Link href="/category1">
                                    <NavDropdown.Item>Webinars</NavDropdown.Item>
                                </Link>
                                <Link href="/category2">
                                    <NavDropdown.Item>Business Solutions</NavDropdown.Item>
                                </Link>
                                <Link href="/category2">
                                    <NavDropdown.Item>Sysco Solutions Partners</NavDropdown.Item>
                                </Link>
                                <Link href="/category2">
                                    <NavDropdown.Item>Restaurant Solutions</NavDropdown.Item>
                                </Link>
                                <Dropdown.Divider />

                                <Link href="/category2">
                                    <img src="https://foodie.sysco.com/wp-content/uploads/2020/08/Sysco_Studio-147x87-EM-1-1.png" alt="" />
                                    <p>Sysco Studio</p>
                                </Link>
                                <Link href="/category2">
                                    <img src="https://foodie.sysco.com/wp-content/uploads/2020/08/Events-148x87-1.png" alt="" />
                                    <p>Sysco Events</p>
                                </Link>
                                <Dropdown.Divider />

                                <img src="https://foodie.sysco.com/wp-content/uploads/2021/05/SyscoFoodie-Live-Top-Navi-Image-300x415-1.png" alt="" />

                            </NavDropdown>
                        </Link>

                        <Link href="/category3" className='pr-4'>
                            <NavDropdown title="Community Impact" id="basic-nav-dropdown">
                                <Link href="/category1">
                                    <NavDropdown.Item>Nourishing Neighbours</NavDropdown.Item>
                                </Link>
                                <Link href="/category2">
                                    <NavDropdown.Item>Sustainable Agriculture</NavDropdown.Item>
                                </Link>
                                <Link href="/category2">
                                    <NavDropdown.Item>Testimonials</NavDropdown.Item>
                                </Link>
                                <Link href="/category2">
                                    <NavDropdown.Item>Send Us A Story</NavDropdown.Item>
                                </Link>
                                <Dropdown.Divider />

                                <img src="https://foodie.sysco.com/wp-content/uploads/2021/08/NN-Foodie-Homepage-Banner-Mobile-246x340.png" alt="" />


                            </NavDropdown>
                        </Link>


                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default Navigation
