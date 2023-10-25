import ProductService from "../ProductService";
import axios from "axios";

jest.mock("axios");

describe("Product service", () => {
  const input = "testid";

  describe("Verify ID Products", () => {
    beforeEach(() => {
      jest.clearAllMocks();
    });

    describe("with success", () => {
      const url = `https://tribu-ti-staffing-desarrollo-afangwbmcrhucqfh.z01.azurefd.net/ipf-msa-productosfinancieros/bp/products/verification?id=${input}`;

      const data = {};

      beforeEach(() => {
        axios.get.mockResolvedValue(data);
      });

      it("should call axios get with given url", async () => {
        await ProductService.verifyId(input);
        const headers = {
          "Content-Type": "application/json",
          accept: " */*",
          authorId: 322,
        };
        expect(axios.get).toHaveBeenCalledWith(url, { headers: headers });
      });
    });

    describe("with error", () => {
      it("should get status code 500 and an error message", async () => {
        const mError = new Error("api");
        mError.response = {};
        mError.response.data = { key: "Error network" };
        mError.response.status = 500;
        mError.response.statusText = "Error";
        axios.get.mockRejectedValueOnce(mError);
        try {
          await ProductService.verifyId(input);
        } catch (err) {
          expect(err.code).toEqual(undefined);
          expect(err.name).toEqual("Error");
        }
      });

      it("should get network error", async () => {
        const mError = new Error("Error network");
        axios.get.mockRejectedValueOnce(mError);
        try {
          await ProductService.verifyId(input);
        } catch (err) {
          expect(err.message).toEqual("Error network");
        }
      });
    });
  });

  describe("Get Products", () => {
    beforeEach(() => {
      jest.clearAllMocks();
    });

    describe("with success", () => {
      const url = `https://tribu-ti-staffing-desarrollo-afangwbmcrhucqfh.z01.azurefd.net/ipf-msa-productosfinancieros/bp/products`;

      const data = {};

      beforeEach(() => {
        axios.get.mockResolvedValue(data);
      });

      it("should call axios get with given url", async () => {
        await ProductService.getProducts();
        const headers = {
          "Content-Type": "application/json",
          accept: " */*",
          authorId: 322,
        };
        expect(axios.get).toHaveBeenCalledWith(url, { headers: headers });
      });
    });

    describe("with error", () => {
      it("should get status code 500 and an error message", async () => {
        const mError = new Error("api");
        mError.response = {};
        mError.response.data = { key: "Error network" };
        mError.response.status = 500;
        mError.response.statusText = "Error";
        axios.get.mockRejectedValueOnce(mError);
        try {
          await ProductService.getProducts();
        } catch (err) {
          expect(err.code).toEqual(undefined);
          expect(err.name).toEqual("Error");
        }
      });

      it("should get network error", async () => {
        const mError = new Error("Error network");
        axios.get.mockRejectedValueOnce(mError);
        try {
          await ProductService.getProducts(input);
        } catch (err) {
          expect(err.message).toEqual("Error network");
        }
      });
    });
  });

  describe("Add Product", () => {
    beforeEach(() => {
      jest.clearAllMocks();
    });

    describe("with success", () => {
      const url = `https://tribu-ti-staffing-desarrollo-afangwbmcrhucqfh.z01.azurefd.net/ipf-msa-productosfinancieros/bp/products`;

      const data = {};

      beforeEach(() => {
        axios.post.mockResolvedValue(data);
      });

      it("should call axios post with given url", async () => {
        const body = {
          id: "testid1",
          name: "testname1",
          description: "testdescription1",
          logo: "testlogo1",
          date_release: "01/02/23",
          date_revision: "01/02/24",
        };
        await ProductService.addProduct(body);
        const headers = {
          "Content-Type": "application/json",
          accept: " */*",
          authorId: 322,
        };
        expect(axios.post).toHaveBeenCalledWith(url, body, {
          headers: headers,
        });
      });
    });

    describe("with error", () => {
      it("should post status code 500 and an error message", async () => {
        const mError = new Error("api");
        mError.response = {};
        mError.response.data = { key: "Error network" };
        mError.response.status = 500;
        mError.response.statusText = "Error";
        axios.post.mockRejectedValueOnce(mError);
        try {
          await ProductService.addProduct({});
        } catch (err) {
          expect(err.code).toEqual(undefined);
          expect(err.name).toEqual("Error");
        }
      });

      it("should get network error", async () => {
        const mError = new Error("Error network");
        axios.post.mockRejectedValueOnce(mError);
        try {
          await ProductService.addProduct({});
        } catch (err) {
          expect(err.message).toEqual("Error network");
        }
      });
    });
  });

  describe("Edit Product", () => {
    beforeEach(() => {
      jest.clearAllMocks();
    });

    describe("with success", () => {
      const url = `https://tribu-ti-staffing-desarrollo-afangwbmcrhucqfh.z01.azurefd.net/ipf-msa-productosfinancieros/bp/products`;

      const data = {};

      beforeEach(() => {
        axios.put.mockResolvedValue(data);
      });

      it("should call axios put with given url", async () => {
        const body = {
          id: "testid1",
          name: "testname1",
          description: "testdescription1",
          logo: "testlogo1",
          date_release: "01/02/23",
          date_revision: "01/02/24",
        };
        await ProductService.editProduct(body);
        const headers = {
          "Content-Type": "application/json",
          accept: " */*",
          authorId: 322,
        };
        expect(axios.put).toHaveBeenCalledWith(url, body, {
          headers: headers,
        });
      });
    });

    describe("with error", () => {
      it("should put status code 500 and an error message", async () => {
        const mError = new Error("api");
        mError.response = {};
        mError.response.data = { key: "Error network" };
        mError.response.status = 500;
        mError.response.statusText = "Error";
        axios.put.mockRejectedValueOnce(mError);
        try {
          await ProductService.editProduct({});
        } catch (err) {
          expect(err.code).toEqual(undefined);
          expect(err.name).toEqual("Error");
        }
      });

      it("should put network error", async () => {
        const mError = new Error("Error network");
        axios.put.mockRejectedValueOnce(mError);
        try {
          await ProductService.editProduct({});
        } catch (err) {
          expect(err.message).toEqual("Error network");
        }
      });
    });
  });

  describe("Delete Product", () => {
    beforeEach(() => {
      jest.clearAllMocks();
    });

    describe("with success", () => {
      const id = "testid";
      const url = `https://tribu-ti-staffing-desarrollo-afangwbmcrhucqfh.z01.azurefd.net/ipf-msa-productosfinancieros/bp/products?id=${id}`;

      const data = {};

      beforeEach(() => {
        axios.delete.mockResolvedValue(data);
      });

      it("should call axios delete with given url", async () => {
        await ProductService.deleteProduct(id);
        const headers = {
          "Content-Type": "application/json",
          accept: " */*",
          authorId: 322,
        };
        expect(axios.delete).toHaveBeenCalledWith(url, {
          headers: headers,
        });
      });
    });

    describe("with error", () => {
      it("should delete status code 500 and an error message", async () => {
        const mError = new Error("api");
        mError.response = {};
        mError.response.data = { key: "Error network" };
        mError.response.status = 500;
        mError.response.statusText = "Error";
        axios.delete.mockRejectedValueOnce(mError);
        try {
          await ProductService.deleteProduct("testid");
        } catch (err) {
          expect(err.code).toEqual(undefined);
          expect(err.name).toEqual("Error");
        }
      });

      it("should get network error", async () => {
        const mError = new Error("Error network");
        axios.delete.mockRejectedValueOnce(mError);
        try {
          await ProductService.deleteProduct("testid");
        } catch (err) {
          expect(err.message).toEqual("Error network");
        }
      });
    });
  });
});
