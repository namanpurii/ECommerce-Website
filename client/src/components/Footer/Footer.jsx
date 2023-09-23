import React from 'react'
import "./Footer.scss"
const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Children</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Voluptate, amet! Suscipit totam neque dolore reiciendis 
            sequi debitis corporis pariatur
            deleniti accusamus aut, consectetur, at quod quibusdam officia
            ullam porro tempora possimus! Cumque.
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Voluptate, amet! Suscipit totam neque dolore reiciendis 
            sequi debitis corporis pariatur
            deleniti accusamus aut, consectetur, at quod quibusdam officia
            ullam porro tempora possimus! Cumque.
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">AETHER</span>
          <span className="copyright">© Copyright 2023. All rights reserved.</span>
        </div>
        <div className="right">
          <img src="./img/payment.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer