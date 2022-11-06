import React, { useContext, useEffect, useState } from "react";
import { productContext } from "../../../Context/ProductContextProvider";
import { useParams, useNavigate } from "react-router-dom";
import { Button, TextField } from "@mui/material";

const EditProducts = () => {
  const { readOneProduct, editProduct, oneProduct } =
    useContext(productContext);
  // console.log(oneProduct);
  const [inpValues, setInpValues] = useState(oneProduct);
  console.log(inpValues);
  const { id } = useParams();
  // console.log(id);
  useEffect(() => {
    readOneProduct(id);
  }, [id]);

  function handleChange(e) {
    let obj = {
      ...inpValues,
      [e.target.name]: e.target.value,
    };
    setInpValues(obj);
  }
  const navigate = useNavigate();

  function handleSave(e) {
    e.preventDefault();
    editProduct(id, inpValues);
    navigate("/");
  }
  return (
    <>
      <h2 style={{ marginTop: "100px ", textAlign: "center" }}>
        Внести изменения
      </h2>
      <form onSubmit={e => handleSave(e)} id="add-form">
        <TextField
          className="outlined-basic"
          label="День показа"
          variant="outlined"
          name="showDay"
          value={inpValues.showDay}
          onChange={e => handleChange(e)}
        />
        <TextField
          className="outlined-basic"
          label="Название"
          variant="outlined"
          name="title"
          value={inpValues.title}
          onChange={e => handleChange(e)}
        />
        <TextField
          className="outlined-basic"
          label="Возрастное огр-е"
          variant="outlined"
          name="ageLimit"
          value={inpValues.ageLimit}
          onChange={e => handleChange(e)}
        />
        <TextField
          className="outlined-basic"
          label="Фото"
          variant="outlined"
          name="image"
          value={inpValues.image}
          onChange={e => handleChange(e)}
        />
        <Button variant="contained" type="submit">
          Сохранить изменения
        </Button>
      </form>
    </>
  );
};

export default EditProducts;
