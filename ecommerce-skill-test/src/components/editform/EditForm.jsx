import{useState} from "react";
import "../edit card/editcard.css";

const EditForm = ({formData,handleSubmit}) => {
  const [newProduct,setnewProduct]=useState(formData);

const handleChange=(e)=>{
        const{name,value}=e.target;
        console.log("nme",name);
        console.log("value",value);
        setnewProduct({...formData,[name]:value})
  }
  //console.log(newProduct);

  function handleform(e){
    e.preventDefault();
    handleSubmit(newProduct)
  }
return (
    <div>
  <form className="form-item" onSubmit={handleform}>
  <div className="form-group">
      <input
        type="text"
        id="title"
        name="title"
        value={newProduct.title}
        onChange={handleChange}
      />
    </div>
    <div className="form-group">
    <input
        id="description"
        value={newProduct.description}
        name="description"
        onChange={handleChange}
      />
    </div>
    <div className="form-group">
     
      <input
        type="number"
        id="price"
        name="price"
        value={newProduct.price}
        onChange={handleChange}
      />
    </div>
    <button type="submit">Submit</button>
  </form>
 </div>
)
}

export default EditForm