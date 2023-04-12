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
          <Image src={contentPath.image} alt="still searching" width={100} height={100} className='border border-2 rounded-lg m-2 w-20 h-20' />
        </div>
        <div class="card-body">
          <h5 class="card-title font-bold text-md">{contentPath.name}</h5>
          <h5 class="text-left mb-3">{contentPath.price}</h5>
          <button class="btn-remove text-sky-600 text-right" onClick={() => {
            dispatch(removeProduct(contentPath.id))
          }}>Remove Item</button>
        </div>
      </div>

    </>
  )
}

export default CartItem