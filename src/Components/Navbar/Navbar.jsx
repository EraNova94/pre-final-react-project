import { Box, Container } from "@mui/system";
import React from "react";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Menu from "../Navbar/Menu";
import { useState } from "react";

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);
  const items = [
    { value: "РАСПИСАНИЕ ФИЛЬМОВ", href: "/schedule" },
    { value: "КИНОТЕАТР", href: "/about" },
    { value: "СНЕК-БАР", href: "/snackBar" },
    { value: "КОНТАКТЫ", href: "/contacts" },
  ];
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
          py="50px"
          width="100%"
          height="70px">
          <Box sx={{ cursor: "pointer" }}>
            <Link to="/">
              <img
                id="logo-main"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx_TvL_5pTq_HgIn3d8utu4bW1JMtjL4SKdg&usqp=CAU"
                width="200px"
                height="60px"
                alt="logo"
              />
            </Link>
          </Box>
          <Box
            sx={{
              width: "55%",
            }}>
            <Box
              className="navbar-btns"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                fontFamily: "Roboto",
                padding: "0",
                textDecoration: "none",
              }}>
              <Link to="/schedule" className="nav-link-btn">
                РАСПИСАНИЕ ФИЛЬМОВ
              </Link>
              <Link to="/about" className="nav-link-btn">
                КИНОТЕАТР
              </Link>
              <Link to="/snackBar" className="nav-link-btn">
                СНЕК-БАР
              </Link>
              <Link to="contacts" className="nav-link-btn">
                КОНТАКТЫ
              </Link>
              <Box>
                <AdminPanelSettingsIcon
                  color="warning"
                  fontSize="large"
                  sx={{ cursor: "pointer" }}
                />
              </Box>
            </Box>
          </Box>
          <Box
            className="burger-btn"
            onClick={() => setMenuActive(!menuActive)}>
            <span />
          </Box>
        </Grid>
      </Container>
      <Menu active={menuActive} items={items} />
    </Box>
  );
};

export default Navbar;
