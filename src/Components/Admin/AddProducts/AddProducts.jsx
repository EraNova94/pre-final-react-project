import { Button, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import { productContext } from "../../../Context/ProductContextProvider";
import "./AddProducts.css";

const AddProducts = () => {
  const { addProduct } = useContext(productContext);

  const [showDay, setShowDay] = useState("");
  const [title, setTitle] = useState("");
  const [ageLimit, setAgeLimit] = useState("");
  const [image, setImage] = useState("");

  function handleAdd(e) {
    e.preventDefault();
    let obj = {
      showDay,
      title,
      ageLimit,
      image,
    };
    addProduct(obj);
    setShowDay("");
    setTitle("");
    setAgeLimit("");
    setImage("");
  }
  return (
    <>
      <h2 style={{ marginTop: "100px ", textAlign: "center" }}>
        Добавление фильмов
      </h2>
      <form onSubmit={e => handleAdd(e)} id="add-form">
        <TextField
          className="outlined-basic"
          label="День показа"
          variant="outlined"
          value={showDay}
          onChange={e => setShowDay(e.target.value)}
        />
        <TextField
          className="outlined-basic"
          label="Название"
          variant="outlined"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <TextField
          className="outlined-basic"
          label="Возрастное огр-е"
          variant="outlined"
          value={ageLimit}
          onChange={e => setAgeLimit(e.target.value)}
        />
        <TextField
          className="outlined-basic"
          label="Фото"
          variant="outlined"
          value={image}
          onChange={e => setImage(e.target.value)}
        />
        <Button variant="contained" type="submit">
          Добавить
        </Button>
      </form>
    </>
  );
};

export default AddProducts;
