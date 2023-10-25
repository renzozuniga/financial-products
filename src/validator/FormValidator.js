import { useState } from "react";

import {
  idValidator,
  nameValidator,
  descriptionValidator,
  logoValidator,
  dateReleaseValidator,
  dateRevisionValidator,
} from "./Validators.js";

const touchErrors = (errors) => {
  return Object.entries(errors).reduce((acc, [field, fieldError]) => {
    acc[field] = {
      ...fieldError,
      dirty: true,
    };
    return acc;
  }, {});
};

const touchInitial = (errors) => {
  return Object.entries(errors).reduce((acc, [field, fieldError]) => {
    acc[field] = {
      ...fieldError,
      dirty: false,
    };
    return acc;
  }, {});
};

export const FormValidator = (form) => {
  const initialState = Object.fromEntries(
    Object.entries(form).map((entry) => {
      entry[1] = {
        dirty: false,
        error: false,
        message: "",
      };
      return entry;
    })
  );
  const [errors, setErrors] = useState(initialState);

  const validateForm = async ({
    form,
    field,
    errors,
    forceTouchErrors = false,
    forceInitialState = false,
    idDuplicated,
  }) => {
    let isValid = true;

    const nextErrors = JSON.parse(JSON.stringify(errors));

    if (forceTouchErrors) {
      Object.assign(nextErrors, touchErrors(errors));
    }

    if (forceInitialState) {
      Object.assign(nextErrors, touchInitial(errors));
    }
    await Promise.all(
      Object.entries(form).map(async (entry) => {
        if (
          nextErrors[entry[0]].dirty &&
          (entry[1] ? entry[1].type === "id" : true)
        ) {
          const message = idValidator(
            entry[1].value,
            idDuplicated,
            entry[1].label
          );
          nextErrors[entry[0]].error = !!message;
          nextErrors[entry[0]].message = message;
          if (!!message) isValid = false;
        }

        if (
          nextErrors[entry[0]].dirty &&
          (entry[1] ? entry[1].type === "name" : true)
        ) {
          const message = nameValidator(entry[1].value, entry[1].label);
          nextErrors[entry[0]].error = !!message;
          nextErrors[entry[0]].message = message;
          if (!!message) isValid = false;
        }

        if (
          nextErrors[entry[0]].dirty &&
          (entry[1] ? entry[1].type === "description" : true)
        ) {
          const message = descriptionValidator(entry[1].value, entry[1].label);
          nextErrors[entry[0]].error = !!message;
          nextErrors[entry[0]].message = message;
          if (!!message) isValid = false;
        }

        if (
          nextErrors[entry[0]].dirty &&
          (entry[1] ? entry[1].type === "logo" : true)
        ) {
          const message = logoValidator(entry[1].value, entry[1].label);
          nextErrors[entry[0]].error = !!message;
          nextErrors[entry[0]].message = message;
          if (!!message) isValid = false;
        }

        if (
          nextErrors[entry[0]].dirty &&
          (entry[1] ? entry[1].type === "date_release" : true)
        ) {
          const message = dateReleaseValidator(entry[1].value, entry[1].label);
          nextErrors[entry[0]].error = !!message;
          nextErrors[entry[0]].message = message;
          if (!!message) isValid = false;
        }

        if (
          nextErrors[entry[0]].dirty &&
          (entry[1] ? entry[1].type === "date_revision" : true)
        ) {
          const message = dateRevisionValidator(
            entry[1].value,
            form,
            entry[1].label
          );
          nextErrors[entry[0]].error = !!message;
          nextErrors[entry[0]].message = message;
          if (!!message) isValid = false;
        }
      })
    );

    setErrors(nextErrors);

    return {
      isValid,
      errors: nextErrors,
    };
  };

  const onBlurField = (e) => {
    const field = e.target.name;
    const fieldError = errors[field];
    if (fieldError.dirty) return;

    const updatedErrors = {
      ...errors,
      [field]: {
        ...errors[field],
        dirty: true,
      },
    };

    validateForm({ form, field, errors: updatedErrors });
  };

  return {
    validateForm,
    onBlurField,
    errors,
  };
};
