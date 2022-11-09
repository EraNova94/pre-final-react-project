import { Box, Container, Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const Footer = () => {
  return (
    <Grid bgcolor="rgb(0.1,0.1,0.1)" height="100%" mt="80px">
      <Container maxWidth="lg">
        <Grid
          mt="40px"
          py="20px"
          height="100%"
          width="100%"
          display="flex"
          justifyContent="space-between"
          flexWrap="wrap"
          px="20px"
          // margin="0 auto"
          sx={{
            fontSize: "18px",
            fontWeight: "700",
            fontFamily: "Roboto",
          }}>
          <Box
            height="100%"
            display="flex"
            flexDirection="column"
            gap="15px"
            px="20px"
            pt="10px">
            <Link>Правила посещения</Link>
            <Link>Акции</Link>
            <Link>Вакансии</Link>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            gap="15px"
            px="20px"
            pt="10px">
            <Link>Сотрудничество</Link>
            <Link>О нас</Link>
            <Link>Контакты</Link>
          </Box>
          <Box display="flex" flexDirection="column" px="20px" pt="10px">
            <span
              style={{
                color: "white",
                fontSize: "18px",
                paddingBottom: "5px",
              }}>
              Мы в соц. сетях
            </span>
            <Box display="flex" width="100%" gap="5px">
              <FacebookIcon color="primary" fontSize="large" />
              <InstagramIcon color="warning" fontSize="large" />
              <LinkedInIcon color="primary" fontSize="large" />
              <YouTubeIcon color="error" fontSize="large" />
            </Box>
            <span
              style={{ color: "white", fontSize: "12px", marginTop: "5px" }}>
              Все права защищены
            </span>
            <span style={{ color: "white", fontSize: "12px" }}>
              © 2022 TASMA
            </span>
          </Box>
        </Grid>
      </Container>
    </Grid>
  );
};

export default Footer;
