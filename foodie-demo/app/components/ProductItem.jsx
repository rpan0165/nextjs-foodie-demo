'use client'
import React from 'react'
import { addProduct, removeProduct } from '../redux/cartSlice'

const ProductItem = () => {
    // const contentPath = productContent.props;
    // console.log(productContent);
    
  
  console.log("inside the product")
  
  return (
        <div class="col-md-4">
                <div class="card">
                <div class="card-img-top">
                <Image
                  src={contentPath.image}
                  alt="My Image"
                  width={150}
                  height={150}
                />
                </div>
                  <div class="card-body">
                    <h5 class="card-title">{contentPath.title}</h5>
                    <p class="card-text">{contentPath.description}</p>
                    <a href="#" class="btn btn-primary" onClick={handleClick}>Buy Now</a>
                  </div>
                </div>
        </div>
  )
}

export default ProductItem;