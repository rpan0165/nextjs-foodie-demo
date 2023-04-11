import React from 'react'
import Image from 'next/image'
import { useSelector, useDispatch } from 'react-redux'
import { addProduct, removeProduct } from '../redux/cartSlice'

const CartItem = (cartItemContent) => {
  const dispatch = useDispatch()

  const contentPath = cartItemContent.props;

  
  
  const handleProductClick = (product) => {
    // dispatch(addProduct({
    //   "name": product.title,
    //   "price": product.description,
    //   "image": product.image.url,
    //   "id": product._metadata.id
    // }))
  };
  
  return (
      <>
          <div class="card">
	        <div class="card-img">
                <Image src={contentPath.image} alt="still searching" width={150} height={150} />
	        </div>
	        <div class="card-body">
                  <h5 class="card-title">{contentPath.name}</h5>
	            <p class="card-text">{contentPath.price}</p>
          <button class="btn-remove" onClick={() => {
              dispatch(removeProduct(contentPath.id))
              }}>Remove Item</button>
	        </div>
	      </div>   
      </>
  )
}

export default CartItem