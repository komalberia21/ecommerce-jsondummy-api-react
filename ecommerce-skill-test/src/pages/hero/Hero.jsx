import "./hero.css"
import { useEffect,useState} from "react"
import Card from "../../components/card/Card"
import { useDispatch, useSelector } from "react-redux";
import { getInitialStateAsync } from "../../redux/productReducer/productSlice";
import {toast} from "react-toastify";

const Hero = () => {
  const dispatch = useDispatch();
  //console.log("inside hero");
  let fetchedproducts=useSelector((state)=>state.products.items);
  const fetched=fetchedproducts;
   const[products,setProducts]=useState([]);
   const[sortby,setSortBy]=useState(false);
   //console.log(products,'products');

  useEffect(() => {
    if(products.length==0){
  dispatch(getInitialStateAsync());
  setProducts(fetchedproducts);
  
    }
   }, [dispatch,products,fetchedproducts]);

   const sortByPrice= async () => {
    if(sortby){
  try {
      const response = await fetch("https://dummyjson.com/products?_sort=price");
      //http://localhost:3000/products?_sort=price
      const res = await response.json();
      const data=res.products
      setProducts(data);
      toast.success("Products sorted",{
        autoClose:1000
      })
      console.log(res, "sortedProducts");
    } catch (error) {
      console.error("Error fetching sorted products:", error);
    }}
  else{
    setProducts(fetched);
  }};

  const sortByClick=()=>{
    setSortBy(prev=>!prev);
    sortByPrice();
}
  

 return (
  <>
  <div onClick={sortByClick} className="sort-by-price">Sort by Price</div>
    <div className="all-products">
      {products.length>0&&products.map((item)=>{
        return(
          <Card key={item.id} item={item}/>
        )
      })}
      {products.length===0&&<div>Loading...</div>}
     
    </div>
    </>
  )
}

export default Hero