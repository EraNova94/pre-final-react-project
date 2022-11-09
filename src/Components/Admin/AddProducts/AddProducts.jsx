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
  const [trailer, setTrailer] = useState("");
  const [description, setDescription] = useState("");
  const [time, setTime] = useState("");
  const [zone, setZone] = useState("");
  const [price, setPrice] = useState("");
  const [time2, setTime2] = useState("");
  const [zone2, setZone2] = useState("");
  const [price2, setPrice2] = useState("");
  const [time3, setTime3] = useState("");
  const [zone3, setZone3] = useState("");
  const [price3, setPrice3] = useState("");

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
      trailer,
      description,
      time,
      zone,
      price,
      time2,
      zone2,
      price2,
      time3,
      zone3,
      price3,
    };
    addProduct(obj);
    setShowDay("");
    setTitle("");
    setAgeLimit("");
    setImage("");
    setTrailer("");
    setDescription("");
    setTime("");
    setZone("");
    setPrice("");
    setTime2("");
    setZone2("");
    setPrice2("");
    setTime3("");
    setZone3("");
    setPrice3("");
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
        <TextField
          className="outlined-basic"
          label="Трэйлер"
          variant="outlined"
          value={trailer}
          onChange={e => setTrailer(e.target.value)}
        />
        <TextField
          className="outlined-basic"
          label="Описание"
          variant="outlined"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <TextField
          className="outlined-basic"
          label="Время показа"
          variant="outlined"
          value={time}
          onChange={e => setTime(e.target.value)}
        />
        <TextField
          className="outlined-basic"
          label="Зал"
          variant="outlined"
          value={zone}
          onChange={e => setZone(e.target.value)}
        />
        <TextField
          className="outlined-basic"
          label="Цена"
          variant="outlined"
          value={price}
          onChange={e => setPrice(e.target.value)}
        />
        <TextField
          className="outlined-basic"
          label="Время показа"
          variant="outlined"
          value={time2}
          onChange={e => setTime2(e.target.value)}
        />
        <TextField
          className="outlined-basic"
          label="Зал"
          variant="outlined"
          value={zone2}
          onChange={e => setZone2(e.target.value)}
        />
        <TextField
          className="outlined-basic"
          label="Цена"
          variant="outlined"
          value={price2}
          onChange={e => setPrice2(e.target.value)}
        />
        <TextField
          className="outlined-basic"
          label="Время показа"
          variant="outlined"
          value={time3}
          onChange={e => setTime3(e.target.value)}
        />
        <TextField
          className="outlined-basic"
          label="Зал"
          variant="outlined"
          value={zone3}
          onChange={e => setZone3(e.target.value)}
        />
        <TextField
          className="outlined-basic"
          label="Цена"
          variant="outlined"
          value={price3}
          onChange={e => setPrice3(e.target.value)}
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
