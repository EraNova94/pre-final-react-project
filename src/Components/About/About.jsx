import { Box, Grid, Paper } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

const About = () => {
  return (
    <Grid mt={20}>
      <Container maxWidth="lg">
        <Paper sx={{ backgroundColor: "white" }}>
          <Box display="flex" flexDirection="column" alignItems="center">
            <h2>О КИНОТЕАТРЕ</h2>
            <Box>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx_TvL_5pTq_HgIn3d8utu4bW1JMtjL4SKdg&usqp=CAU"
                alt="main-logo"
                width="100%"
              />
            </Box>
          </Box>
          <Box width="100%" textAlign="center" margin="0 auto">
            <p style={{ fontSize: "20px", fontWeight: "500" }}>
              Кинотеатр "Metropolitan" первый широкоэкранный кинотеатр в
              Советской Киргизии. Открыт в 1957 году. Демонстрировались
              советские и зарубежные художественные, а также
              хронико-документальные, научно-популярные и учебные кинофильмы.
              Кинотеатр Октябрь был реконструирован в 2005году. Было установлено
              современное звуковое оборудование Dolby Digital Surround. В
              кинотеатре работают три кинозала, рассчитанных на 255, 72 и 30
              мест. В Октябре также проходят ведущие кинофестивали города,
              представляющие картины из разных стран, включая Германию, Японию,
              Великобританию, Дни Франкофонии и многое другое. В кинотеатре
              открыт уютный кинобар с широким ассортиментом закусок и напитков,
              а холл оборудован удобными диванами, где можно скоротать время
              перед сеансом.
            </p>
          </Box>
          <Box width="80%" display="flex" margin="0 auto" flexWrap="wrap">
            <Box>
              <img
                src="http://www.kinobox.kg/upload/IMG_1069.jpg"
                alt="img"
                width="100%"
              />
              <img
                src="http://www.kinobox.kg/upload/IMG_1077.jpg"
                alt="img"
                width="100%"
              />
            </Box>
            <Box>
              <img
                src="http://www.kinobox.kg/upload/IMG_1070.jpg"
                alt="img"
                width="100%"
              />
              <img
                src="http://www.kinobox.kg/upload/IMG_1080.jpg"
                alt="img"
                width="100%"
              />
            </Box>
            <Box>
              <img
                src="http://www.kinobox.kg/upload/IMG_1082.jpg"
                alt="img"
                width="100%"
              />
              <img
                src="http://www.kinobox.kg/upload/IMG_1082.jpg"
                alt="img"
                width="100%"
              />
            </Box>
          </Box>
        </Paper>
      </Container>
    </Grid>
  );
};

export default About;
