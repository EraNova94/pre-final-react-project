import React, { useContext, useEffect, useState } from "react";
import { productContext } from "../../../Context/ProductContextProvider";
import { useParams, useNavigate } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

  useEffect(() => {
    setInpValues(oneProduct);
  }, [oneProduct]);

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
    if (
      !inpValues.showDay.trim() ||
      !inpValues.title.trim() ||
      !inpValues.ageLimit.trim() ||
      !inpValues.image.trim()
    ) {
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
    editProduct(id, inpValues);
    navigate("/");
  }
  return (
    <>
      {inpValues ? (
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
            Внести изменения
          </p>
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
      ) : (
        <>loading...</>
      )}
    </>
  );
};

export default EditProducts;
