import React from 'react';
import './Cart.css'
function Cart({cart,removeFromCart,addToCart}){
    const calculateTotal = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
      };
    return(
        <>
        <div className='cart'>
            <h1>Cart</h1>
            <ul>{
                cart.map(item =>(
                    <li className='listcart'>
                        <div className='list2'>
                            <div className='cartimage'>
                                <img src={item.image} alt={item.name} />
                            </div>    
                            <p>
                                <p>{item.name}</p>
                                <p>₹{item.price}</p>
                            </p>
                            <div className='but'>
                                <button onClick={()=>addToCart(item)}>+</button>
                                {item.quantity}
                                <button onClick={()=>removeFromCart(item)}>-</button>
                            </div>
                        </div>
                    </li>
                ))
            }  
            </ul> 
            <h2>Total:  ₹{calculateTotal()}</h2>
        </div>
        </>
    )
}
export default Cart;