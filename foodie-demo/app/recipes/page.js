'use client'
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import { IoSearch } from 'react-icons/io5';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import { Nav, Navbar, NavDropdown, Form, FormControl, Button, NavItem } from "react-bootstrap";
import Link from 'next/link';
import '../styles/recipes.css';
import Image from 'next/image';
import Card from 'react-bootstrap/Card';
import BottomCards from '../components/BottomCards';
import Footer from '../components/Footer';

function RecipesHome() {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));


  const posts = [
    {
      id: 1,
      title: 'Recipe by Sysco Culinary Team',
      subtitle: 'Shrimp Tostadas',
      href: '/recipes/recipeone',
      description:
        'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',

      imageUrl:
        'https://foodie.sysco.com/wp-content/uploads/2021/02/Shrimp-Tostadas-300x415.jpg',
    },
    {
      id: 2,
      title: 'Recipe by Sysco Culinary Team',
      subtitle: 'Shredded Chicken Lemon Orzo Soup',
      href: '/recipes/recipetwo',
      description:
        'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',

      imageUrl:
        'https://foodie.sysco.com/wp-content/uploads/2021/02/Shredded-Chicken-300x415.png',
    },
    {
      id: 3,
      title: 'Recipe by Sysco Culinary Team',
      subtitle: 'Truck Stop Breakfast',
      href: '/recipes/recipethree',
      description:
        'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',

      imageUrl:
        'https://foodie.sysco.com/wp-content/uploads/2021/02/Truck-Stop-Breakfast-300x415.png',
    },
    {
      id: 4,
      title: 'Recipe by GSC Culinary Team',
      subtitle: 'Apple Caramel Basque Cheesecake',
      href: '/recipes/recipefour',
      description:
        'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',

      imageUrl:
        'https://foodie.sysco.com/wp-content/uploads/2022/03/7188544-Basque-cheesecake-1-300x415.jpg',
    },
    // More posts...
  ];


  return (
    <div className='bg-slate-100'>
      <div className='bg-blend-darken' id="backdrop-img" >
        <br /><br /><br /><br />
        <h1 className="text-center font-bold text-5xl text-white" style={{ fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif" }}>Professional Chef Recipes & Dishes</h1>
        <h3 className="text-center text-2xl text-white mt-3" style={{ fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif" }}>Restaurant-ready dishes created by our chefs</h3>
        <form id="search_lp_form" method="get" action="/" className='mx-auto' style={{ width: "75%" }}>
          <div class="grid grid-cols-2 gap-6 mx-auto">
            <div class="col-span-1 m-5">
              <div class="input-group input-search-group">
                <label class="sr-only">Search recipes</label>
                <a id="s_lp_btn" href="#" class="foodie_search_button" />

                <input type="text" id="s_lp" name="s_lp" class="form-control" value="" placeholder="Search recipes" />
              </div>
            </div>
            <div class="col-span-1 m-5">
              <div class="input-group input-search-group js-exclude-div">
                <label class="sr-only">Exclude From Search</label>
                <a id="show_exclude_btn" href="#" class="foodie_search_button" />

                <input type="text" id="s_lp_exclude" name="s_lp_exclude" class="form-control" placeholder="Exclude From Search" value="" />
              </div>
            </div>
          </div>
        </form>
        <br />
      </div>
      <div className='bg-slate-800'>
        <div className='flex flex-row justify-center py-1'>
          <Navbar bg="slate-800" expand="lg" className="navbar-bottom font-white">
            <Navbar.Collapse id="basic-navbar-nav ">
              <Nav className="mx-auto space-x-2">

                <NavItem><h5 className='text-slate-400 text-sm mt-2'>FILTER RECIPES &nbsp; &nbsp; | </h5></NavItem>


                <NavDropdown title="Meal" id="recipe-nav-dropdown" className='font-white' style={{ color: "white" }}>
                  <Link href="/category1">
                    <NavDropdown.Item><label class="container-for-checkbox">Appetizer
                      <input type="checkbox" />
                      <span class="checkmark"></span>
                    </label></NavDropdown.Item>
                  </Link>
                  <Link href="/category2">
                    <NavDropdown.Item><label class="container-for-checkbox">Beverage
                      <input type="checkbox"  />
                      <span class="checkmark"></span>
                    </label></NavDropdown.Item>
                  </Link>
                  <Link href="/category2">
                    <NavDropdown.Item><label class="container-for-checkbox">Breakfast
                      <input type="checkbox"  />
                      <span class="checkmark"></span>
                    </label></NavDropdown.Item>
                  </Link>
                  <Link href="/category2">
                    <NavDropdown.Item><label class="container-for-checkbox">Brunch
                      <span class="checkmark"></span>
                    </label></NavDropdown.Item>
                  </Link>
                </NavDropdown>
                <NavDropdown title="Main Ingredient" id="recipe-nav-dropdown" className='font-white'>
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
                </NavDropdown>
                <NavDropdown title="Cuisine" id="recipe-nav-dropdown" className='font-white'>
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
                </NavDropdown>
                <NavDropdown title="Dish Type" id="recipe-nav-dropdown" className='font-white'>
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
                </NavDropdown>
                <NavDropdown title="Dietary Need" id="recipe-nav-dropdown" className='font-white'>
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
                </NavDropdown>
                <NavDropdown title="Technique" id="recipe-nav-dropdown" className='font-white'>
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
                </NavDropdown>

              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
      <div className='bg-slate-100 pt-3'>
        <div className='grid grid-cols-2 max-w-5xl px-3 mx-auto pt-5 min-w-lg'>
          <div className='border-solid border-5 border-gray-300 mr-2 '>
            <div className='inline-block align-baseline'>
              <p className=''>DINNER</p>
              <h1 className=''>Mexican Surf and Turf</h1>
            </div>
          </div>
          <div className='ml-2'>

            <img src='https://foodie.sysco.com/wp-content/uploads/2021/02/Surf-Turf-Burger-572x440.png' alt='grid-image-recipes' width="100%" />

          </div>

        </div>

      </div>
      <div className='bg-slate-100 pt-5'>
        <h2 className="text-center font-bold text-4xl" style={{ fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif" }}>What to Cook Now</h2>
        <p className="text-center pb-2" style={{ fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif", fontSize: "1.3rem" }}>What's hot in the Sysco kitchen</p>
        <div class="h_line mt-0 mb-4 pt-0 " style={{
          color: "red", borderBottom: "5px solid #56B146",
          width: "10rem",
          margin: "auto",
        }}></div>
      </div>

      <div class="grid grid-cols-4 justify-center mx-auto pt-5 pr-5 pl-5 max-w-7xl">
        {
          posts.map(post => (
            <div className="px-3">
              <Link href={post.href}>
                <Card style={{}} className=''>
                  <Card.Img variant="top" src={post.imageUrl} />
                  <Card.Body>
                    <Card.Title className="text-sm text-center text-sky-500">{post.subtitle}</Card.Title>
                    <Card.Text className="text-center pt-0 font-bold">
                      {post.title}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </div>
          ))
        }
        <br />  <br />
      </div>
      <div className='bg-slate-100 pt-5'>
        <h2 className="text-center font-bold text-4xl" style={{ fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif" }}>Latest Recipes</h2>
        <p className="text-center pb-2" style={{ fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif", fontSize: "1.3rem" }}>Fresh from our expert chefs</p>
        <div class="h_line mt-0 mb-4 pt-0 " style={{
          color: "red", borderBottom: "5px solid #56B146",
          width: "10rem",
          margin: "auto",
        }}></div>
        <br />
      </div>
      <div className='grid grid-cols-2 justify-center mx-auto max-w-7xl'>
        <div className='flex flex-col'>
          <div className=" m-2">
            <div className="container bg-white flex flex-row ">
              <div className="image-container basis-2/5">
                <img src="https://foodie.sysco.com/wp-content/uploads/2022/11/ceb6e70b-80b7-4bc6-a0dd-651289963492.jpg" alt="Slide 1 Image" />
              </div>
              <div className="my-auto mr-5 py-3 basis-3/5">
                {/* <Link href="#">
                                    <p className='py-0 md-0 font-bold text-sky-600'>APPETIZER</p>
                                </Link> */}
                <h2 className='text-xl font-extrabold font-serif ml-5 my-0 text-left'>Buffalo Lemon Pepper Shrimp with Salt & Pepper</h2>
                <p className='text-sm font-gray-800 font-serif mt-0 py-0'>An edge above the rest - Cutting Edge Solutions Fall 2022</p>
              </div>
            </div>
          </div>

          <div className=" m-2">
            <div className="container bg-white flex flex-row ">
              <div className="image-container basis-2/5">
                <img src="https://foodie.sysco.com/wp-content/uploads/2023/02/FriedShrimpBasket4750968-scaled.jpeg" alt="Slide 1 Image" />
              </div>
              <div className="my-auto mr-5 py-3 basis-3/5">
                {/* <Link href="#">
                                    <p className='py-0 md-0 font-bold text-sky-600'>APPETIZER</p>
                                </Link> */}
                <h2 className='text-xl font-extrabold font-serif ml-5 my-0 text-left'>Buffalo Lemon Pepper Shrimp with Salt & Pepper</h2>
                <p className='text-sm font-gray-800 font-serif mt-0 py-0'>An edge above the rest - Cutting Edge Solutions Fall 2022</p>
              </div>
            </div>
          </div>

          <div className=" m-2">
            <div className="container bg-white flex flex-row ">
              <div className="image-container basis-2/5">
                <img src="https://foodie.sysco.com/wp-content/uploads/2023/02/2548301-Sockeye-Salmon-BLT-scaled.jpg" alt="Slide 1 Image" />
              </div>
              <div className="my-auto  mr-5 py-3 basis-3/5 ">
                {/* <Link href="#">
                                    <p className='py-0 md-0 font-bold text-sky-600'>APPETIZER</p>
                                </Link> */}
                <h2 className='text-xl font-extrabold font-serif ml-5 my-0 text-left'>Buffalo Lemon Pepper Shrimp with Salt & Pepper</h2>
                <p className='text-sm font-gray-800 font-serif mt-0 py-0'>An edge above the rest - Cutting Edge Solutions Fall 2022</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className=" m-2">
            <div className="container bg-white flex flex-col ">
              <div className="image-container">
                <img src="https://foodie.sysco.com/wp-content/uploads/2023/02/5014786-Crunchy-Cod-Fillet-with-Kaiser-Bun-scaled.jpg" alt="Slide 1 Image" />
              </div>
              <div className="my-auto  mr-5 py-3 ">
                {/* <Link href="#">
                                    <p className='py-0 md-0 font-bold text-sky-600'>APPETIZER</p>
                                </Link> */}
                <h2 className='text-xl font-extrabold font-serif ml-5 my-0 text-left'>Buffalo Lemon Pepper Shrimp with Salt & Pepper</h2>
                <p className='text-sm font-gray-800 font-serif mt-0 py-0'>An edge above the rest - Cutting Edge Solutions Fall 2022</p>
              </div>
            </div>
          </div>
        </div>

      </div>
      <br />
      <p className="text-center pb-1 text-md font-bold" >SEE MORE RECIPES</p>
      <div class="h_line mb-3 pt-0 " style={{
        color: "#", borderBottom: "3px solid #56B146",
        width: "9%",
        margin: "auto",
      }}></div>

      <div className='' style={{backgroundColor:"#2A2F33", backgroundSize:""}}>
        <BottomCards />
      </div>
    </div>
  )
}

export default RecipesHome
