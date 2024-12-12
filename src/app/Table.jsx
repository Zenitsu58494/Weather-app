import Image from "next/image";
import { CiHome } from "react-icons/ci";
import { CiLocationOn, CiHeart, CiUser } from "react-icons/ci";
export default function Table(props) {
  let weatherImage = "/sun.png";
  if (
    props.status === "Bright" ||
    (props.status === "bright" && props.style === "mt-60 bg-black")
  ) {
    weatherImage = "/Moon.png";
  } else if (props.status === "Cloudy" && props.style === "mt-60 bg-black") {
    weatherImage = "/NightClouds.png";
  } else if (props.status === "Rainy" && props.style === "mt-60 bg-black") {
    weatherImage = "/NightRain.png";
  } else if (props.status === "Stormy" && props.style === "mt-60 bg-black") {
    weatherImage = "/NightStorm.png";
  } else if (props.status === "Windy" && props.style === "mt-60 bg-black") {
    weatherImage = "/NightWind.png";
  } else if (props.status === "Clear" && props.style === "mt-60 bg-black") {
    weatherImage = "/Moon.png";
  } else if (props.status === "Cloudy") {
    weatherImage = "/Clouds.png";
  } else if (props.status === "Snowy") {
    weatherImage = "/DaySnow.png";
  } else if (props.status === "Stormy") {
    weatherImage = "/DayStorm.png";
  } else if (props.status === "Windy") {
    weatherImage = "/DayWind.png";
  } else if (props.status === "Bright") {
    weatherImage = "/sun.png";
  }

  return (
    <>
      <div
        className={`absolute z-10 w-[400px]  ml-[400px] h-[900px] rounded-3xl ${props.style}`}
      >
        <div className="ml-10 pt-[50px]">
          <h1 className="text-gray-400">{props.date}</h1>
          <h2 className="text-6xl text-gray-400">{props.city}</h2>
        </div>

        <Image
          className="ml-20 mt-[130px]"
          src={weatherImage}
          width={260}
          height={260}
          alt=""
        />
        <div>
          <div className="text-[144px] ml-[50px] text-gray-400">
            {props.celsius}
          </div>
          <a className="text-[24px] ml-[50px] text-[#FF8E27]">{props.status}</a>
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
