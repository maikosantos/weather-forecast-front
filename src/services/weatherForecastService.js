import axios from "./BaseService";

const API_URL = import.meta.env.VITE_REACT_APP_API_URL;

export async function getWeatherForecast({
  houseAndStreet,
  city,
  state,
  zipCode,
}) {
  const url = `${API_URL}/weatherforecast`;
  const headers = { "Content-Type": "application/json" };
  const response = await axios.post(
    url,
    {
      Street: houseAndStreet,
      City: city,
      StateAbbreviation: state,
      ZipCode: zipCode,
    },
    { headers }
  );
  return response.data;
}
