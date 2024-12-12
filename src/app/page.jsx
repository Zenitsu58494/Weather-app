"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { IoIosSearch } from "react-icons/io";
import Table from "./Table";



export default function Home() {
  return (
    <>
      <div className=" w=full h-screen flex">
        <div className="bg-[#F3F4F6] w-[50%] ">
          <div className="bg-white w-[570px] rounded-[30px] h-20 ml-[200px] flex justify-center text-center gap-4">
            <IoIosSearch className="w-9 h-9 mt-5 " />
            <input className=" w-[450px] h-10 mt-5" placeholder="Search" />
          </div>
          <Table
          style={"mt-40 bg-white"}
            celsius={26}
            status={"Snowy"}
            city={"Ulaanbator"}
            date={"September 10, Monday"}
          
           
          />
        </div>
        <div className=" w-[50%] bg-[url('/Subtract.png')] bg-no-repeat bg-[length:100%] ">
          <Table
          style={"mt-60 bg-black"}
            className="mt-60"
            celsius={9}
            status={"Stormy"}
            city={"Ulaanbator"}
            date={"September 10, Monday"}
          
          />
        </div>
      </div>
    </>
  );
}
