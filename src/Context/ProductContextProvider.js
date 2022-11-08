import axios from "axios";
import React, { createContext, useReducer } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const productContext = createContext();

const API = "http://localhost:8000/products";

const INIT_STATE = {
  products: null,
  oneProduct: null,
  pageTotalCount: 1,
};

function reducer(prevState, action) {
  switch (action.type) {
    case "GET_PRODUCT":
      return {
        ...prevState,
        products: action.payload.data,
        pageTotalCount: Math.ceil(action.payload.headers["x-total-count"] / 4),
      };
    case "GET_ONE_PRODUCT":
      return { ...prevState, oneProduct: action.payload };
    default:
      return prevState;
  }
}

const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  // console.log(state);
  const navigate = useNavigate();
  const location = useLocation();

  // ? create
  async function addProduct(newProduct) {
    // console.log(newProduct);
    try {
      await axios.post(API, newProduct);
    } catch (error) {
      return error;
    }
  }

  // ? read

  async function readProduct() {
    try {
      const res = await axios(`${API}/${location.search}`);
      // console.log(res);
      dispatch({
        type: "GET_PRODUCT",
        payload: res,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function readOneProduct(id) {
    try {
      const { data } = await axios(`${API}/${id}`);
      // console.log(data);
      dispatch({
        type: "GET_ONE_PRODUCT",
        payload: data,
      });
    } catch (error) {
      console.error(error);
    }
  }

  // ? Edit

  async function editProduct(id, editedObj) {
    // console.log(editedObj);
    try {
      await axios.patch(`${API}/${id}`, editedObj);
      readProduct();
    } catch (error) {
      console.error(error);
    }
  }

  // ? delete

  async function deleteProduct(id) {
    try {
      await axios.delete(`${API}/${id}`);
      readProduct();
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  }
  let cloud = {
    addProduct,
    readProduct,
    readOneProduct,
    editProduct,
    deleteProduct,
    productsArr: state.products,
    oneProduct: state.oneProduct,
    pageTotalCount: state.pageTotalCount,
  };
  return (
    <productContext.Provider value={cloud}>{children}</productContext.Provider>
  );
};

export default ProductContextProvider;
