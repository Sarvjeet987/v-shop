import React from 'react'
import './Cart.css'
import CartCart from '../../Components/CartCart/CartCart'
import { useSelector } from 'react-redux'
import emprtImg from '../../assets/emptycart.png'

const Cart = () => {
    let items = useSelector(state => state)
    let total = items.cart.reduce((a,b)=>a+b.price,0)
    return (
        <div className='cart'>
            {items.cart.length <= 0 ? <div className='empty-cart'>
                <img src={emprtImg} alt="img" />
                <h1>Empty Cart</h1>
            </div> :
                <div className='cartCart-section'>
                    {items.cart.map((item) => (
                        <CartCart name={item.name} price={item.price} image={item.image} id={item.id} />
                    ))}
                    <div className="price-section">
                        <span>Total Products : {items.cart.length}</span>
                        <span>Total Price : {total}</span>
                    </div>
                </div>
            }
        </div>
    )
}

export default Cart