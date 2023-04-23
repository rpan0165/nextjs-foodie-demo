'use client'
import React from 'react';
import { useState } from "react";
import Link from "next/link";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaBars, faTimes, FaShoppingCart } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import { IoSearch } from 'react-icons/io5'
import { HiOutlineShoppingCart } from 'react-icons/hi'
import { RiBookmarkLine, RiArrowDropDownLine } from 'react-icons/ri';
import { Nav, Navbar, NavDropdown, Form, FormControl, Button } from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';
import '../styles/navigation.css';
import SearchBar from './SearchBar';
import PopupCart from './PopupCart';
import Image from 'next/image'
import CartItem from './CartItem';

import { useSelector, useDispatch } from 'react-redux'
import { addProduct, removeProduct } from '../redux/cartSlice'



function Navigation() {
    const [showSidebar, setShowSidebar] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const toggleSidebar = () => setShowSidebar(!showSidebar);

    const handleCartToggle = () => {
        setIsCartOpen(!isCartOpen);
        console.log(isCartOpen)
    };

    const itemsInCart = useSelector((state) => state.cart.itemsInCart)
    const dispatch = useDispatch()

    return (
        <>
            {/* cart */}
            <div className={`cart-popup ${isCartOpen ? "open" : ""}`}>
                <div className='flex flex-row justify-between py-2'>
                    <h3 className='mt-2 ml-1 pt-2 pb-3 font-bold text-xl'>My Basket</h3>
                    <span className=''>
                        {/* <Image className="close-button" onClick={handleCartToggle} src="/close.png" alt="still searching" width={30} height={30} /> */}
                        <GrClose onClick={handleCartToggle} className='mt-3 mr-3 text-2xl text-sky-600 hover:text-sky-500' />
                    </span>
                </div>
                <div className="cart-items">
                    {itemsInCart.map(product => (
                        <CartItem props={product} />
                    ))}
                </div>
                <div className='mx-auto text-center mt-3  align-bottom'>
                    <button className='border border-2 rounded-3xl py-2 px-4 text-sky-600 font-bold'>Review Shopping List</button>
                    <p>or</p>
                    <button className='border border-2 rounded-3xl py-2 px-4 bg-sky-600 text-white font-bold'>Proceed to Sysco Shop</button>
                </div>
            </div>

            {/* whole navbar */}
            <div className='fixed top-0' style={{ width: "100%", zIndex: "100" }}>
                <Navbar bg="light" expand="lg" sticky="top" width="100%" className="top-navbar-container grid grid-flow-col justify-between" style={{}}>
                    <div>
                        <div className="navbar-hamburger-menu-icon flex flex-row">
                            {/* hamburger menu */}
                            <FaBars className='d-inline-block mt-3 ml-4 mr-3 text-gray-500 cursor-pointer' />
                            {/* sysco logo */}
                            <Link href="/" className='d-inline-block'>
                                <img
                                    src="https://foodie.sysco.com/wp-content/themes/sysco-2022/assets/static/img/Sysco_Foodie_Web_Logo.svg"
                                    width="140"
                                    height="60"
                                    className="d-inline-block align-top"
                                    alt="Foodie-Logo"
                                />
                            </Link>
                            <div id="basic-navbar-nav" className="col-span-6" style={{}}>
                                {/* search bar */}
                                <SearchBar />
                            </div>
                        </div>
                        {/* <Navbar.Toggle aria-controls="basic-navbar-nav">
                        {showSidebar ? (
                            <FontAwesomeIcon icon={faTimes} />
                        ) : (
                            <FontAwesomeIcon icon={faBars} />
                        )}
                    </Navbar.Toggle> */}

                    </div>


                    <div className="">
                        {/* bookmark and cart icons, BAC button */}
                        <Nav className="">
                            {/* User options */}
                            <section className='flex flex-row justify-center px-2 rounded-md' style={{ backgroundColor: "#D9EEF9" }}>
                                <p className='pt-1 mt-1 ml-1 text-sm font-bold text-sky-800'>Hi, Anna  &nbsp;</p>
                                <RiArrowDropDownLine className=' mt-2 text-2xl text-sky-600 cursor-pointer' />
                            </section>
                            {/* bookmark area */}
                            <RiBookmarkLine className='ml-5 mr-3 p-2 text-sky-800 text-4xl rounded-full cursor-pointer' style={{ color: "#0781C5", backgroundColor: "#D9EEF9" }} />
                            <span className='font-bold text-sky-600 text-md mt-2 '>0</span>

                            <HiOutlineShoppingCart onClick={handleCartToggle} className="d-inline-block ml-5 p-2 text-4xl cursor-pointer text-sky-800 rounded-full" style={{ color: "#0781C5", backgroundColor: "#D9EEF9" }} />
                            <Nav.Link onClick={handleCartToggle}>
                                <div className=''>
                                    <span className='font-bold text-sky-600 rounded-xl h-5 px-2 pb-1 z-2'>{itemsInCart.length}</span>
                                </div>
                            </Nav.Link>
                            {/* <Nav.Link onClick={handleCartToggle} className='font-bold text-end' style={{ color: "#0781C5" }} >My basket</Nav.Link> */}
                        </Nav>
                    </div>

                    {/* <div className="">
                    <Button type="button" className="mr-4 pl-4 pr-4 bg-sky-600 text-white font-bold hover:bg-sky-500">Become a Customer</Button>
                </div> */}
                </Navbar >

                <Navbar bg="light" expand="lg" className="border-top navbar-bottom " style={{}}>
                    <Navbar.Collapse id="basic-navbar-nav ">
                        <Nav className="mx-auto space-x-2">

                            <Link href="/category1" className=''>
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

                            <Link href="/recipes" className="pl-4 pr-4">
                                <Nav.Link id='basic-nav-dropdown' href='/recipes'>Recipes</Nav.Link>
                            </Link>


                            <Link href="/recipes" className="pr-4">
                                <Nav.Link id='basic-nav-dropdown'>Tips & Trends</Nav.Link>
                            </Link>

                            <Link href="/category3" className="pr-4">
                                <NavDropdown title="Operations & Resources" id="basic-nav-dropdown" class="">

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
            </div >

        </>
    )
}

export default Navigation
