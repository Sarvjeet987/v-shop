import React from 'react'
import './CartCart.css'
import { MdDeleteForever } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { RemoveItem } from '../../Redux/cardSlice';
const CartCart = ({name,price,image,id}) => {
  let dispatch = useDispatch()
  return (
    <div className='cartCart'>
        <div className="leftCart">
            <img src={image} alt="img" />
            <div className="name-price">
                <span>{name}</span>
                <span>Rs {price}/-</span>
            </div>
        </div>
        <div className="rightCart">
            <button onClick={()=>{
              dispatch(RemoveItem(id))
              alert("Item Remove Successfully..")
            }}>Remove <MdDeleteForever /></button>
        </div>
    </div>
  )
}

export default CartCart