// AllProducts.js
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getInitialStateAsync } from "../../redux/productReducer/productSlice";
import EditCard from "../../components/edit card/EditCard";

const AllProducts = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const status = useSelector((state) => state.products.status);

  useEffect(() => {
    // Fetch initial state only if it's empty
    if (products.length === 0) {
      dispatch(getInitialStateAsync());
    }
  }, [dispatch, products]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }
  if (status === "failed") {
    return <div>Error: Failed to fetch products</div>;
  }

  return (
    <div className="all-products-edit">
      {products.length > 0 ? (
        products.map((item) => <EditCard item={item} key={item.id} />)
      ) : (
        <div className="no-products">No products found</div>
      )}
    </div>
  );
};

export default AllProducts;
