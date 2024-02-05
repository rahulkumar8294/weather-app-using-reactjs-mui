const GetWeather = async (city, country) => {
  const API_KEY = "560a907900a584f96add88af454e7a61";
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  try {
    let response = await fetch(
      `${API_URL}?q=${city},${country}&appid=${API_KEY}&units=metric`
    );

    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error while calling api", error.message);
    return error.message;
  }
};

export default GetWeather;
