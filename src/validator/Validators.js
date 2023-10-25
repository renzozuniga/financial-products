export const idValidator = (value, idDuplicated) => {
  if (!value) {
    return "ID es requerido";
  } else {
    if (value.length < 3) {
      return "ID debe tener mínimo 3 caracteres";
    } else if (value.length > 10) {
      return "ID debe tener máximo 10 caracteres";
    } else if (idDuplicated) {
      return "ID no puede repetirse";
    }
  }
  return "";
};

export const nameValidator = (value) => {
  if (!value) {
    return "Nombre es requerido";
  } else {
    if (value.length < 5) {
      return "Nombre debe tener mínimo 5 caracteres";
    } else if (value.length > 100) {
      return "Nombre debe tener máximo 100 caracteres";
    }
  }
  return "";
};

export const descriptionValidator = (value) => {
  if (!value) {
    return "Descripción es requerido";
  } else {
    if (value.length < 10) {
      return "Descripción debe tener mínimo 10 caracteres";
    } else if (value.length > 200) {
      return "Descripción debe tener máximo 200 caracteres";
    }
  }
  return "";
};

export const logoValidator = (value) => {
  if (!value) {
    return "Logo es requerido";
  }
  return "";
};

export const dateReleaseValidator = (value) => {
  if (!value) {
    return "Fecha de liberación es requerido";
  } else {
    var varDate = new Date(value);
    var today = new Date();
    today.setHours(0, 0, 0, 0);
    if (varDate.getTime() < today.getTime()) {
      return "Fecha de liberación debe ser igual o mayor que hoy";
    }
  }
  return "";
};

export const dateRevisionValidator = (value, form) => {
  if (!value) {
    return "Fecha de revisión es requerido";
  } else {
    var varRelease = new Date(form["date_release"].value);
    var varDate = new Date(value);
    if ((varDate - varRelease) / (1000 * 3600 * 24 * 365) < 1) {
      return "Fecha de revisión debe ser un año después de liberación";
    }
  }
  return "";
};
