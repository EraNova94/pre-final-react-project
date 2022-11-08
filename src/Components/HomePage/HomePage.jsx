import { Box, Button, Container, Grid, Pagination } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Navigation, Autoplay } from "swiper";
import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";
import { Link, useSearchParams } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/bundle";
import "swiper/css/autoplay";
import { useContext } from "react";
import { productContext } from "../../Context/ProductContextProvider";

const HomePage = () => {
  const { productsArr, readProduct, deleteProduct, pageTotalCount } =
    useContext(productContext);
  const [showDay, setShowDay] = useState("all");
  const [paramSearch, setParamsearch] = useSearchParams();
  const [page, setPage] = useState(1);
  // console.log(paramSearch);
  // console.log(showDay);
  useEffect(() => {
    if (showDay === "all") {
      setParamsearch({
        q: paramSearch.get("q") || "",
        _page: page,
        _limit: 4,
      });
    } else {
      setParamsearch({
        showDay: showDay,
        q: paramSearch.get("q") || "",
        _page: page,
        _limit: 4,
      });
    }
  }, [paramSearch, showDay, page]);
  useEffect(() => {
    readProduct();
  }, [paramSearch, pageTotalCount]);

  return (
    <Box sx={{ mt: "160px" }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            width: "100%",
            height: "50px",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            fontFamily: "roboto",
            color: "white",
            position: "relative",
            top: "50px",
            zIndex: "2",
          }}>
          <h2
            style={{
              margin: "0",
              padding: "0",
              textAlign: "center",
              paddingTop: "10px",
            }}>
            Скоро в кино
          </h2>
        </Box>
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={true}
          autoplay={true}
          className="my-swiper">
          <SwiperSlide>
            <img
              src="https://cinematica.kg/uploads/movies/d6d8c7e6-f8b5-415f-8fa8-6e7ec3ccb54c.jpg"
              alt="promo"
              width="100%"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://cinematica.kg/uploads/movies/cef42fd5-d6d9-4f85-a15d-72cc8e9ce6f6.jpg"
              alt="promo-2"
              width="100%"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://cinematica.kg/uploads/movies/bcee0f0d-445d-45d2-90d2-81125401c6bb.png"
              alt="promo-3"
              width="100%"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://cinematica.kg/uploads/movies/3bdd8cb8-d9a6-4349-bb2a-0d9a569fb38d.jpg"
              alt="promo-4"
              width="100%"
            />
          </SwiperSlide>
        </Swiper>
        <Grid
          width="100%"
          mt="40px"
          bgcolor="rgba(0, 0, 0, 0.7)"
          borderRadius="12px">
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              flexDirection: "row",
              flexWrap: "wrap",
            }}
            defaultValue="all"
            value={showDay}>
            <Link href="#">
              <button
                className="category__btn"
                value="all"
                onClick={e => setShowDay(e.target.value)}>
                Афиша
              </button>
            </Link>
            <Link href="#">
              <button
                className="category__btn"
                id="first"
                value="today"
                onClick={e => setShowDay(e.target.value)}>
                Сегодня в кино
              </button>
            </Link>
            <Link href="#">
              <button
                className="category__btn"
                id="second"
                value="comingSoon"
                onClick={e => setShowDay(e.target.value)}>
                Скоро в кино
              </button>
            </Link>
          </Box>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="flex-start"
          width="100%"
          mx="auto"
          my="40px">
          {productsArr
            ? productsArr.map(elem => (
                <Box key={elem.id} className="card">
                  <img
                    src={elem.image}
                    alt={elem.title}
                    style={{
                      borderRadius: "12px",
                      width: "240px",
                      height: "340px",
                    }}
                  />
                  <Box
                    width="100%"
                    height="35px"
                    bgcolor="rgb(24 64 213)"
                    color="white"
                    fontSize="18px"
                    fontFamily="Roboto"
                    fontWeight="700"
                    display="flex"
                    justifyContent="space-evenly"
                    alignItems="center"
                    position="relative"
                    bottom="39px"
                    borderRadius="22px 0 12px 0">
                    <span>{elem.title}</span>
                    <span>{elem.ageLimit}</span>
                  </Box>
                  <Box
                    mb="30px"
                    display="flex"
                    justifyContent="space-between"
                    width="100%">
                    <Link to={`/edit/${elem.id}`}>
                      <Button variant="contained" color="success">
                        Изменить
                      </Button>
                    </Link>
                    <Button
                      variant="contained"
                      color="error"
                      onClick={() => deleteProduct(elem.id)}>
                      Удалить
                    </Button>
                  </Box>
                </Box>
              ))
            : null}
        </Grid>
        <Grid
          width="100%"
          bgcolor="rgb(240,255,240)"
          border="1px solid black"
          borderRadius="7px">
          <Pagination
            count={pageTotalCount}
            variant="outlined"
            color="primary"
            page={page}
            onChange={(e, value) => setPage(value)}
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          />
        </Grid>
      </Container>
    </Box>
  );
};

export default HomePage;
