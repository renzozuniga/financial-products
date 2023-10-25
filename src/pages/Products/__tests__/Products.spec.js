import { render, screen, fireEvent } from "@testing-library/react";
import { Products } from "../Products";
import { ProductContext } from "../../../contexts/ProductContext";
import { BrowserRouter } from "react-router-dom";

const products = [
  {
    id: "4g9b8",
    name: "nombre",
    description: "lorem ipsum ",
    logo: "https://cdn-icons-png.flaticon.com/128/6778/6778927.png",
    date_release: "2023-11-10T00:00:00.000+00:00",
    date_revision: "2024-11-10T00:00:00.000+00:00",
  },
  {
    id: "awfafw",
    name: "new card",
    description: "lorem ipsum dolor sit",
    logo: "https://cdn-icons-png.flaticon.com/128/6778/6778923.png",
    date_release: "2023-10-19T00:00:00.000+00:00",
    date_revision: "2024-10-19T00:00:00.000+00:00",
  },
  {
    id: "asfasf",
    name: "asfasf",
    description: "asfasfasfasfasf",
    logo: "https://cdn-icons-png.flaticon.com/128/6778/6778911.png",
    date_release: "2023-10-26T00:00:00.000+00:00",
    date_revision: "2024-10-26T00:00:00.000+00:00",
  },
  {
    id: "2g32h3",
    name: "asfasfasfasf",
    description: "safasfasfasfasf",
    logo: "https://cdn-icons-png.flaticon.com/128/6778/6778913.png",
    date_release: "2023-10-27T00:00:00.000+00:00",
    date_revision: "2024-10-27T00:00:00.000+00:00",
  },
  {
    id: "323h23h",
    name: "asfgagas ga",
    description: "3 a3ga3gag3g",
    logo: "https://cdn-icons-png.flaticon.com/128/6778/6778995.png",
    date_release: "2023-11-02T00:00:00.000+00:00",
    date_revision: "2024-11-02T00:00:00.000+00:00",
  },
  {
    id: "23hsd",
    name: "h23hsdhsah",
    description: "h234hrwsdh",
    logo: "https://cdn-icons-png.flaticon.com/128/1321/1321142.png",
    date_release: "2023-10-27T00:00:00.000+00:00",
    date_revision: "2024-10-27T00:00:00.000+00:00",
  },
];

const columns = [
  "Logo",
  "Nombre del Producto",
  "Descripción",
  "Fecha de liberación",
  "Fecha de reestructuración",
];

const pages = [5, 10, 20];

const productAlert = { msg: "Alert", color: "error" };

jest.useFakeTimers();

describe("Products page", () => {
  const addProduct = jest.fn();
  const getProducts = jest.fn();

  describe("defaults", () => {
    it("should show title", () => {
      render(
        <BrowserRouter>
          <ProductContext.Provider
            value={{
              products: products,
              columns: columns,
              pages: pages,
              addProduct,
              getProducts,
              productAlert: productAlert,
            }}
          >
            <Products />
          </ProductContext.Provider>
        </BrowserRouter>
      );
      expect(screen.getByText("Agregar")).toBeInTheDocument();
      jest.runAllTimers();
    });
  });

  describe("actions", () => {
    it("handle change search", async () => {
      render(
        <BrowserRouter>
          <ProductContext.Provider
            value={{
              products: products,
              columns: columns,
              pages: pages,
              addProduct,
              getProducts,
              productAlert: productAlert,
            }}
          >
            <Products />
          </ProductContext.Provider>
        </BrowserRouter>
      );

      const input = screen.getByRole("textbox", { filters: { searchBy: "a" } });
      fireEvent.change(input, { target: { value: "a" } });

      expect(input).toBeInTheDocument();
      jest.runAllTimers();
    });

    it("handle change page", async () => {
      render(
        <BrowserRouter>
          <ProductContext.Provider
            value={{
              products: products,
              columns: columns,
              pages: pages,
              addProduct,
              getProducts,
              productAlert: productAlert,
            }}
          >
            <Products />
          </ProductContext.Provider>
        </BrowserRouter>
      );
      const pageButton = screen.getByTestId("page-button");
      fireEvent.change(pageButton);

      expect(pageButton).toBeInTheDocument();
      jest.runAllTimers();
    });

    it("handle actions edit", async () => {
      render(
        <BrowserRouter>
          <ProductContext.Provider
            value={{
              products: products,
              columns: columns,
              pages: pages,
              addProduct,
              getProducts,
              productAlert: productAlert,
            }}
          >
            <Products />
          </ProductContext.Provider>
        </BrowserRouter>
      );
      const selectButton = screen.getAllByTestId("select-actions")[0];
      fireEvent.change(selectButton, { target: { value: "edit" } });

      expect(selectButton).toBeInTheDocument();
      jest.runAllTimers();
    });

    it("handle actions delete", async () => {
      render(
        <BrowserRouter>
          <ProductContext.Provider
            value={{
              products: products,
              columns: columns,
              pages: pages,
              addProduct,
              getProducts,
              productAlert: productAlert,
            }}
          >
            <Products />
          </ProductContext.Provider>
        </BrowserRouter>
      );
      const selectButton = screen.getAllByTestId("select-actions")[0];
      fireEvent.change(selectButton, { target: { value: "delete" } });

      expect(selectButton).toBeInTheDocument();
      jest.runAllTimers();
    });
  });
});
