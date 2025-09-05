import React, { useState } from 'react'
import { category } from '../../Category'
import { dummydata } from '../../dummydata'
import Product from '../../Components/Products/Product'
import { FaShopify } from "react-icons/fa";
import './Shop.css'
const Shop = () => {
    // filter data ex => fation ke click pr fation wala data show ho
    const [cate, setCate] = useState(dummydata)
    function filterProduct(category) {
        if (category === "All") {
            setCate(dummydata)
        } else {
            const updateData = dummydata.filter((item) => (
                item.category === category
            ))
            setCate(updateData)

        }
    }
    return (
        <div className='shop'>
            <div className="heading">
                <span>Shop</span>
                <FaShopify />
            </div>
            <div className="category-section">

                {
                    category.map((item) => (
                        <div className="category-card" onClick={() => {
                            filterProduct(item.name)
                        }}>
                            <img src={item.image} alt="" />
                            <span>{item.name}</span>
                        </div>
                    ))
                }
            </div>
            <div className="product-section">
                {cate.map((item) => (
                    <Product name={item.name} price={item.price} image={item.image} id={item.id}/>
                ))}

            </div>

        </div>
    )
}

export default Shop