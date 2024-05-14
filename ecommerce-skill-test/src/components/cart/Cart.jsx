import "./Cart.css";
import { useSelector,useDispatch} from "react-redux";
import { AiOutlineDelete } from 'react-icons/ai';
import { cartActions } from "../../redux/cartSlice";
import{toast} from 'react-toastify';

const Cart = () => {
  //fetching cart state from slice
  const cartitems=useSelector((state)=>state.cartReducer.cart);
  const dispatch=useDispatch();

  console.log(cartitems,"cartitemsfrom cart");

  //to delete cart item
  const handledelete=(id)=>{
    dispatch(cartActions.deletecart(id))
    toast.success("item removed from cart",{
      autoClose:1000
    });
}
//function to increase quantity
const handleIncrease=(id)=>{
  dispatch(cartActions.editcartInc(id))
}
//function to dec quantity
const handleDecrease=(id,quantity)=>{
  if(quantity===1){
    dispatch(cartActions.deletecart(id));
  }
  else{
    dispatch(cartActions.editcartDec(id));
  }
  
}

return (
    <>
    {cartitems.length>0?(<div className="cart-items">
        {cartitems.map((item)=>{
          return(
            <div key={item.id} className="cart-main">
              <div className="cart-img">
                <img src={item.image} alt="image"/>
              </div>
              <div className="cart-details">
                <p>{item.title}</p>
                <p>Price:{item.price}</p>
                <div onClick={()=>handledelete(item.id)}><AiOutlineDelete size={24} color="red" /></div>
              </div>
              <div className="cart-inc">
                <div onClick={()=>handleDecrease(item.id,item.quantity)}>-</div>
                <div>{item.quantity}</div>
                <div onClick={()=>handleIncrease(item.id)}>+</div>
              </div>

            </div>
          )
        })}
       </div>):
      (<div className="no-cart">Cart is empty</div>)
      }


    </>
  )
}

export default Cart