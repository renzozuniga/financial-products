import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { ProductContext } from "../../../contexts/ProductContext";
import { BrowserRouter } from "react-router-dom";
import { EditProduct } from "../EditProduct";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({
    state: {
      product: {
        id: "testid",
        name: "testname",
        description: "testdescription",
        logo: "testlogo",
        date_release: "2023-11-10",
        date_revision: "2024-11-10",
      },
    },
  }),
}));

describe("Edit Product page", () => {
  const editProduct = jest.fn();

  describe("defaults", () => {
    it("should show title", () => {
      render(
        <BrowserRouter>
          <ProductContext.Provider
            value={{
              editProduct,
            }}
          >
            <EditProduct />
          </ProductContext.Provider>
        </BrowserRouter>
      );
      expect(screen.getByText("Formulario de Edición")).toBeInTheDocument();
    });
  });

  describe("actions", () => {
    it("handle form submit", async () => {
      render(
        <BrowserRouter>
          <ProductContext.Provider
            value={{
              editProduct,
            }}
          >
            <EditProduct />
          </ProductContext.Provider>
        </BrowserRouter>
      );

      const submitButton = screen.getByTestId("submit-button");
      fireEvent.submit(submitButton);

      await waitFor(() => {
        expect(submitButton).toBeInTheDocument();
      });
    });

    it("handle form reset", async () => {
      render(
        <BrowserRouter>
          <ProductContext.Provider
            value={{
              editProduct,
            }}
          >
            <EditProduct />
          </ProductContext.Provider>
        </BrowserRouter>
      );

      const submitButton = screen.getByTestId("submit-button");
      fireEvent.reset(submitButton);

      await waitFor(() => {
        expect(submitButton).toBeInTheDocument();
      });
    });

    it("handle change date", async () => {
      render(
        <BrowserRouter>
          <ProductContext.Provider
            value={{
              editProduct,
            }}
          >
            <EditProduct />
          </ProductContext.Provider>
        </BrowserRouter>
      );

      const input = screen.getByTestId("date-button");
      fireEvent.change(input, { target: { value: "2024-05-12" } });

      await waitFor(() => {
        expect(input).toBeInTheDocument();
      });
    });

    it("handle input id", async () => {
      render(
        <BrowserRouter>
          <ProductContext.Provider
            value={{
              editProduct,
            }}
          >
            <EditProduct />
          </ProductContext.Provider>
        </BrowserRouter>
      );

      const input = screen.getByTestId("register-id", { id: "a" });
      fireEvent.change(input, { target: { value: "a" } });

      await waitFor(() => {
        expect(input).toBeInTheDocument();
      });
    });

    it("handle input description", async () => {
      render(
        <BrowserRouter>
          <ProductContext.Provider
            value={{
              editProduct,
            }}
          >
            <EditProduct />
          </ProductContext.Provider>
        </BrowserRouter>
      );

      const input = screen.getByTestId("register-description", { id: "a" });
      fireEvent.change(input, { target: { value: "a" } });

      await waitFor(() => {
        expect(input).toBeInTheDocument();
      });
    });

    it("handle input name", async () => {
      render(
        <BrowserRouter>
          <ProductContext.Provider
            value={{
              editProduct,
            }}
          >
            <EditProduct />
          </ProductContext.Provider>
        </BrowserRouter>
      );

      const input = screen.getByTestId("register-name", { id: "a" });
      fireEvent.change(input, { target: { value: "a" } });

      await waitFor(() => {
        expect(input).toBeInTheDocument();
      });
    });

    it("handle input logo", async () => {
      render(
        <BrowserRouter>
          <ProductContext.Provider
            value={{
              editProduct,
            }}
          >
            <EditProduct />
          </ProductContext.Provider>
        </BrowserRouter>
      );

      const input = screen.getByTestId("register-logo", { id: "a" });
      fireEvent.change(input, { target: { value: "a" } });

      await waitFor(() => {
        expect(input).toBeInTheDocument();
      });
    });
  });
});
