import { useState } from "react";
import {
  AddHeroBtn,
  AddImgIcon,
  AddImgInput,
  AddImgLabel,
  Form,
  Input,
  Label,
  TextArea,
} from "./heroForm.styled";
import { addHero, updateHero } from "../../../redux/heroes/operations";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

export const HeroForm = ({ onClose, fieldName = null, value = null }) => {
  const { id } = useParams();
  const [formValues, setFormValues] = useState({
    [fieldName]: value,
  });
  const dispatch = useDispatch();

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

  return (
    <Form encType="multipart/form-data" onSubmit={(e) => handleFormSubmit(e)}>
      {!fieldName ? (
        <>
          <Label>
            Nickname
            <Input type="text" name="nickname" onChange={handleOnChange} />
          </Label>
          <Label>
            Real name
            <Input type="text" name="real_name" onChange={handleOnChange} />
          </Label>
          <Label>
            Origin description
            <TextArea
              type="text"
              name="origin_description"
              onChange={handleOnChange}
            />
          </Label>
          <Label>
            Superpowers
            <TextArea
              type="text"
              name="superpowers"
              onChange={handleOnChange}
            />
          </Label>
          <Label>
            Catch phrase
            <TextArea
              type="text"
              name="catch_phrase"
              onChange={handleOnChange}
            />
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
  );
};
