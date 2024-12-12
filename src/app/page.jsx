"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { IoIosSearch } from "react-icons/io";
import Table from "./Table";
import { Corners } from "./components/Corners";

export default function Home() {
  const [change, Setchange] = useState("Bright");
  const [search, Setsearch] = useState("");
  return (
    <>
      <div className=" w=full h-screen flex">
        <div className="bg-[#F3F4F6] w-[50%] ">
          <div className="bg-white w-[570px] rounded-[30px] h-20 ml-[200px] flex justify-center text-center gap-4">
            <IoIosSearch className="w-9 h-9 mt-5 " />
            <input
              onChange={(e) => {
                Setsearch(e.target.value);
                console.log(search);
              }}
              className=" w-[450px] h-10 mt-5 outline-none"
              placeholder="Search"
            />
            <button
              onClick={() => {
                Setchange(search);
              }}
              className="w-7 h-7 absolute z-30 bg-black"
            ></button>
          </div>
          <Table
            style={"mt-40 bg-white"}
            celsius={26}
            status={change}
            d
            city={"Ulaanbator"}
            date={"September 10, Monday"}
          />
        </div>
        <div className=" w-[50%] bg-[#0F141E] relative bg-no-repeat bg-[length:100%]  ">
          <Table
            style={"mt-60 bg-black"}
            celsius={9}
            status={change}
            city={"Ulaanbator"}
            date={"September 10, Monday"}
          />
          <Corners />
        </div>
      </div>
    </>
  );
}
