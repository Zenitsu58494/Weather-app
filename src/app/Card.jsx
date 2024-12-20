import Image from "next/image";
import { CiHome } from "react-icons/ci";
import { CiLocationOn, CiHeart, CiUser } from "react-icons/ci";
export default function Card(props) {
  let style,
    date,
    city,
    color,
    celsius,
    celsiusStyle,
    dot,
    status,
    smalldot,
    iconcolor = null;

  if (props.Value === "Night") {
    style = "mt-60 bg-[#111827BF] bg-[75%] blur-[24]";
    date = props.date;
    city = props.city;
    color = "text-[#777CCE]";
    status = props.status;
    iconcolor = "text-white hover:text-blue-400";

    celsiusStyle =
      "text-[120px] ml-[50px] text-line text-transparent bg-clip-text bg-gradient-to-b from-[#F9FAFB] to-[#252626] flex font-bold";
    dot =
      "w-[50px] h-[50px]  rounded-full   bg-gradient-to-b from-[#F9FAFB] to-[#252626]  mt-[50px] ml-[20px]  flex justify-center items-center";
    smalldot = "w-5 h-5 rounded-full  bg-[#111827] ";
  } else {
    style = "mt-40 bg-white";

    status = props.status;

    color = "text-[#FF8E27]";
    city = props.city;
    date = props.date;
    celsiusStyle =
      "text-[120px] ml-[50px] text-line text-transparent bg-clip-text bg-gradient-to-b from-[#111827] to-[#6B7280] flex font-bold";
    dot =
      "w-[50px] h-[50px]  rounded-full  bg-gradient-to-b from-[#111827] to-[#6B7280]  mt-[50px] ml-[20px]  flex justify-center items-center";
    smalldot = "bg-[#F3F4F6] w-5 h-5 rounded-full";
    iconcolor = "text-black hover:text-blue-400";
  }
  let weatherImage = "/sun.png";
  if (status === "Clear " && props.Value === "Night") {
    weatherImage = "/Moon.png";
  } else if (
    (status === "Light snow" || status === "Moderate snow") &&
    props.Value === "Night"
  ) {
    weatherImage = "/NightSnow.png";
  } else if (status === "Overcast " && props.Value === "Night") {
    weatherImage = "/NightClouds.png";
  } else if (
    (status === "Moderate rain" || status === "Patchy rain nearby") &&
    props.Value === "Night"
  ) {
    weatherImage = "/NightRain.png";
  } else if (status === "Light freezing rain" && props.Value === "Night") {
    weatherImage = "/NightStorm.png";
  } else if (status === "Windy" && props.Value === "Night") {
    weatherImage = "/NightWind.png";
  } else if (status === "Sunny" && props.Value === "Night") {
    weatherImage = "/Moon.png";
  } else if (status === "Moderate rain" || status === "Patchy rain nearby") {
    weatherImage = "/DayRain.png";
  } else if (status === "Overcast " || status === "Cloudy ") {
    weatherImage = "/Clouds.png";
  } else if (status === "Light snow" || status === "Moderate snow") {
    weatherImage = "/DaySnow.png";
  } else if (status === "Light freezing rain") {
    weatherImage = "/DayStorm.png";
  } else if (status === "Windy") {
    weatherImage = "/DayWind.png";
  }

  return (
    <>
      <div
        className={`absolute z-10 w-[400px]  ml-[400px] h-[800px] rounded-3xl ${style}`}
      >
        <div className="ml-10 pt-[50px]">
          <h1 className="text-yellow-400">{props.date}</h1>
          <h2 className="text-6xl text-gray-400">{city}</h2>
        </div>
        <div className="ml-[350px] -mt-[75px]">
          {" "}
          <CiLocationOn className={`${iconcolor} size-6`} />
        </div>

        <img
          className="ml-20 mt-[130px]"
          src={weatherImage}
          width={260}
          height={260}
          alt=""
        />
        <div>
          <div className={`${celsiusStyle}`}>
            {props.celsius}
            <div className={`${dot}`}>
              <div className={`${smalldot}`}></div>
            </div>
          </div>
          <a className={`text-[24px] ml-[50px] ${color} `}>{status}</a>
        </div>
        <div className="flex gap-[75px] ] ml-[50px] pt-10">
          <CiHome className=" text-gray-400 hover:text-blue-400 size-6" />
          <CiLocationOn className=" text-gray-400  hover:text-blue-400 size-6" />
          <CiHeart className="text-gray-400  hover:text-blue-400 size-6" />
          <CiUser className="text-gray-400  hover:text-blue-400 size-6" />
        </div>
      </div>
    </>
  );
}
