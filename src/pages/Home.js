import React from "react";
import { Box, styled } from "@mui/material";
import { useState } from "react";
import redsky from "../Image/redsky.jpg";
import Form from "../component/Form";
import Information from "../component/Information";
import cloud from "../gif/cloud.gif";

const Component = styled(Box)({
  height: "100vh",
  display: "flex",
  alignItems: "center",
  width: "65%",
  margin: "0 auto",
});
const Image = styled(Box)({
  backgroundImage: ` url(${redsky})`, // Use both images, with the transparent GIF as the first layer
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundBlendMode: "overlay", // Blend the two backgrounds
  borderRadius: "20px 0 0 20px",
  width: "30%",
  height: "80%",
});
const Image2 = styled(Box)({
  backgroundImage: `url(${cloud})`, // Use both images, with the transparent GIF as the first layer
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundBlendMode: "overlay", // Blend the two backgrounds

  width: "100%",
  height: "100%",
});
const Home = () => {
  const [result, setResult] = useState({});

  return (
    <Image2>
      <Component>
        <Image />
        <Box style={{ width: "70%", height: "80%" }}>
          <Form setResult={setResult} />
          <Information result={result} />
        </Box>
      </Component>
    </Image2>
  );
};

export default Home;
