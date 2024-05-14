
import "./Card.css";
import{Link} from "react-router-dom";

const Card = ({item}) => {

  // Function to render star icons based on the rating
  const renderStars = (rating) => {
    const starCount = Math.round(rating);
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < starCount) {
        stars.push(<span className="star" key={i}>&#9733;</span>); // Full star
      } else {
        stars.push(<span className="star" key={i}>&#9734;</span>); // Empty star
      }
    }
    return stars;
  };
  return (
    <Link to={`/product/${item.id}`}>
    <div className='card-product'>
      <img src={item.images[0]} alt="image"/>
       <div className="title"> {item.title}</div>
       <div className="bottom">
       <div className="price">Price:${item.price}</div>
       <div className="rating">{renderStars(item.rating)}</div>
       </div>
    </div>
    </Link>
  )
}

export default Card