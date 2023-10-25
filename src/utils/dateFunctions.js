const padTo2Digits = (num) => {
  return num.toString().padStart(2, "0");
};

export const getFormattedDateInput = (inputDate) => {
  let date = new Date(inputDate);
  let dateYMD = `${date.getFullYear()}-${padTo2Digits(
    date.getMonth() + 1
  )}-${padTo2Digits(date.getDate())}`;
  return dateYMD;
};

export const getFormattedDateRender = (inputDate) => {
  let date = new Date(inputDate);
  let dateMDY = `${padTo2Digits(date.getDate())}/${padTo2Digits(
    date.getMonth() + 1
  )}/${date.getFullYear()}`;
  return dateMDY;
};
