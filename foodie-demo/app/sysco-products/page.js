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
      <div className="bg-gray-100">
        {/* header cover */}
        {/* <div className='bg-blend-darken' id="backdrop-img" >
          <br /><br /><br /><br />
          <h1 className="text-center font-bold text-5xl text-white" style={{ fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif" }}>Professional Chef Recipes & Dishes</h1>

        </div> */}
        <div className="products-header-image d-flex text-center mx-auto" style={{ width: "100%" }}>
          <br/>
          <p className="font-bold product-header-p text-5xl" style={{ fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif" }}>Sysco Products</p>
          <br/>
          <div class="header-overlay"></div>
        </div>

        {/* title*/}
        <div class="container-fluid product-page-title">
          <h2 className="text-center font-bold text-4xl" style={{ fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif" }}>Explore the Latest</h2>
          <div class="h_line mt-3 mb-4 pt-0 " style={{
            color: "red", borderBottom: "5px solid #56B146",
            width: "10rem",
            margin: "auto",
          }}></div>
        </div>
y
        {/* previous content */}
        <div class="grid grid-cols-2 max-w-7xl mx-auto sm:grid-col-1">
          {
            products.map((product) => (
              <div class="">
                <div class="flex flex-row justify-between bg-white m-2 p-3" style={{height:"90%"}}>
                  
                  <div class="basis-1/3 align-middle">
                    <img
                      src={product.image.url}
                      alt="My Image"
                      width="90%"
                    />
                  </div>

                  <div class="basis-2/3">
                    <h5 class="font-bold text-xl mt-3 ml-2" style={{ fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif" }}>{product.title}</h5>
                    <p class="text-md">{product.sub_header}</p>

                    <div className="flex flex-row justify-between align-bottom ml-2">
                      <a className="font-bold text-lg text-sky-600 underline mt-1" href={`/sysco-products/${product.title}`}>See Details</a>
                      <a class="bg-sky-600  text-white font-bold rounded-3xl px-4 py-2 hover:bg-sky-500 cursor-pointer" style={{textDecoration:"none"}} onClick={() => {
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
              </div>
            ))
          }
        </div>
        <br/> <br/>
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