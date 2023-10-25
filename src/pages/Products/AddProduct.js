import React, { useContext, useState } from "react";
import logoImg from "../../assets/img/logo-banco.png";
import "./Products.css";
import { FormValidator } from "../../validator/FormValidator";
import { ProductContext } from "../../contexts/ProductContext";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

export const AddProduct = () => {
  const { addProduct, verifyId } = useContext(ProductContext);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [logo, setLogo] = useState("");
  const [date_release, setDateRelease] = useState("");
  const [date_revision, setDateRevision] = useState("");
  const navigate = useNavigate();

  const content = {
    footer: [
      {
        label: "Reiniciar",
        mode: "secondary",
        type: "reset",
      },
      {
        label: "Enviar",
        mode: "primary",
        type: "submit",
      },
    ],
    initialValues: {
      id: { value: "", type: "id" },
      name: { value: "", type: "name" },
      description: { value: "", type: "description" },
      logo: { value: "", type: "logo" },
      date_release: { value: "", type: "date_release" },
      date_revision: { value: "", type: "date_revision" },
    },
  };

  const [formState] = useState({
    inputs: content.initialValues,
  });

  const { errors, validateForm } = FormValidator(formState.inputs);

  const updateFormstate = () => {
    formState.inputs["id"]["value"] = id;
    formState.inputs["name"]["value"] = name;
    formState.inputs["description"]["value"] = description;
    formState.inputs["logo"]["value"] = logo;
    formState.inputs["date_release"]["value"] = date_release;
    formState.inputs["date_revision"]["value"] = date_revision;
  };

  const handleReset = async (event) => {
    setId("");
    setName("");
    setDescription("");
    setLogo("");
    setDateRelease("");
    setDateRevision("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    updateFormstate();

    const idDuplicated = await verifyId(formState.inputs.id.value);

    const { isValid } = await validateForm({
      form: formState.inputs,
      errors,
      forceTouchErrors: true,
      idDuplicated,
    });

    if (!isValid) return;
    addProduct(formState.inputs);
    navigate("/");
  };

  const handleChangeDate = (e) => {
    setDateRelease(e.target.value);
    const aYearFromNow = new Date(e.target.value);
    aYearFromNow.setFullYear(aYearFromNow.getFullYear() + 1);
    aYearFromNow.setDate(aYearFromNow.getDate() + 1);
    var input = aYearFromNow.toLocaleDateString();
    var output = input.replace(/(\d\d)\/(\d\d)\/(\d{4})/, "$3-$1-$2");
    setDateRevision(output);
  };

  return (
    <>
      <header>
        <img src={logoImg} className="logo" alt={"logo"} />
      </header>

      {
        <main>
          <div className="add-content">
            <div className="custom-form">
              <div className="custom-title">
                <h2>Formulario de Registro</h2>
              </div>
              <form
                id="register-form"
                data-testid="submit-button"
                className="form-page"
                onSubmit={handleSubmit}
                onReset={handleReset}
              >
                <div class="form-container">
                  <div class="form-layout">
                    <p class="col col-main">
                      <div className="form-element">
                        <div className="input-container lg">
                          <input
                            id="register-id"
                            data-testid="register-id"
                            className={`input-component primary ${
                              errors["id"].error ? "yes-error" : "no-error"
                            }`}
                            type="text"
                            placeholder=""
                            onChange={(e) => setId(e.target.value)}
                            value={id}
                            disabled={false}
                          />
                          <label>ID</label>
                          <span className="focus-border">
                            <i></i>
                          </span>
                        </div>
                        {errors["id"].dirty && errors["id"].error ? (
                          <p className="formFieldErrorMessage">
                            {errors["id"].message}
                          </p>
                        ) : null}
                      </div>

                      <div className="form-element">
                        <div className="input-container lg">
                          <input
                            id="register-description"
                            data-testid="register-description"
                            className={`input-component primary ${
                              errors["description"].error
                                ? "yes-error"
                                : "no-error"
                            }`}
                            type="text"
                            placeholder=""
                            onChange={(e) => setDescription(e.target.value)}
                            value={description}
                            disabled={false}
                          />
                          <label>Descripción</label>
                          <span className="focus-border">
                            <i></i>
                          </span>
                        </div>
                        {errors["description"].dirty &&
                        errors["description"].error ? (
                          <p className="formFieldErrorMessage">
                            {errors["description"].message}
                          </p>
                        ) : null}
                      </div>

                      <div className="form-element">
                        <div className="input-container lg">
                          <input
                            value={date_release}
                            className={`input-component primary ${
                              errors["date_release"].error
                                ? "yes-error"
                                : "no-error"
                            }`}
                            data-testid="date-button"
                            onChange={handleChangeDate}
                            disabled={false}
                            type="date"
                          />
                          <label>Fecha de liberación</label>
                        </div>
                        {errors["date_release"].dirty &&
                        errors["date_release"].error ? (
                          <p className="formFieldErrorMessage">
                            {errors["date_release"].message}
                          </p>
                        ) : null}
                      </div>
                    </p>
                    <p class="col col-complementary" role="complementary">
                      <div className="form-element">
                        <div className="input-container lg">
                          <input
                            id="register-name"
                            data-testid="register-name"
                            className={`input-component primary ${
                              errors["name"].error ? "yes-error" : "no-error"
                            }`}
                            type="text"
                            placeholder=""
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            disabled={false}
                          />
                          <label>Nombre</label>
                          <span className="focus-border">
                            <i></i>
                          </span>
                        </div>
                        {errors["name"].dirty && errors["name"].error ? (
                          <p className="formFieldErrorMessage">
                            {errors["name"].message}
                          </p>
                        ) : null}
                      </div>

                      <div className="form-element">
                        <div className="input-container lg">
                          <input
                            id="register-logo"
                            data-testid="register-logo"
                            className={`input-component primary ${
                              errors["logo"].error ? "yes-error" : "no-error"
                            }`}
                            type="text"
                            placeholder=""
                            onChange={(e) => setLogo(e.target.value)}
                            value={logo}
                            disabled={false}
                          />
                          <label>Logo</label>
                          <span className="focus-border">
                            <i></i>
                          </span>
                        </div>
                        {errors["logo"].dirty && errors["logo"].error ? (
                          <p className="formFieldErrorMessage">
                            {errors["logo"].message}
                          </p>
                        ) : null}
                      </div>

                      <div className="form-element">
                        <div className="input-container lg">
                          <input
                            value={date_revision}
                            className={`input-component primary ${
                              errors["date_revision"].error
                                ? "yes-error"
                                : "no-error"
                            }`}
                            onChange={handleChangeDate}
                            disabled={true}
                            type="date"
                          />
                          <label>Fecha de Revisión</label>
                        </div>
                        {errors["date_revision"].dirty &&
                        errors["date_revision"].error ? (
                          <p className="formFieldErrorMessage">
                            {errors["date_revision"].message}
                          </p>
                        ) : null}
                      </div>
                    </p>
                  </div>
                </div>
                <div className="flex-parent">
                  <div className="flex-end">
                    {content &&
                      content.footer.map((row, index) => (
                        <div className="flex-item" key={index}>
                          <Button
                            mode={row.mode}
                            label={row.label}
                            labels={row.labels}
                            onClick={eval(row.onClick)}
                            disabled={row.disabled}
                            type={row.type}
                          />
                        </div>
                      ))}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </main>
      }
    </>
  );
};
