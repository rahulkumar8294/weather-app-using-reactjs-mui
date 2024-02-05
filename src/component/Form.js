import styled from "@emotion/styled";
import { Box, InputBase, Button } from "@mui/material";
import React, { useState } from "react";

import GetWeather from "../services/GetWeather";

const Container = styled(Box)({
  backgroundColor: "#445A6F",
  padding: 10,
  fontSize: 18,
  marginRight: 20,
});
const Getbutton = styled(Button)({
  backgroundColor: "#e67e22",
});
const Input = styled(InputBase)({
  color: "#FFF",
});
const Form = ({ setResult }) => {
  const [data, setData] = useState({ city: "", country: "" });
  

  const handleOnchange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const getWeatherInfo = async () => {
    let response = await GetWeather(data.city, data.country);
    setResult(response);
  };

  return (
    <Container style={{ display: "flex" }}>
      <Input
        placeholder="City"
        onChange={(e) => handleOnchange(e)}
        name="city"
      />
      <Input
        placeholder="country"
        onChange={(e) => handleOnchange(e)}
        name="country"
      />
      <Getbutton
        variant="contained"
        style={{ width: "30%" }}
        onClick={() => getWeatherInfo()}
      >
        Get Weather
      </Getbutton>
    </Container>
  );
};

export default Form;
