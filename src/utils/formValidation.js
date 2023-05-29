export const formValidation = (formValues) => {
  const errors = {};
  const emptyField = "*Field is required and can't be empty";
  const wrongSymbolType =
    "*Field can only contain Latin letters, Arabic numbers, and spaces";
  const regex = /^[a-zA-Z0-9\s!@#$%^&*()-=_+{}[\]|:;"'<>,.?/]+$/;

  if (formValues.nickname === "") {
    errors.nickname = emptyField;
  } else {
    if (!regex.test(formValues.nickname)) {
      errors.nickname = wrongSymbolType;
    }
  }

  if (formValues.real_name === "") {
    errors.real_name = emptyField;
  } else {
    if (!regex.test(formValues.real_name)) {
      errors.real_name = wrongSymbolType;
    }
  }

  if (formValues.origin_description === "") {
    errors.origin_description = emptyField;
  } else {
    if (!regex.test(formValues.origin_description)) {
      errors.origin_description = wrongSymbolType;
    }
  }

  if (formValues.superpowers === "") {
    errors.superpowers = emptyField;
  } else {
    if (!regex.test(formValues.superpowers)) {
      errors.superpowers = wrongSymbolType;
    }
  }

  if (formValues.catch_phrase === "") {
    errors.catch_phrase = emptyField;
  } else {
    if (!regex.test(formValues.catch_phrase)) {
      errors.catch_phrase = wrongSymbolType;
    }
  }

  if (formValues.Images && formValues.Images.length < 1) {
    errors.Images = "Please add at least 1 hero image";
  }

  return errors;
};
