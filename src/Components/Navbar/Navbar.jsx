import { Box, Container } from "@mui/system";
import React from "react";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <Box
      sx={{
        backgroundColor: "rgba(0, 0, 0, 0.712)",
        position: "fixed",
        top: "0",
        width: "100%",
        zIndex: "2",
      }}>
      <Container maxWidth="lg">
        <Grid
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          pt={2}
          width="100%"
          height="70px">
          <Box sx={{ cursor: "pointer" }}>
            <Link to="/">
              <img
                src="https://cdn.cdnlogo.com/logos/g/99/general-cinema.svg"
                width="90px"
                height="60px"
                alt="logo"
              />
            </Link>
          </Box>
          <Box
            sx={{
              width: "55%",
            }}>
            <ul
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontFamily: "roboto",
                cursor: "pointer",
                padding: "0",
                listStyleType: "none",
                textDecoration: "none",
              }}>
              <Link to="/schedule">РАСПИСАНИЕ ФИЛЬМОВ</Link>
              <Link to="/about">КИНОТЕАТР</Link>
              <Link to="/snackBar">СНЕК-БАР</Link>
              <Link to="contacts">КОНТАКТЫ</Link>
            </ul>
          </Box>
          <Box>
            <AdminPanelSettingsIcon
              color="warning"
              fontSize="large"
              sx={{ cursor: "pointer" }}
            />
          </Box>
        </Grid>
      </Container>
    </Box>
  );
};

export default Navbar;
