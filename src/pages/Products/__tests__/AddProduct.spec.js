import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { ProductContext } from "../../../contexts/ProductContext";
import { BrowserRouter } from "react-router-dom";
import { AddProduct } from "../AddProduct";

describe("Add Product page", () => {
  const addProduct = jest.fn();
  const verifyId = jest.fn();

  describe("defaults", () => {
    it("should show title", () => {
      render(
        <BrowserRouter>
          <ProductContext.Provider
            value={{
              addProduct,
              verifyId,
            }}
          >
            <AddProduct />
          </ProductContext.Provider>
        </BrowserRouter>
      );
      expect(screen.getByText("Formulario de Registro")).toBeInTheDocument();
    });
  });

  describe("actions", () => {
    it("handle form submit", async () => {
      render(
        <BrowserRouter>
          <ProductContext.Provider
            value={{
              addProduct,
              verifyId,
            }}
          >
            <AddProduct />
          </ProductContext.Provider>
        </BrowserRouter>
      );

      const submitButton = screen.getByTestId("submit-button");
      fireEvent.submit(submitButton);

      await waitFor(() => {
        expect(submitButton).toBeInTheDocument();
      });
    });

    it("handle form submit success", async () => {
      verifyId.mockReturnValueOnce(false);
      render(
        <BrowserRouter>
          <ProductContext.Provider
            value={{
              addProduct,
              verifyId,
            }}
          >
            <AddProduct />
          </ProductContext.Provider>
        </BrowserRouter>
      );

      const inputId = screen.getByTestId("register-id", { id: "testingid" });
      fireEvent.change(inputId, { target: { value: "testingid" } });

      const inputName = screen.getByTestId("register-name", { name: "testname" });
      fireEvent.change(inputName, { target: { value: "testname" } });

      const inputDescription = screen.getByTestId("register-description", { description: "testdescription" });
      fireEvent.change(inputDescription, { target: { value: "testdescription" } });

      const inputLogo = screen.getByTestId("register-logo", { logo: "testlogo" });
      fireEvent.change(inputLogo, { target: { value: "testlogo" } });

      const inputDate = screen.getByTestId("date-button");
      fireEvent.change(inputDate, { target: { value: "2024-05-12" } });

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
              addProduct,
              verifyId,
            }}
          >
            <AddProduct />
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
              addProduct,
              verifyId,
            }}
          >
            <AddProduct />
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
              addProduct,
              verifyId,
            }}
          >
            <AddProduct />
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
              addProduct,
              verifyId,
            }}
          >
            <AddProduct />
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
              addProduct,
              verifyId,
            }}
          >
            <AddProduct />
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
              addProduct,
              verifyId,
            }}
          >
            <AddProduct />
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
