import{Link} from "react-router-dom";
import { FaShoppingCart } from 'react-icons/fa';
import { useState } from "react";
import Cart from "../cart/Cart";
import { useSelector} from "react-redux";
import "./navbar.css";

const Navbar = () => {
  const[openCart,setopenCart]=useState(false);
  const cartitems=useSelector((state)=>state.cartReducer.cart);
  const cartLength=cartitems&&cartitems.length;
  //console.log(cartLength,"length");

  return (
    <div className="navbar">
        <div className="left">
            <a href="/">Home</a>
            <a href="/allproducts">All Products</a>
            <Link to="./addproducts">Add products</Link>
        </div>
        <div className="right">
          <div className="user-icon"><img src="./daisy.jpg" alt=""/></div>
            <Link to="/">komal</Link>
           <div className="cart-icon" onClick={()=>setopenCart(prev=>!prev)}> <FaShoppingCart size={24} /></div>
        </div>
        {openCart&&<div className="cart"><Cart/></div>}
        <div className="cart-length">{cartLength}</div>
    </div>
  )
}

export default Navbar