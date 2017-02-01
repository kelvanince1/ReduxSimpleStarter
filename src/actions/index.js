import axios from 'axios';

const API_KEY = 'cc3043fd570d1f24b39ff4e6b230e0ea';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city}, us`;
  const request = axios.get(url);
  // The const request illustate a promise in Redux. The promise does not contain any data itself, it simply carries the date of the axios call, which in this case is the url with the particular city that the user inputs.

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
