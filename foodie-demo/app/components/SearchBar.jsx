'use client';
import React, { useState, useEffect } from "react";
import { Nav, Navbar, NavDropdown, Form, FormControl, Button } from "react-bootstrap";
import { IoSearch } from 'react-icons/io5'
import Image from 'next/image';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchQuery, setSearchQuery] = useState('');
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       const response = await axios.get("https://exampleapi.com/products");
//       setProducts(response.data);
//     };

//     fetchProducts();
//   }, []);
    
    const products = [
          {
            "name": "Product 1",
            "price": 10.99,
            "imageUrl":"/food-1.jpg"
          },
          {
            "name": "Product 2",
              "price": 24.99,
              "imageUrl":"/food-2.jpg"
          },
          {
            "name": "Product 3",
              "price": 15.49,
              "imageUrl":"/food-3.jpg"
          },
          {
            "name": "Product 4",
              "price": 7.99,
              "imageUrl":"/food-4.jpg"
          }
        ]

    function handleSearchInput(event) {
        setSearchQuery(event.target.value.toLowerCase().trim());
      }

      const filteredProducts = products.filter(product => {
        const name = product.name.toLowerCase();
        return name.includes(searchQuery);
      });

  return (
      <div>
        <Form inline >
            {/* <FormControl type="text" placeholder="Search for recipes, ingredients and more" className="mr-sm-2 " /> */}
            {/* <Button variant="outline-success">Search</Button> */}
            <div class="form-group has-search">
                <span className="fa fa-search form-control-feedback p-2 ml-2 text-xl"> <IoSearch className="font-bold font-gray-700"/></span>
                <input
                  type="text"
                  className="search-input form-control mt-1 ml-2"
                  placeholder="Search for recipes, ingredients and more"
                  width=""
                  onChange={handleSearchInput}
                  />
                  
                  {searchQuery !== '' && (
                    <div className="search-popup">
                      {filteredProducts.map(product => (
                          <div key={product.id} className="product-card">
                            <div className="product-image">
                                <Image
                                   src={product.imageUrl}
                                   alt="My Image"
                                   width={150}
                                   height={150}
                                   />
                            </div>
                          <div className="product-details">
                                <h2 className="product-title">{product.name}</h2>
                                <p className="product-price">{product.price}</p>
                            </div>
                            
                        </div>
                      ))}
                    </div>
                  )}
                  
                  <div className="product-list">
                    {products.map(product => (
                      <div key={product.id} className="product-card" style={{ display: filteredProducts.includes(product) ? 'block' : 'none' }}>
                            <div className="product-image">
                                <Image
                                   src={product.imageUrl}
                                   alt="My Image"
                                   width={150}
                                   height={150}
                                   />
                            </div>
                            <div className="product-details">
                                <h2 className="product-title">{product.name}</h2>
                                <p className="product-price">{product.price}</p>
                            </div>
                      </div>
                    ))}
                  </div>
            </div>
        </Form> 
    </div>
  );
};

export default SearchBar;


