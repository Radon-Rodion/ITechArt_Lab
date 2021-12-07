// import ReactRouterDOM from "react-router-dom";
import axios from "axios";

// const { useParams } = ReactRouterDOM;

const Products = () => {
  // const parameters = useParams();
  axios
    .get("/products")
    .then((response) => {
      // handle success
      console.log(response);
    })
    .catch((error) => {
      // handle error
      console.log(error);
    });
  return <h2>Products page</h2>;
};

export default Products;
