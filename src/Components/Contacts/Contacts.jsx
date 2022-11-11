import { Box, Grid, Paper } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

const Contacts = () => {
  return (
    <Grid mt={20}>
      <Container>
        <Paper sx={{ textAlign: "center" }}>
          <Box>
            <h2>г.Бишке ул. Разакова-8</h2>
            <h2>Телефон: (0312) 8-38-38 / 0554123654 / 0771123654</h2>
            <h2>Эл. почта: metr@politan.kg</h2>
          </Box>
          <Box width="100%">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4976.655248889852!2d74.586891566588!3d42.86979803779486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2skg!4v1667991808832!5m2!1sru!2skg"
              width="90%"
              height="450"
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"></iframe>
          </Box>
        </Paper>
      </Container>
    </Grid>
  );
};

export default Contacts;
