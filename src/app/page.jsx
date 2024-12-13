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
        <div className="bg-[#F3F4F6] w-[50%] relative">
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
            
          </div>
          <Table
            
          />
           <div className="w-[128px] h-[128px] rounded-full bg-[#FF8E27] bg-[radial-gradient(circle , from-white from-0% to-white to-70%)] left-[350px] absolute top-[180px] " ></div>
        </div>
        <div className=" w-[50%] bg-[#0F141E] relative bg-no-repeat bg-[length:100%] blur- ">
          <Table
          Value={"Night"}
           
          />
          <div className="w-[128px] h-[128px] rounded-full bg-[#6E72C9] bg-[radial-gradient(circle , from-white from-0% to-white to-70%)] right-[420px] absolute bottom-[100px]" ></div>
          <div className="bg-yellow-200 rounded-full w-8 h-8 absolute mt-[570px]  shadow-[-0px_-0px_3px_3px_rgba(255,255,255)]"></div>
          
          <div className="w-[140px] h-[140px] bg-[#F3F4F6] rounded-full mt-[600px] absolute -ml-[70px]">\
            <div className="flex ml-[18px] gap-4">
            <Image src={"/Vector3.png"} width={44} height={86}/>
            <Image src={"/Vector2.png"} width={44} height={86}/>
            
            </div>
            </div>

          <Corners />
        </div>
      </div>
    </>
  );
}
