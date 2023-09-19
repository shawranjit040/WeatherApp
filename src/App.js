import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const apiKey = 'b7c0431351mshf1efdaeeee8ffc5p175f36jsn2eb1f570f414';
  const apiUrl = "https://open-weather13.p.rapidapi.com/city/landon";

  const [inputCity, setInputCity] = useState("");
  const [data, setData] = useState({});

  const getWeatherDetails = (cityName) => {
    if (!cityName) return;

    const options = {
      method: 'GET',
      url: apiUrl,
      headers: {
        'X-RapidAPI-Key': apiKey,
        'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
      },
    };

    axios
      .request(options)
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
