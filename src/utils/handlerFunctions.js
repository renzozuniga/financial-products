export const handleErrors = (error, setFunction) => {
  let updatedValue = {};
  updatedValue = { msg: error.message, color: "error" };
  setFunction((prevState) => ({
    ...prevState,
    ...updatedValue,
  }));
};
