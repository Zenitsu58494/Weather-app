"use client";
import { useState, useEffect } from "react";
import { IoIosSearch } from "react-icons/io";
import Table from "./Table";
import { Corners } from "./components/Corners";

const API_KEY = "1031cbc6f72a4a88b6a72453241312";

export default function Home() {
  const [search, setSearch] = useState("");
  const [city, setCity] = useState("Ulaanbaatar");
  const [dayWeather, setDayWeather] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  const CitySuggestions = async (text) => {
    const response = await fetch(
      "https://countriesnow.space/api/v0.1/countries"
    );
    const data = await response.json();

    if (data) {
      const allCities = data.data.flatMap((country) => country.cities);
      const filteredCities = allCities.filter((cityName) =>
        cityName.startsWith(text)
      );
      setSuggestions(filteredCities.slice(0, 5));
    }
  };

  const onInputChange = (e) => {
    const value = e.target.value;
    setSearch(value);
    CitySuggestions(value);
  };

  const onCitySelect = (selectedCity) => {
    setCity(selectedCity);
    setSearch(selectedCity);
    setSuggestions([]);
  };

  useEffect(() => {
    fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=1&aqi=no&alerts=no`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.forecast) {
          setDayWeather({
            temperature: data.forecast.forecastday[0].day.maxtemp_c,
            nightTemperature: data.forecast.forecastday[0].day.mintemp_c,
            status: data.forecast.forecastday[0].day.condition.text,
            date: data.forecast.forecastday[0].date,
          });
        }
      });
  }, [city]);

  return (
    <>
      <div className="w-full h-screen flex">
        <div className="bg-[#F3F4F6] w-[50%] relative">
          <div className="bg-white w-[570px] rounded-[30px] h-20 ml-[200px] flex justify-center text-center gap-4 relative">
            <IoIosSearch className="w-9 h-9 mt-5 " />
            <input
              value={search}
              onChange={onInputChange}
              className="w-[450px] h-10 mt-5 outline-none"
              placeholder="Search"
            />

            {
              <ul className="absolute top-[60px] bg-white w-[450px] shadow-md rounded-lg z-20 text-black">
                {suggestions.map((suggestion, index) => (
                  <li
                    key={index}
                    onClick={() => onCitySelect(suggestion)}
                    className="p-2 hover:bg-gray-100 cursor-pointer"
                  >
                    {suggestion}
                  </li>
                ))}
              </ul>
            }
          </div>
          <Table
            city={city}
            celsius={dayWeather.temperature}
            status={dayWeather.status}
            date={dayWeather.date}
          />
        </div>

        <div className="w-[50%] bg-[#0F141E] relative bg-no-repeat bg-[length:100%]">
          <Table
            Value={"Night"}
            city={city}
            celsius={dayWeather.nightTemperature}
            status={dayWeather.status}
            date={dayWeather.date}
          />
          <Corners />
        </div>
      </div>
    </>
  );
}
