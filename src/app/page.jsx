"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { IoIosSearch } from "react-icons/io";
import Card from "./Card";
import { Corners } from "./components/Corners";

const API_KEY = "1031cbc6f72a4a88b6a72453241312 ";

export default function Home() {
  const [search, setSearch] = useState("");
  const [city, setCity] = useState("Ulaanbaatar");
  const [dayweather, SetDayWeather] = useState({});
  const [suggestions, setSuggestions] = useState([]);

  const CitySuggestions = async (text) => {
    const response = await fetch(
      "https://countriesnow.space/api/v0.1/countries"
    );
    const data = await response.json();

    if (data && data.data) {
      const allCities = data.data.flatMap((country) => country.cities);
      const filteredCities = allCities.filter((cityName) =>
        cityName.startsWith(text)
      );
      setSuggestions(filteredCities.slice(0, 5));
    }
  };

  const onChange = (e) => {
    const value = e.target.value;
    setSearch(value);
    CitySuggestions(value);
  };

  const onCitySelect = (selectedCity) => {
    setCity(selectedCity);
    setSearch(selectedCity);
    setSuggestions([]);
  };

  const onPressEnter = (e) => {
    if (e.code === "Enter") {
      setCity(search);
    }
  };
  useEffect(() => {
    fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=1&aqi=no&alerts=no`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        SetDayWeather({
          temperature: data.forecast.forecastday[0].day.maxtemp_c,
          nightTemperature: data.forecast.forecastday[0].day.mintemp_c,
          status: data.forecast.forecastday[0].hour[12].condition.text,
          nightStatus: data.forecast.forecastday[0].hour[22].condition.text,
        });
      });
  }, [city]);

  return (
    <>
      <div className=" w=full h-screen flex">
        <div className="bg-[#F3F4F6] w-[50%] relative">
          <div className="bg-white w-[570px] rounded-[30px] h-20 ml-[200px] flex justify-center text-center gap-4">
            <IoIosSearch className="w-9 h-9 mt-5 " />
            <input
              onChange={onChange}
              className=" w-[450px] h-10 mt-5 outline-none"
              placeholder="Search"
              onKeyDown={onPressEnter}
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
          <Card
            city={city}
            celsius={dayweather.temperature}
            status={dayweather.status}
            date={dayweather.date}
          />
          <div className="w-[128px] h-[128px] rounded-full bg-[#FF8E27] bg-[radial-gradient(circle , from-white from-0% to-white to-70%)] left-[350px] absolute top-[180px] "></div>
        </div>
        <div className=" w-[50%] bg-[#0F141E] relative bg-no-repeat bg-[length:100%] blur- ">
          <Card
            Value={"Night"}
            city={city}
            celsius={dayweather.nightTemperature}
            status={dayweather.nightStatus}
            date={dayweather.date}
          />
          <div className="w-[128px] h-[128px] rounded-full bg-[#6E72C9] bg-[radial-gradient(circle , from-white from-0% to-white to-70%)] right-[260px] absolute bottom-[5px]"></div>
          <div className="bg-yellow-200 rounded-full w-8 h-8 absolute mt-[570px]  shadow-[-0px_-0px_3px_3px_rgba(255,255,255)]"></div>

          <div className="w-[140px] h-[140px] bg-[#F3F4F6] rounded-full mt-[500px] absolute -ml-[70px]">
            <div className="flex ml-[18px] mt-5 gap-4">
              <Image src={"/Vector3.png"} width={44} height={86} alt="" />
              <Image src={"/Vector2.png"} width={44} height={86} alt="" />
            </div>
          </div>

          <Corners />
        </div>
      </div>
    </>
  );
}
