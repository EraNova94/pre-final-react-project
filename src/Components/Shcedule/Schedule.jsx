import { Box, Container, Grid, Paper, TextField } from "@mui/material";
import React, { Fragment } from "react";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import DescriptionIcon from "@mui/icons-material/Description";
import ShopTwoIcon from "@mui/icons-material/ShopTwo";
import SearchIcon from "@mui/icons-material/Search";
import "./Schedule.css";
import { useContext } from "react";
import { productContext } from "../../Context/ProductContextProvider";
import { useEffect } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const Schedule = () => {
  const { productsArr, readProduct } = useContext(productContext);
  console.log(productsArr);
  useEffect(() => {
    readProduct();
  }, []);
  return (
    <Grid className="schedule__block" mt={20}>
      <Container maxWidth={"lg"}>
        <Grid
          bgcolor="white"
          display="flex"
          justifyContent="space-between"
          borderRadius="10px"
          px="10px">
          <h2 className="main__title">Сегодня в кино</h2>
          <Box>
            <FormControl color="error" size="medium" variant="filled">
              <FormLabel id="demo-row-radio-buttons-group-label">
                Жанры
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group">
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                />
                <FormControlLabel
                  value="disabled"
                  control={<Radio />}
                  label="other"
                />
              </RadioGroup>
            </FormControl>
          </Box>
          <Box display="flex" alignItems="center">
            <TextField
              variant="outlined"
              label="Поиск"
              size="small"
              color="primary"
            />
            <SearchIcon />
          </Box>
        </Grid>
        <Paper
          sx={{
            backgroundColor: "rgb(18,18,18)",
            color: "white",
            fontFamily: "Roboto",
            fontWeight: "700",
          }}>
          <Grid
            display="flex"
            alignItems="center"
            flexWrap="wrap"
            width="100%"
            className="schedule__side">
            {productsArr
              ? productsArr.map(elem => (
                  <Fragment key={elem.id}>
                    <Box
                      className="schedule__left"
                      display="flex"
                      alignItems="center">
                      <Box width="60%" padding="20px">
                        <img
                          style={{
                            width: "250px",
                            height: "400px",
                            borderRadius: "8px",
                          }}
                          src={elem.image}
                          alt="img"
                        />
                      </Box>
                      <Box
                        width="40%"
                        height="88%"
                        display="flex"
                        flexDirection="column"
                        gap="20px"
                        padding="5px">
                        <Box fontSize="18px">
                          <span>{elem.title}</span>
                        </Box>
                        <Box display="flex" alignItems="center" gap="8px">
                          <LiveTvIcon color="error" fontSize="large" />
                          <span>Трейлер</span>
                        </Box>
                        <Box display="flex" alignItems="center" gap="8px">
                          <DescriptionIcon color="warning" fontSize="large" />
                          <span>Описание</span>
                        </Box>
                        <Box display="flex" alignItems="center" gap="8px">
                          <ShopTwoIcon color="error" fontSize="large" />
                          <span>Купить билет</span>
                        </Box>
                      </Box>
                    </Box>
                    <Box
                      className="schedule__right"
                      height="100%"
                      width="55%"
                      border="2px solid grey">
                      <Box
                        className="time__title"
                        display="flex"
                        justifyContent="space-between"
                        px="40px">
                        <span>Время</span>
                        <span>Зал</span>
                        <span>Цена</span>
                      </Box>
                      <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        padding="10px">
                        <Box>
                          <span>{elem.time}</span>
                        </Box>
                        <Box>
                          <span>{elem.zone}</span>
                        </Box>
                        <Box display="flex" flexDirection="column" gap="5px">
                          <span>{`Детский-${elem.kidPrice} сом`}</span>
                          <span>{`Студенческий-${elem.studentPrice}Сом`}</span>
                          <span>{`Взрослый-${elem.adultPrice}`}</span>
                          <span>{`VIP-${elem.vipPrice}`}</span>
                        </Box>
                      </Box>
                      <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        padding="10px">
                        <Box>
                          <span>{elem.time2}</span>
                        </Box>
                        <Box>
                          <span>{elem.zone2}</span>
                        </Box>
                        <Box display="flex" flexDirection="column" gap="5px">
                          <span>{`Детский-${elem.kidPrice} сом`}</span>
                          <span>{`Студенческий-${elem.studentPrice}Сом`}</span>
                          <span>{`Взрослый-${elem.adultPrice}`}</span>
                          <span>{`VIP-${elem.vipPrice}`}</span>
                        </Box>
                      </Box>
                      <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        padding="10px">
                        <Box>
                          <span>{elem.time3}</span>
                        </Box>
                        <Box>
                          <span>{elem.zone3}</span>
                        </Box>
                        <Box display="flex" flexDirection="column" gap="5px">
                          <span>{`Детский-${elem.kidPrice} сом`}</span>
                          <span>{`Студенческий- ${elem.studentPrice} Сом`}</span>
                          <span>{`Взрослый-${elem.adultPrice}`}</span>
                          <span>{`VIP-${elem.vipPrice}`}</span>
                        </Box>
                      </Box>
                    </Box>
                  </Fragment>
                ))
              : null}
          </Grid>
        </Paper>
      </Container>
    </Grid>
  );
};

export default Schedule;
