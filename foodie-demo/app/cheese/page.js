'use client';
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { addProduct, removeProduct } from '../redux/cartSlice'
import Image from 'next/image';
import ProductItem from "../components/ProductItem";
import axios from "axios";

const Cheese = () => {

  const itemsInCart = useSelector((state) => state.cart.itemsInCart)
  const dispatch = useDispatch()

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

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
      // console.log(response.data.entries[0].products)
        setLoading(false);
    };

    fetchProducts();
    console.log("fetched")

  }, []);

  return loading && products.length == 0 ? (
    <div className="spinner-UI">
      <p>loading</p>
    </div>
  ) : (
    <>
      <div class="container">
        {/* header cover */}
        <div class="jumbotron jumbotron-fluid products-header-image d-flex align-items-center text-center">
            <p className="font-bold product-header-p">Sysco Products</p>
            <div class="header-overlay"></div>
        </div>

        {/* title*/}
          <div class="container-fluid product-page-title">
            <h2 className="text-center font-bold text-4xl" style={{ fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif" }}>Shop Our Cutting Edge Solutions Popular Recipes</h2>
            <div class="h_line mt-3 mb-4 pt-0 " style={{
                color: "red", borderBottom: "5px solid #56B146",
                width: "10rem",
                margin: "auto",
            }}></div>
        </div>
        
       {/* previous content */}
          <div class="row">
            {
              products.map((product) => (
                <div class="col-md-4">
                  <div class="card">
                    <div class="card-img-top">
                    <Image
                      src={product.image.url}
                      alt="My Image"
                      width={150}
                      height={150}
                    />
                    </div>
                      <div class="card-body">
                        <h5 class="card-title">{product.title}</h5>
                        <p class="card-text">{product.description}</p>
                      <a class="btn btn-primary" onClick={() => {
                        dispatch(addProduct({
                          "name": product.title,
                          "price": product.sub_header,
                          "image": product.image.url,
                          "id": product._metadata.uid
                        }))
                        }}>{product.button_text}</a>
                      </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
        {/* onClick={() => dispatch(addProduct())} */}
        {/* content */}
        {/* <div className="row">
          <div className="col-lg-6">
            <div className="product-card"> 
              <div className="product-card-image">

              </div>
              <div className="product-card-text-side">
                <div className="product-card-titles">

                </div>
                <div className="product-card-buttons">

                </div>
              </div>
            </div>
          </div>
        </div> */}
    </> 
  )
}

export default Cheese