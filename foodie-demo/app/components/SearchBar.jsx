'use client';
import React, { useState, useEffect } from "react";
import { Nav, Navbar, NavDropdown, Form, FormControl, Button } from "react-bootstrap";
import { IoSearch } from 'react-icons/io5'
import Image from 'next/image';
import axios from 'axios';


const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchQuery, setSearchQuery] = useState('');
  const [products, setProducts] = useState([]);
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const [noResults, setNoResults] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const response = await axios.get('https://cdn.contentstack.io/v3/content_types/foodie_products/entries?environment=development',
        {
          headers: {
            'api_key': 'blt16b29db83ad01635',
            'access_token': 'cse3066d807437d70a5cc6bee6',
            'Content-Type': 'application/json',
          }
        }
      );
      setProducts(response.data.entries[0].products);
      setLoading(false);
    };

    // Only fetch results if searchQuery has a non-empty value
    if (searchQuery.trim() !== '') {
      setVisible(true);
      fetchProducts();
    } else {
      setVisible(false);
      setProducts([]);
    }

  }, [searchQuery]);

  function handleSearchInput(event) {
    setSearchQuery(event.target.value.toLowerCase().trim());
  }

  const filteredProducts = products.filter(product => {
    const name = product.title.toLowerCase();
    return name.includes(searchQuery);
  });

  const handleItemClick = (product) => {
    // Handle click event for item
    console.log(`Clicked item: ${product.title}`);
  };

  return (
    <div>
      <Form inline className="">
        {/* <FormControl type="text" placeholder="Search for recipes, ingredients and more" className="mr-sm-2 " /> */}
        {/* <Button variant="outline-success">Search</Button> */}
        <div class="form-group has-search">
          <span className="fa fa-search form-control-feedback py-2 pl-3 ml-2 mt-2 text-xl"> <IoSearch className="font-bold font-gray-700" /></span>
          <input
            type="text"
            className="search-input form-control mt-2 ml-2 rounded-3xl"
            placeholder="Search for recipes, ingredients and more"
            onChange={handleSearchInput}
            style={{ position:"absolute", width: "40%" }}
          />
          {visible && searchQuery !== '' && (
            <div className="search-popup ml-5" style={{ width: "32%", marginLeft: "12rem" }}>
              {loading && filteredProducts.length === 0 && (
                <div className="searching-gif">
                  <Image src="/cooking.gif" alt="still searching" width={100} height={100} />
                  <h2 className="product-title">Finding Recipes and Posts</h2>
                </div>
              )}
              {filteredProducts.length === 0 && loading == false ? (
                <div className="searching-gif">
                  <Image src="/no-content.png" alt="still searching" width={100} height={100} />
                  <h2 className="product-title">No Results Found</h2>
                </div>
              ) : (
                filteredProducts.map(product => (
                  <div key={product.id} className="product-card" onClick={() => handleItemClick(product)}>
                    <div className="">
                      <Image
                        src={product.image.url}
                        alt="My Image"
                        width={150}
                        height={150}
                        className="mr-5"
                        style={{ width: "6rem", height: "6rem" }}
                      />
                    </div>
                    <div className="product-details">
                      <h5 className="product-title text-md text-center" style={{ fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif" }}>{product.title}</h5>
                      <h5 className="product-price text-xs text-center" style={{ fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif" }}>{product.sub_header}</h5>
                    </div>
                    <hr />

                  </div>
                )))}
            </div>
          )}

          <div className="product-list">
            {products.map(product => (
              <div key={product.id} className="product-card" style={{ display: filteredProducts.includes(product) ? 'block' : 'none' }}>
                <div className="product-image">
                  <Image
                    src={product.image.url}
                    alt="My Image"
                    width={100}
                    height={100}
                  />
                </div>
                <div className="product-details">
                  <h5 className="product-title text-md text-center" style={{ fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif" }}>{product.title}</h5>
                  <h5 className="product-price text-xs text-center" style={{ fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif" }}>{product.sub_header}</h5>
                </div>
                <hr/>
              </div>
            ))}
          </div>
        </div>
      </Form>
    </div>
  );
};

export default SearchBar;


