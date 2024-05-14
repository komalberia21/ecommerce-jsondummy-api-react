import "./editcard.css";
import { productActions } from "../../redux/productReducer/productSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import EditForm from "../editform/EditForm";
import{toast} from 'react-toastify';

const EditCard = ({item}) => {
  const[startEdit,setstartEdit]=useState();
  const dispatch = useDispatch();

  const deleteProduct=(id)=>{
    dispatch(productActions.deleteProduct(id))
    toast.success("product deleted",{
      autoClose:1000
    });
   }
   const editProduct=()=>{
     setstartEdit((prev)=>!prev);
   }
   const handleSubmit=(newValue)=>{
   console.log("new",newValue);
   setstartEdit(false);
   dispatch(productActions.editProduct(newValue));
   toast.success("product edited successfully",{
    autoClose:1000
  });
   }
  
  return (
    <div className="all-pro-card">
            <div className="all-left">
            <img
              src={item.images[0]}
              alt="./images"
            />
            </div>
            {startEdit?
            (<div className="all-right">
             <EditForm key={item.id} formData={item} handleSubmit={handleSubmit}/>
              </div>):(
            <div className="all-right">
              <p className="all-title">{item.title}</p>
              <p>{item.description}</p>
              <p>Price:{item.price}</p>
              </div>
            )}
            <div className="all-btn">
              <button onClick={()=>{deleteProduct(item.id)}} className="del">delete</button>
              <button className="edit"onClick={()=>{editProduct()}}>edit</button>
            </div>
          </div>
  )
}

export default EditCard