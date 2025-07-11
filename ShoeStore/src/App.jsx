import { useState } from 'react'
import Navbar from './Components/Navbar';
import ShoeList from './Components/List';
import Cart from './Components/Cart'

function App() {
  let [cart,setCart] = useState([]);
  const shoelist = [
    {id:1,image:'/image1.jpeg',name:'Puma',price:2500},
    {id:2,image:'/image2.jpeg',name:'RedTape',price:1200},
    {id:3,image:'/image3.jpeg',name:'Jordan',price:1500},
    {id:4,image:'/image4.jpeg',name:'Adidas',price:700},
    {id:5,image:'/image5.jpeg',name:'Campus',price:900},
    {id:6,image:'/image6.jpeg',name:'Nike',price:1900},
  ]
  const addToCart = (shoe)=>{
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === shoe.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === shoe.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...shoe, quantity: 1 }];
      }
    });
  };
  const removeFromCart = (shoe) =>{
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === shoe.id);
      if (existingItem.quantity === 1) {
        return prevCart.filter(item => item.id !== shoe.id);
      } else {
        return prevCart.map(item =>
          item.id === shoe.id ? { ...item, quantity: item.quantity - 1 } : item
        );
      }
    });
  }
  return (
    <> 
       <Navbar />
       <ShoeList shoeslist={shoelist} addToCart={addToCart} />
       <Cart cart = {cart} removeFromCart={removeFromCart} addToCart={addToCart} />
    </>
  )
}

export default App;