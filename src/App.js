import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Products } from "./pages/Products/Products";
import { AddProduct } from "./pages/Products/AddProduct";
import { EditProduct } from "./pages/Products/EditProduct";
import { DeleteProduct } from "./pages/Products/DeleteProduct";
import ProductContextProvider from "./contexts/ProductContext";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProductContextProvider>
              <Products />
            </ProductContextProvider>
          }
        ></Route>
        <Route
          path="/add-product"
          element={
            <ProductContextProvider>
              <AddProduct />
            </ProductContextProvider>
          }
        ></Route>
        <Route
          path="/edit-product"
          element={
            <ProductContextProvider>
              <EditProduct />
            </ProductContextProvider>
          }
        ></Route>
        <Route
          path="/delete-product"
          element={
            <ProductContextProvider>
              <DeleteProduct />
            </ProductContextProvider>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
