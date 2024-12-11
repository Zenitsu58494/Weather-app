import Image from "next/image";
export default function Table(props) {
  return (
    <>
      <div className="w-[400px] mt-40 ml-[300px] bg-white h-[800px] rounded-3xl">
        <div className="ml-10 pt-[50px]">
          <h1>{props.date}</h1>
          <h2 className="text-6xl">{props.city}</h2>
        </div>

        <Image
          className="ml-20 mt-[130px]"
          src={props.image}
          width={260}
          height={260}
          alt=""
        />
        <div>
          <div className="text-[144px] ml-[50px]">{props.celsius}</div>
          <a className="text-[24px] ml-[50px] text-[#FF8E27]">{props.status}</a>
        </div>
      </div>
    </>
  );
}
