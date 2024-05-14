import Hero from "./pages/hero/Hero"
import Navbar from "./components/navbar/Navbar"
import Product from "./pages/product/Product";
import AllProducts from "./pages/all products/AllProducts";
import AddProducts from "./pages/addproducts/AddProducts";
import { Provider } from 'react-redux';
import store from "./store"
import "./app1.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Layout = () => {
  console.log("app,layout");
  return (
    <div className="app-react">
      <Navbar />
      <Outlet />
     
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Hero />,
      },
      {
        path: "/allproducts",
        element: <AllProducts />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      {
        path: "/addproducts",
        element: <AddProducts />,
      },
    ],
  },
]);

function App() {
  
 return (
    <div>
      <Provider store={store}>
      <ToastContainer />
      <RouterProvider router={router} />
      </Provider>
    </div>
  );
}

export default App;