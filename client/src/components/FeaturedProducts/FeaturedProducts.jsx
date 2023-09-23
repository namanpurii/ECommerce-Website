import React from 'react'
import './FeaturedProducts.scss'
import Card from '../Card/Card'

const FeaturedProducts = ({type}) => {
    const data = [
        {
            id: 1,
            img: "https://images.pexels.com/photos/9558588/pexels-photo-9558588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            img2: "https://images.pexels.com/photos/9558583/pexels-photo-9558583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Drop Shoulder T-Shirt",
            isNew: true,
            oldPrice: 19,
            price: 12
        },
        {
            id: 2,
            img: "https://images.pexels.com/photos/6765169/pexels-photo-6765169.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            img2: "https://images.pexels.com/photos/6765171/pexels-photo-6765171.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Mosaic Pattern Jacket",
            isNew: true,
            oldPrice: 19,
            price: 12
        },
        {
            id: 3,
            img: "https://images.pexels.com/photos/8811244/pexels-photo-8811244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            img2: "https://images.pexels.com/photos/8811250/pexels-photo-8811250.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Green Tank Top & Jeans Pair",
            isNew: true,
            oldPrice: 19,
            price: 12
        },
        {
            id: 4,
            img: "https://images.pexels.com/photos/6764012/pexels-photo-6764012.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            img2: "https://images.pexels.com/photos/6764021/pexels-photo-6764021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Blue Denim Jacket",
            isNew: true,
            oldPrice: 19,
            price: 12
        },
    ]
  return (
    <div className='featuredProducts'>
        <div className="top">
        <h1>{type} products</h1>
         <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quos praesentium, iure et sint, sed, error ut earum veniam
            ipsum veritatis nemo aut laboriosam numquam fugiat voluptas
            vel nihil corrupti sapiente!
         </p>
        </div>
         
        <div className="bottom">
            {data.map(item=>
                <Card item={item} key={item.id}/>
            )}
        </div>
    </div>
  )
}

export default FeaturedProducts