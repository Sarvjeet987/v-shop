import React, { useState } from 'react'
import Nav from '../../Components/Nav/Nav'
import bg from '../../assets/bg0.gif'
import "./Home.css"
import { category } from '../../Category'
import Product from '../../Components/Products/Product'
import { dummydata } from '../../dummydata'

const Home = () => {
  // filter data ex => fation ke click pr fation wala data show ho
  const [cate, setCate] = useState(dummydata)
  function filterProduct(category) {
    const updateData = dummydata.filter((item) => (
      item.category === category
    ))
    setCate(updateData)
  }
  return (
    <div className='home'>
      <div className="hero-bg">
        <img src={bg} alt="home img" />
      </div>

      <div className="category-section">

        {
          category.slice(0, 5).map((item) => (
            <div className="category-card" onClick={()=>{
              filterProduct(item.name)
            }}>
              <img src={item.image} alt="" />
              <span>{item.name}</span>
            </div>
          ))
        }
      </div>
      <h1>Trending Products</h1>
      <div className="product-section">
        {cate.slice(0, 8).map((item) => (
          <Product name={item.name} price={item.price} image={item.image} id={item.id}/>
        ))}

      </div>
    </div>
  )
}

export default Home;