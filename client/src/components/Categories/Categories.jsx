import React from 'react'
import './Categories.scss'
import { Link } from 'react-router-dom'
const Categories = () => {
  return (
    <div className='categories'>
      <div className="grid-item-1">
        <Link to="/products/1">
          <img src="https://images.pexels.com/photos/3538028/pexels-photo-3538028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
        </Link>
      </div>
      <div className="grid-item-2">
        <Link to="/products/1">
            <img src="https://images.pexels.com/photos/16523649/pexels-photo-16523649/free-photo-of-model-couple-posing-in-front-of-a-building.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </Link>
      </div>
      <div className="grid-item-3">
        <Link to="/products/1">
          <img src="https://images.pexels.com/photos/3608981/pexels-photo-3608981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </Link>
      </div>
      <div className="grid-item-4">
        <Link to="/products/1">
          <img src="https://images.pexels.com/photos/9785872/pexels-photo-9785872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </Link>
      </div>
      <div className="grid-item-5">
        <Link to="/products/1">
          <img src="https://images.pexels.com/photos/13358849/pexels-photo-13358849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </Link>
      </div>
      <div className="grid-item-6">
        <Link to="/products/1">
          <img src="https://images.pexels.com/photos/12368175/pexels-photo-12368175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </Link>
      </div>
    </div>
  )
}

export default Categories