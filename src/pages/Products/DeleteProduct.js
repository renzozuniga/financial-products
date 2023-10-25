import React, { useContext } from "react";
import logoImg from "../../assets/img/logo-banco.png";
import "./Products.css";
import Button from "../../components/Button";
import { ProductContext } from "../../contexts/ProductContext";
import { useLocation, useNavigate } from "react-router-dom";

export const DeleteProduct = () => {
  const location = useLocation();
  const product = location.state.product;
  const { deleteProduct } = useContext(ProductContext);
  const navigate = useNavigate();

  const handleConfirm = async (event) => {
    event.preventDefault();
    deleteProduct(product.id);
    navigate("/");
  };

  const handleCancel = async (event) => {
    event.preventDefault();
    navigate("/");
  };

  return (
    <>
      <header>
        <img src={logoImg} className="logo" alt={"logo"} />
      </header>

      {
        <main>
          <div className="delete-content">
            <div className="custom-delete">
              <div className="custom-question">
                <h2>¿Estás seguro de eliminar el producto {product.name}?</h2>
              </div>
              <div className="flex-parent">
                <div className="flex-end">
                  <div className="flex-item" key="cancel">
                    <Button
                      mode="secondary"
                      label="Cancelar"
                      onClick={handleCancel}
                    />
                  </div>
                  <div className="flex-item" key="confirm">
                    <Button
                      mode="primary"
                      label="Confirmar"
                      onClick={handleConfirm}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      }
    </>
  );
};
