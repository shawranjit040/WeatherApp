import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const apiKey = "f56f24967aaf51182d1d4df628297c6d";
  
  const [inputCity, setInputCity] = useState("");
  const [data, setData] = useState({});

  const getWeatherDetails = (cityName) => {
    if (!cityName) return;
    const apiUrl =
       "https://api.openweathermap.org/data/2.5/weather?q=" 
       +
      cityName +
      "&appid=" +
      apiKey;
    axios
      .get(apiUrl)
      .then((res) => {
        console.log("response", res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
  const handleChangeInput = (e) => {
    console.log("value", e.target.value);
    setInputCity(e.target.value);
  };

  const handleSearch = () => {
    getWeatherDetails(inputCity);
  };

  //  useEffect(() => {
  //   getWeatherDetails("damoh")
  //  })

  return (
    <div className="col-md-12">
      <div className="wetherBg">
        <h1 className="heading"> Weather App </h1>
        <div className="d-grid gap-3 col-4 mt-4">
          <input
            type="text"
            className="form-control"
            value={inputCity}
            onChange={handleChangeInput}
          />
          <button
            className="btn btn-primary"
            type="button"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
       {/* {Object.keys(data).length > 0 &&  */}
        <div className="col-md-12 text-center mt-5">
          <div className="shadow rounded wetherResultBox">
            <img
              className="wetherIcon"
              src="https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-512.png "
            />

            <h5 className="wetherCity">{data?.name}</h5>
            <h6 className="wetherTemperature">
              {(data?.main?.temp - 276.15).toFixed()}°C
            </h6>
          </div>
        </div>

    </div>
  );
}

export default App;
