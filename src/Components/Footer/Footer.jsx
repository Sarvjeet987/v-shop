import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="list-of-footer">
        <ul>
          <h3>All Categories</h3>
          <li>Electronics</li>
          <li>Fashion</li>
          <li>Home & Kitchen</li>
          <li>Shop</li>
          <li>Card</li>
        </ul>
        <ul>
          <h3>Popular Categories</h3>
          <li>Biscuits, Drinks & Packaged Foods</li>
          <li>Fruits & Vegetables</li>
          <li>Cooking Essentials</li>
          <li>Personal Care</li>
          <li>Beauty</li>
        </ul>
        <ul>
          <h3>Customer Account</h3>
          <li>My Account</li>
          <li>My Orders</li>
          <li>Delivery Addresses</li>
        </ul>
        <ul>
          <h3>Help & Support</h3>
          <li>About Us</li>
          <li>FAQ</li>
          <li>Terms & Conditions</li>
          <li>Privacy Policy</li>
          <li>Cancellation & Return Policy</li>
        </ul>
        <ul>
          <h3>Contact Us</h3>
          <li>WhatsApp us: 918651465896</li>
          <li>Call us: 0123456789</li>
          <li>8:00 AM to 8:00 PM, 365 days</li>
        </ul>
      </div>
      <div className="footer-cart">
        &copy; Copyright V-Shop
      </div>

    </div>
  )
}

export default Footer