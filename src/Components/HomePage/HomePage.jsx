import { Box, Container, Grid } from "@mui/material";
import React from "react";
import { Navigation, Autoplay } from "swiper";
import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/bundle";
import "swiper/css/autoplay";

const HomePage = () => {
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
          display="flex"
          justifyContent="space-evenly"
          width="100%"
          margin="0 auto"
          fontSize="24px"
          mt="40px"
          bgcolor="rgba(0, 0, 0, 0.7)"
          borderRadius="12px">
          <Link href="#">
            <button value="all">Афиша</button>
          </Link>
          <Link href="#">
            <button value="todayAtTheCinema">Сегодня в кино</button>
          </Link>
          <Link href="#">
            <button value="comingSoon">Скоро в кино</button>
          </Link>
        </Grid>
        <Grid mt={1}>
          <Box>
            <img
              src="https://cinematica.kg/uploads/movies/554ece24-4948-45be-b1a6-ef56b1ad6262.png/300/430"
              alt=""
              style={{ borderRadius: "12px", width: "15%" }}
            />
            <Box
              sx={{
                color: "white",
                position: "relative",
                bottom: "54px",
                fontSize: "16px",
                fontFamily: "Roboto",
                width: "15%",
                display: "grid",
                alignItems: "center",
                textAlign: "center",
                backgroundColor: "#02558B",
                height: "50px",
                borderRadius: "12px 0",
              }}>
              <span>Аяш-2</span>
              <span>(12+)</span>
            </Box>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
};

export default HomePage;
