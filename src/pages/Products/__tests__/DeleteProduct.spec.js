import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { ProductContext } from "../../../contexts/ProductContext";
import { BrowserRouter } from "react-router-dom";
import { DeleteProduct } from "../DeleteProduct";

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

describe("Delete Product page", () => {
  const deleteProduct = jest.fn();

  describe("defaults", () => {
    it("should show title", () => {
      render(
        <BrowserRouter>
          <ProductContext.Provider
            value={{
              deleteProduct,
            }}
          >
            <DeleteProduct />
          </ProductContext.Provider>
        </BrowserRouter>
      );
      expect(
        screen.getByText("¿Estás seguro de eliminar el producto testname?")
      ).toBeInTheDocument();
    });
  });

  describe("actions", () => {
    it("handle cancel", async () => {
      render(
        <BrowserRouter>
          <ProductContext.Provider
            value={{
              deleteProduct,
            }}
          >
            <DeleteProduct />
          </ProductContext.Provider>
        </BrowserRouter>
      );

      const buttons = screen.getAllByRole("button");
      fireEvent.click(buttons[0]);

      await waitFor(() => {
        expect(buttons[0]).toBeInTheDocument();
      });
    });

    it("handle form confirm", async () => {
      render(
        <BrowserRouter>
          <ProductContext.Provider
            value={{
              deleteProduct,
            }}
          >
            <DeleteProduct />
          </ProductContext.Provider>
        </BrowserRouter>
      );

      const buttons = screen.getAllByRole("button");
      fireEvent.click(buttons[1]);

      await waitFor(() => {
        expect(buttons[1]).toBeInTheDocument();
      });
    });
  });
});
