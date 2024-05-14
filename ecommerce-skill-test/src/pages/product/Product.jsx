import { useParams } from "react-router-dom";
import "./Product.css";
import { useEffect,useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { cartActions } from "../../redux/cartSlice";
import{toast} from "react-taostify";

const Product = () => {
  const dispatch=useDispatch();
  const[cartValue,setcartValue]=useState({
    id:"",
    title:"",
    price:"",
    quantity:1,
    image:"",
  })

  const cartitems=useSelector((state)=>state.cartReducer.cart);
  console.log(cartitems,"cartitems");
  const[product,setProduct]=useState({});
   const{id}=useParams();

 useEffect(()=>{
    async function fetchproduct(){
     const response= await fetch(`http://localhost:3000/products/${id}`);
    const res= await response.json();
     setProduct(res);
    setcartValue({
      id: res.id,
      title: res.title,
      price: res.price,
      quantity: 1,
      image: res.images && res.images[0],
    });
      }

     fetchproduct()
 },[id])

 const handleAddtoCart=(cartvalue)=>{
dispatch(cartActions.addTocart(cartvalue));
toast.success("product added to cart",{
  autoClose:500
})
}
return (
    <div className="single-product">
      <div className="single-left">
        <img className="single-img" src={product&&product.images&&product.images[0]} alt="image"/>
        </div>
      <div className="single-right">
        <div className="single-title">
          {product&&product.title}
        </div>
        <div className="des">
          {product&&product.description}
        </div>
        <div className="items">
          <p>Price:${product&&product.price}</p>
          <p>Ratings:{product&&product.rating}</p>
        </div>
        <div className="single-btn">
         <button onClick={()=>handleAddtoCart(cartValue)}className="btn">Add to cart</button>
        </div>
        </div>
      </div>
  )
}

export default Product