import React, { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../../contexts/ProductContext";
import logo from "../../assets/img/logo-banco.png";
import "./Products.css";
import LoadingSpinner from "../../components/LoadingSpinner";
import Alert from "../../components/Alert";
import { useNavigate } from "react-router-dom";
import { getFormattedDateRender } from "../../utils";

export const Products = () => {
  const { products, getProducts, columns, pages, productAlert } =
    useContext(ProductContext);
  const [filteredProducts, setFilteredProducts] = useState();
  const [filters, setFilters] = useState({
    max: 5,
    searchBy: "",
  });
  const [showProductAlert, setShowProductAlert] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (Object.keys(productAlert).length > 0) {
      setIsLoading(false);
      setShowProductAlert(true);
      setTimeout(() => {
        setShowProductAlert(false);
      }, 8000);
    }
  }, [productAlert]);

  useEffect(() => {
    if (products) {
      setIsLoading(false);
      getFilteredProducts();
    }
  }, [products]);

  useEffect(() => {
    if (products && filters) {
      getFilteredProducts();
    }
  }, [filters]);

  const getFilteredProducts = () => {
    const max = filters.max;
    const searchBy = filters.searchBy;
    setFilteredProducts(
      products
        .filter((o) =>
          Object.keys(o).some((k) =>
            o[k].toLowerCase().includes(searchBy.toLowerCase())
          )
        )
        .slice(0, max)
    );
  };

  const handleChangeSearch = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      searchBy: event.target.value,
    }));
  };

  const handleChangePage = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      max: event.target.value,
    }));
  };

  const handleActions = (event, data) => {
    const value = event.target.value;
    if (value === "edit") {
      navigate("/edit-product", { state: { product: data } });
    } else if (value === "delete") {
      navigate("/delete-product", { state: { product: data } });
    }
  };

  return (
    <>
      <header>
        <img src={logo} className="logo" alt={"logo"} />
      </header>

      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <main>
          {showProductAlert && (
            <Alert
              isOpen={showProductAlert}
              type={productAlert.color}
              message={productAlert.msg}
            />
          )}
          <div className="main-content">
            <div className="custom-actions">
              <div class="input-group">
                <input
                  type="text"
                  placeholder="Buscar..."
                  data-testid="search-button"
                  onChange={handleChangeSearch}
                />
              </div>
              <Link to={"/add-product"}>
                <button class="button-add" data-testid="add-button">
                  Agregar
                </button>
              </Link>
            </div>
            <div className="custom-list">
              <table className="custom-table">
                <tr>
                  {columns?.map((header) => (
                    <th key={header.id}>{header}</th>
                  ))}
                </tr>
                {filteredProducts?.map((row) => (
                  <tr key={row.id}>
                    <td>
                      <img
                        src={row.logo}
                        className="custom-logo"
                        alt={"Logo"}
                      />
                    </td>
                    <td>{row.name}</td>
                    <td>{row.description}</td>
                    <td>{getFormattedDateRender(row.date_release)}</td>
                    <td>{getFormattedDateRender(row.date_revision)}</td>
                    <td>
                      <select
                        className="actions"
                        data-testid="select-actions"
                        onChange={(e) => handleActions(e, row)}
                        value=""
                        defaultValue=""
                      >
                        <option selected hidden></option>
                        <option value="edit">Editar</option>
                        <option value="delete">Eliminar</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </table>
              <div className="custom-pagination">
                <p>{filteredProducts?.length} Resultados</p>
                <div className="custom-dropdown">
                  <select
                    className="custom-select"
                    data-testid="page-button"
                    onChange={handleChangePage}
                  >
                    {pages.map((page) => (
                      <option key={page} value={page}>
                        {page}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </main>
      )}
    </>
  );
};
