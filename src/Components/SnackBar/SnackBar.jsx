import { Box, Container, Grid, Paper } from "@mui/material";
import React from "react";

const SnackBar = () => {
  return (
    <Grid mt={20}>
      <Container maxWidth="lg">
        <Paper sx={{ backgroundColor: "white" }}>
          <Box display="flex" flexDirection="column" alignItems="center">
            <h2>СНЭК-БАР</h2>
          </Box>
          <Box width="100%" textAlign="center" margin="0 auto">
            <p style={{ fontSize: "20px", fontWeight: "500" }}>
              В нашем кинотеатре есть Кинобар, где можно приобрести напитки,
              свежие выпечки и вкусные попкорны разных вкусов - не только
              сладкий, но и карамельный, шоколадный и соленый, а также есть
              Комбо-наборы (Попкорн + Кола). И только у нас Вы сможете отведать
              уникальный в городе вкусный растворимый кофе приготовленный по
              технологии корейского производства.
            </p>
          </Box>
          <Box width="80%" margin="0 auto">
            <img
              src="http://www.kinobox.kg/upload/IMG_1072.jpg"
              alt="snack-bar-img"
              width="100%"
            />
          </Box>
        </Paper>
      </Container>
    </Grid>
  );
};

export default SnackBar;
