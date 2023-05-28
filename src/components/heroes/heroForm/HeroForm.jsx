import { addHero, updateHero } from "../../../redux/heroes/operations";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
import {
  AddHeroBtn,
  AddImgIcon,
  AddImgInput,
  AddImgLabel,
  Alert,
  Form,
  InfoSpan,
  Input,
  Label,
  TextArea,
} from "./heroForm.styled";
import "react-toastify/dist/ReactToastify.css";

export const HeroForm = ({ onClose, fieldName = null, value = null }) => {
  const { id } = useParams();
  const [formErrors, setFormErrors] = useState({});
  const [formValues, setFormValues] = useState({
    nickname: "",
    real_name: "",
    origin_description: "",
    superpowers: "",
    catch_phrase: "",
    Images: [],
  });

  const dispatch = useDispatch();

  const formValidation = () => {
    const errors = {};
    const emptyField = "Field is required and can't be empty";

    if (!formValues.nickname) {
      errors.nickname = emptyField;
    }

    if (!formValues.real_name) {
      errors.real_name = emptyField;
    }

    if (!formValues.origin_description) {
      errors.origin_description = emptyField;
    }

    if (!formValues.superpowers) {
      errors.superpowers = emptyField;
    }

    if (!formValues.catch_phrase) {
      errors.catch_phrase = emptyField;
    }

    if (formValues.Images && formValues.Images.length < 1) {
      errors.Images = "Please add at least 1 hero image";
    }

    return errors;
  };

  const handleOnChange = (e) => {
    if (e.target.name === "Images") {
      const selectedFiles = Array.from(e.target.files);
      setFormValues({ ...formValues, Images: selectedFiles });
    } else {
      setFormValues({ ...formValues, [e.target.name]: e.target.value });
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData();
    const errors = formValidation();
    if (Object.keys(errors).length === 0) {
      const addImgToFormData = () => {
        for (let i = 0; i < formValues.Images.length; i++) {
          formData.append(`Images`, formValues.Images[i]);
        }
      };

      if (!fieldName) {
        formData.append("nickname", formValues.nickname);
        formData.append("real_name", formValues.real_name);
        formData.append("origin_description", formValues.origin_description);
        formData.append("superpowers", formValues.superpowers);
        formData.append("catch_phrase", formValues.catch_phrase);

        addImgToFormData();
        dispatch(addHero(formData));
      } else {
        fieldName === "Images"
          ? addImgToFormData()
          : formData.append(fieldName, formValues[fieldName]);
        dispatch(updateHero({ id, data: formData }));
      }

      form.reset();
      onClose();
    } else {
      setFormErrors(errors);
      if (errors.Images) toast.error(errors.Images);
    }
  };

  const renderField = (fieldName) => {
    switch (fieldName) {
      case "nickname":
        return (
          <Label>
            Nickname
            <Input
              type="text"
              name="nickname"
              value={formValues[fieldName]}
              onChange={handleOnChange}
            />
            <Alert>{formErrors.nickname}</Alert>
          </Label>
        );
      case "real_name":
        return (
          <Label>
            Real name
            <Input
              type="text"
              name="real_name"
              value={formValues[fieldName]}
              onChange={handleOnChange}
            />
            <Alert>{formErrors.real_name}</Alert>
          </Label>
        );
      case "origin_description":
        return (
          <Label>
            Origin description
            <TextArea
              type="text"
              name="origin_description"
              value={formValues[fieldName]}
              onChange={handleOnChange}
            />
            <Alert>{formErrors.origin_description}</Alert>
          </Label>
        );
      case "superpowers":
        return (
          <Label>
            Superpowers
            <TextArea
              type="text"
              name="superpowers"
              value={formValues[fieldName]}
              onChange={handleOnChange}
            />
            <InfoSpan>
              *Each superpower should be separeted by coma and space
            </InfoSpan>
            <Alert>{formErrors.superpowers}</Alert>
          </Label>
        );
      case "catch_phrase":
        return (
          <Label>
            Catch phrase
            <TextArea
              type="text"
              name="catch_phrase"
              value={formValues[fieldName]}
              onChange={handleOnChange}
            />
            <Alert>{formErrors.catch_phrase}</Alert>
          </Label>
        );
      case "Images":
        return (
          <AddImgLabel htmlFor="heroImagesInput">
            Click to add hero images
            <AddImgInput
              id="heroImagesInput"
              type="file"
              accept=".jpg,.jpeg,.png"
              name="Images"
              multiple
              onChange={handleOnChange}
            />
            <AddImgIcon />
          </AddImgLabel>
        );

      default:
        return null;
    }
  };

  useEffect(() => {
    if (fieldName) setFormValues({ [fieldName]: value });
    console.log(value);
  }, [fieldName, value]);

  return (
    <>
      <Form encType="multipart/form-data" onSubmit={(e) => handleFormSubmit(e)}>
        {!fieldName ? (
          <>
            <Label>
              Nickname
              <Input
                type="text"
                name="nickname"
                value={formValues.nickname}
                onChange={handleOnChange}
              />
              {formErrors.nickname && <Alert>{formErrors.nickname}</Alert>}
            </Label>
            <Label>
              Real name
              <Input
                type="text"
                name="real_name"
                value={formValues.real_name}
                onChange={handleOnChange}
              />
              {formErrors.real_name && <Alert>{formErrors.real_name}</Alert>}
            </Label>
            <Label>
              Origin description
              <TextArea
                type="text"
                name="origin_description"
                value={formValues.origin_description}
                onChange={handleOnChange}
              />
              {formErrors.origin_description && (
                <Alert>{formErrors.origin_description}</Alert>
              )}
            </Label>
            <Label>
              Superpowers
              <TextArea
                type="text"
                name="superpowers"
                value={formValues.superpowers}
                onChange={handleOnChange}
              />
              <InfoSpan>
                *Each superpower should be separeted by coma and space
              </InfoSpan>
              {formErrors.superpowers && (
                <Alert>{formErrors.superpowers}</Alert>
              )}
            </Label>
            <Label>
              Catch phrase
              <TextArea
                type="text"
                name="catch_phrase"
                value={formValues.catch_phrase}
                onChange={handleOnChange}
              />
              {formErrors.catch_phrase && (
                <Alert>{formErrors.catch_phrase}</Alert>
              )}
            </Label>
            <AddImgLabel htmlFor="heroImagesInput">
              Click to add hero images
              <AddImgInput
                id="heroImagesInput"
                type="file"
                accept=".jpg,.jpeg,.png"
                name="Images"
                multiple
                onChange={handleOnChange}
              />
              <AddImgIcon />
            </AddImgLabel>
          </>
        ) : (
          renderField(fieldName)
        )}
        <AddHeroBtn type="submit">
          {!fieldName ? "Add Hero" : "Submit"}
        </AddHeroBtn>
      </Form>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};
