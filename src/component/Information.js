import { Box, Typography } from "@mui/material";
import React from "react";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import DehazeIcon from "@mui/icons-material/Dehaze";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import OpacityIcon from "@mui/icons-material/Opacity";
import WbCloudyIcon from "@mui/icons-material/WbCloudy";
import Brightness6Icon from "@mui/icons-material/Brightness6";

const Information = ({ result }) => {
  return result && Object.keys(result).length > 0 ? (
    <Box>
      <Typography variant="h6" sx={{ m: 2 }}>
        <LocationOnIcon />
        Location: {result.name},{result.sys.country}
      </Typography>
      <Typography variant="h6" sx={{ m: 2 }}>
        <ThermostatIcon />
        Temperature: {result.main.temp}
      </Typography>
      <Typography variant="h6" sx={{ m: 2 }}>
        <OpacityIcon />
        Humidity: {result.main.humidity}
      </Typography>
      <Typography variant="h6" sx={{ m: 2 }}>
        <WbSunnyIcon />
        SunRaise Time:
        {new Date(result.sys.sunrise * 1000).toLocaleTimeString()}
      </Typography>
      <Typography variant="h6" sx={{ m: 2 }}>
        <Brightness6Icon />
        SunSet Time: {new Date(result.sys.sunset * 1000).toLocaleTimeString()}
      </Typography>
      <Typography variant="h6" sx={{ m: 2 }}>
        <DehazeIcon />
        Weather: {result.weather[0].main}
      </Typography>
      <Typography variant="h6" sx={{ m: 2 }}>
        <WbCloudyIcon />
        Cloud: {result.clouds.all}%
      </Typography>
    </Box>
  ) : null;
};

export default Information;
