import React from 'react'
import "./Cart.scss"
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
const Cart = () => {
    const data=[
        {
            id: 1,
            img: "https://images.pexels.com/photos/6764012/pexels-photo-6764012.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            img2: "https://images.pexels.com/photos/6764021/pexels-photo-6764021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Blue Denim Jacket",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptas quae veniam voluptatibus necessitatibus, accusamus id, accusantium vel ullam odit nemo soluta, sit nisi fugit eos. Est natus facere praesentium?",
            isNew: true,
            oldPrice: 19,
            price: 12
        },
        {
            id: 2,
            img: "https://images.pexels.com/photos/8811244/pexels-photo-8811244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            img2: "https://images.pexels.com/photos/8811250/pexels-photo-8811250.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Green Tank Top & Jeans Pair",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptas quae veniam voluptatibus necessitatibus, accusamus id, accusantium vel ullam odit nemo soluta, sit nisi fugit eos. Est natus facere praesentium?",
            isNew: true,
            oldPrice: 19,
            price: 12
        }
    ]
  return (
    <div className='cart'>
        <h1>Your Cart</h1>
        {data?.map(item=>(
            <div className="item" key={item.id}>
                <img src={item.img} alt="" />
                <div className="details">
                    <h1>{item.title}</h1>
                    <p>{item.desc?.substring(0,30)+" ..."}</p>
                    <div className="price">1 x ${item.price}</div>
                </div>
                <DeleteOutlineIcon className='delete'/>
            </div>
        ))}
        <div className="total">
            <span>Subtotal</span>
            <span>$123</span>
        </div>
        <button>PROCEED TO CHECKOUT</button>
        <span className="reset">Reset Cart</span>
    </div>
  )
}

export default Cart