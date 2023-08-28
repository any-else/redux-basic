import axios from "axios";
import React from "react";
import ProductForm from "../../components/ProductForm/ProductForm";
import ProductList from "../../components/ProductList/ProductList";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { getAllProduct } from "../../redux/actions/ProductAction";
// import { IProduct } from "../../redux/type";

const ManageProductPage: React.FC = () => {
  const dispatch = useDispatch();
  const productState = useSelector((state: RootState) => state.products);
  console.log("productState", productState);
  // const [product, setProduct] = React.useState<IProduct[]>(
  //   productState.listProduct
  // );
  React.useEffect(() => {
    const CancelToken = axios.CancelToken;
    const cancel = CancelToken.source();

    const handleCallProduct = async () => {
      try {
        const response = await axios.get("http://localhost:8080/products", {
          cancelToken: cancel.token,
        });
        dispatch(getAllProduct(response.data));
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("Request canceled", error.message);
        } else {
          console.log("error", error);
        }
      }
    };
    handleCallProduct();
    return () => {
      cancel.cancel("cancel request");
    };
  }, [dispatch]);

  return (
    <div>
      <ProductForm />
      <ProductList listProduct={productState.listProduct} />
    </div>
  );
};

export default ManageProductPage;
