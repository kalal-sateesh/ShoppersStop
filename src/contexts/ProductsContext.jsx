import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getProducts } from "../services/products";

export const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
  const [Products, setProducts] = useState([]);
  const [isLoader, setIsLoader] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [isError, setIsError] = useState(false);

  const addProductsHandler = (data) => setProducts(data);
  const clearProductsHandler = () => setProducts("");

  useEffect(() => {
    setIsLoader(true);
    getProducts()
      .then((data) => {
        setProducts(data);
        setIsLoader(false);
        setIsError(false);
      })
      .catch(() => {
        setIsError(true);
        setIsLoader(false);
        setErrorMsg("Error: Something went wrong please try again");
      });
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        Products,
        isLoader,
        errorMsg,
        isError,
        addProductsHandler,
        clearProductsHandler,
      }}
    >
      {children}
      <style>
        {`body{
        background-color:rgb(194, 191, 191);
       }`}
      </style>
    </ProductsContext.Provider>
  );
};
ProductsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProductsProvider;
