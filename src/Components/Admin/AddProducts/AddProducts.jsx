import { Button, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { productContext } from "../../../Context/ProductContextProvider";
import "./AddProducts.css";
import "react-toastify/dist/ReactToastify.css";

const AddProducts = () => {
  const { addProduct } = useContext(productContext);

  const [showDay, setShowDay] = useState("");
  const [title, setTitle] = useState("");
  const [ageLimit, setAgeLimit] = useState("");
  const [image, setImage] = useState("");

  function handleAdd(e) {
    e.preventDefault();
    if (!showDay.trim() || !title.trim() || !ageLimit.trim() || !image.trim()) {
      toast.warn("🦄 Заполните все поля", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    }
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
      <p
        style={{
          marginTop: "120px ",
          textAlign: "center",
          fontSize: "24px",
          fontWeight: "700",
          color: "darkblue",
          background: "white",
          width: "25%",
          display: "flex",
          justifyContent: "center",
          margin: "120px auto 0 auto",
          border: "1px solid gray",
          borderRadius: "4px",
        }}>
        Добавление фильмов
      </p>
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
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </form>
    </>
  );
};

export default AddProducts;
