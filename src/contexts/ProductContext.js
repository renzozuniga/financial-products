import React, { createContext, useEffect, useState } from "react";
import ProductService from "../services/ProductService";
import { handleErrors } from "../utils/handlerFunctions";

export const ProductContext = createContext();

const ProductContextProvider = (props) => {
  const [products, setProducts] = useState();
  const [columns, setColumns] = useState();
  const [pages, setPages] = useState();
  const [productAlert, setProductAlert] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const products = await ProductService.getProducts();
        setProducts(products.data);
      } catch (error) {
        handleErrors(error, setProductAlert);
      }
    })();

    const columns = [
      "Logo",
      "Nombre del Producto",
      "Descripción",
      "Fecha de liberación",
      "Fecha de reestructuración",
      "",
    ];
    setColumns(columns);

    const pages = [5, 10, 20];
    setPages(pages);
  }, []);

  const verifyId = async (input) => {
    try {
      const res = await ProductService.verifyId(input);
      return res.data;
    } catch (error) {
      handleErrors(error, setProductAlert);
    }
  };

  const getProducts = async () => {
    try {
      const res = await ProductService.getProducts();
      return res.data;
    } catch (error) {
      handleErrors(error, setProductAlert);
    }
  };

  const addProduct = async (inputs) => {
    try {
      const body = {
        id: inputs.id.value,
        name: inputs.name.value,
        description: inputs.description.value,
        logo: inputs.logo.value,
        date_release: new Date(inputs.date_release.value).toISOString(),
        date_revision: new Date(inputs.date_revision.value).toISOString(),
      };
      const response = await ProductService.addProduct(body);
      let updatedValue = {};
      if (response.status && response.status === 200) {
        setProducts([response.data, ...products]);
        updatedValue = {
          msg: "Producto creado exitosamente",
          color: "success",
        };
      } else {
        updatedValue = { msg: "Ocurrió un error", color: "error" };
      }
      setProductAlert((prevState) => ({
        ...prevState,
        ...updatedValue,
      }));
    } catch (error) {
      handleErrors(error, setProductAlert);
    }
  };

  const editProduct = async (inputs) => {
    try {
      const body = {
        id: inputs.id.value,
        name: inputs.name.value,
        description: inputs.description.value,
        logo: inputs.logo.value,
        date_release: new Date(inputs.date_release.value).toISOString(),
        date_revision: new Date(inputs.date_revision.value).toISOString(),
      };
      const response = await ProductService.editProduct(body);
      let updatedValue = {};
      if (response.status && response.status === 200) {
        setProducts(
          products.map((product) =>
            product.id === body.id ? response.data : product
          )
        );
        updatedValue = {
          msg: "Producto editado exitosamente",
          color: "success",
        };
      } else {
        updatedValue = { msg: "Ocurrió un error", color: "error" };
      }
      setProductAlert((prevState) => ({
        ...prevState,
        ...updatedValue,
      }));
    } catch (error) {
      handleErrors(error, setProductAlert);
    }
  };

  const deleteProduct = async (id) => {
    try {
      const response = await ProductService.deleteProduct(id);
      let updatedValue = {};
      if (response.status && response.status === 200) {
        setProducts(products.filter((product) => product.id !== id));
        updatedValue = {
          msg: "Producto eliminado exitosamente",
          color: "success",
        };
      } else {
        updatedValue = { msg: "Ocurrió un error", color: "error" };
      }
      setProductAlert((prevState) => ({
        ...prevState,
        ...updatedValue,
      }));
    } catch (error) {
      handleErrors(error, setProductAlert);
    }
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        verifyId,
        getProducts,
        addProduct,
        editProduct,
        deleteProduct,
        columns,
        pages,
        productAlert,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
