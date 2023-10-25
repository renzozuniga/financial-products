import axios from "axios";

const verifyId = async (input) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_PRODUCTS}bp/products/verification?id=${input}`,
      {
        headers: {
          "Content-Type": "application/json",
          accept: " */*",
          authorId: 322,
        },
      }
    );
    return response;
  } catch (error) {
    throw error;
  }
};

const getProducts = async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_PRODUCTS}bp/products`,
      {
        headers: {
          "Content-Type": "application/json",
          accept: " */*",
          authorId: 322,
        },
      }
    );
    return response;
  } catch (error) {
    throw error;
  }
};

const addProduct = async (body) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API_PRODUCTS}bp/products`,
      body,
      {
        headers: {
          "Content-Type": "application/json",
          accept: " */*",
          authorId: 322,
        },
      }
    );
    return response;
  } catch (error) {
    throw error;
  }
};

const editProduct = async (body) => {
  try {
    const response = await axios.put(
      `${process.env.REACT_APP_API_PRODUCTS}bp/products`,
      body,
      {
        headers: {
          "Content-Type": "application/json",
          accept: " */*",
          authorId: 322,
        },
      }
    );
    return response;
  } catch (error) {
    throw error;
  }
};

const deleteProduct = async (id) => {
  try {
    const response = await axios.delete(
      `${process.env.REACT_APP_API_PRODUCTS}bp/products?id=${id}`,
      {
        headers: {
          "Content-Type": "application/json",
          accept: " */*",
          authorId: 322,
        },
      }
    );
    return response;
  } catch (error) {
    throw error;
  }
};

const ProductService = {
  verifyId,
  getProducts,
  addProduct,
  editProduct,
  deleteProduct,
};

export default ProductService;
