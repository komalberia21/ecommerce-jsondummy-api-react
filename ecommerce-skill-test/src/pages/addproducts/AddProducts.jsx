import { useState } from "react";
import "./AddProducts.css";
import { productActions } from "../../redux/productReducer/productSlice";
import { useDispatch,useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import{toast} from "react-toastify";

const AddProducts = () => {
  const dispatch = useDispatch();
  const navigate=useNavigate();
  const produ = useSelector((state) => state.products.items);
  console.log(produ,"add")

  const [product, setProduct] = useState({
    id:"100",
    title: "",
    description: "",
    price: "",
    category: "",
    stock: "",
    images: []
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setProduct({ ...product, [name]: files[0] });
    } else {
      setProduct({ ...product, [name]: value });
    }
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
   // console.log("Product:", product);
    dispatch(productActions.addProduct(product));
    toast.success("New product added ",{
      autoClose:500
    })
    navigate("/allproducts");
  };

  return (
    <div className="add-products">
     <h1 style={{ color: 'blue' }}>Add Products</h1>
      <form className="form-item-add" onSubmit={handleAddProduct}>
      <div className="form-wrapper">
        <div className="form-first">
        <div className="form-group-add">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={product.title}
            onChange={handleChange}
          />
        </div>
        <div className="form-group-add">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={product.description}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="form-group-add">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            id="price"
            name="price"
            value={product.price}
            onChange={handleChange}
          />
        </div>
        </div>
        <div className="form-second">
        <div className="form-group-add">
          <div className="category">
              <label htmlFor="category">Category</label>
              <select
                id="category"
                name="category"
                value={product.category}
                onChange={handleChange}
              >
                <option value="">Select a category</option>
                <option value="electronics">Electronics</option>
                <option value="clothing">Clothing</option>
                <option value="books">Books</option>
                {/* Add more options as needed */}
              </select>
            </div>
           
         
        </div>
        <div className="form-group-add">
        <div className="stock">
              <label htmlFor="stock">Stock</label>
              <input
                type="number"
                id="stock"
                name="stock"
                value={product.stock}
                onChange={handleChange}
              />
            </div>
        </div>
        <div className="form-group-add">
          <label htmlFor="image">Image</label>
          <input
            type="file"
            id="images"
            name="images"
            accept="image/*"
            onChange={handleChange}
          />
        </div>
        </div>
        </div>
        <button type="submit">Submit</button>
      </form>
      
    </div>
  );
};

export default AddProducts;
