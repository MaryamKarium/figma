import Image from "next/image";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className="h-screen">
      <Header/>
      <div className="flex h-[80%]">
     <div className="w-1/2 flex flex-col justify-center item-start m-12">

     <p className=" font-bold text-4xl font-[Libre-Bodoni] ">IMPECCABLE CRAFTSMANSHIP AND FINESSE</p>

     <Image className="py-6"src={"/image/figma_image2.svg"} alt ="hero img" width={902} height={147}/>

     <button className="bg-[#a29875] text-white width=(288px) height=(58px) 

     text-[30px] font-medium  font-[Libre-Bodoni] rounded-[10px] p-[10px] top-[680px]  w-[288px] "> Explore Now</button>
     </div>

     <div className="w-1/2 flex justify-around">

     <Image  src={"/image/rs-group-wrap.svg"} alt="hero image" width={462} height={647}/></div>
        </div>
        </div>
  );
}
