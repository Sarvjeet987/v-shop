import React from 'react'
import './Product.css'
import { useDispatch } from 'react-redux'
import { AddItem } from '../../Redux/cardSlice'
const Product = ({ name, image, price, id }) => {
  let dispatch = useDispatch()
  return (
    <div className='product'>
      <img src={image} alt="image" />
      <div className="product-details">
        <span className='name'>{name}</span>
        <span className='price'>Rs{price}/-</span>
        <button onClick={() => {
          dispatch(AddItem({ name: name, image:image, price:price, id:id }))
          alert("Item added to cart successfully..")
        }}>Add +</button>
      </div>
    </div>
  )
}

export default Product