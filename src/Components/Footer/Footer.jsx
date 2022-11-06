import { Box, Container, Grid } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Grid bgcolor="rgba(0,0,0,0.7)">
      <Container maxWidth="lg">
        <Box sx={{ color: "white", textAlign: "center" }}>
          <h2>Hello</h2>
        </Box>
      </Container>
    </Grid>
  );
};

export default Footer;
