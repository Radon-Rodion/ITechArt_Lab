import { useParams } from "react-router-dom";
import Products from "./products";

const ProductsPageWrapper = () => {
  const params = useParams();
  return <Products category={params.category} />;
};

export default ProductsPageWrapper;
