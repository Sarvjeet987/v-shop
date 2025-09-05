import React from 'react'
import { FaShopify } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { FaCartPlus } from "react-icons/fa";
import './Nav.css'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
const Nav = () => {
    let dispatch = useDispatch()
    console.log(dispatch)//manse
    let items = useSelector(state=>state)
    console.log(items);
    return (
        <div className='nav'>
            <div className="top-nav">
                <Link to="/"><div className="logo">
                    <span>V-Shop</span>
                    <FaShopify />
                </div></Link>
                <form className='search-box'>
                    <input type="text" placeholder='Search Items..' id='input-click' />
                    <label htmlFor="input-click"><IoSearch /></label>
                </form>
                <Link to="/cart">
                <div className="card-box">
                    <FaCartPlus />
                    <span>{items.cart.length}</span>
                </div>
                </Link>
            </div>
            <div className="bottom-nav">
                <Link to="/"><li>Home</li></Link>
                <Link to="/shop"><li>Shop</li></Link>
                <Link to="/cart"><li>Cart</li></Link>
                <Link to="/contact"><li>Contact</li></Link>
            </div>
        </div>
    )
}

export default Nav