import React from "react";
import adultBannerBack from "../../../assets/adultBannerBack.jpg";
import adultBannerFront from "../../../assets/adultBannerFront.jpg";
import BlueGradientBtn from "../Buttons/BlueGradientBtn";
import { icons } from "../../../utils/icons";
import { Icon } from "@iconify/react";

function AdultBanner() {
  return (
    <div
      className="w-full h-auto flex flex-col md:flex-row gap-4 px-2 lg:px-16 py-16"
      style={{
        backgroundImage: `url(${adultBannerBack})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
      <div className="w-full md:w-1/2 h-[350px] lg:pr-20 flex-shrink-0 flex flex-col justify-center gap-6">
        <h1 className="text-5xl font-primary-font-bold">Almost Adults</h1>
        <p className="line-clamp-3 text-sm text-light-color hover:text-light-hover-color">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
          praesentium enim quam ut totam libero? Quam fugiat quae, tempora sequi
          tenetur dolore, quos deleniti, ducimus expedita dolores laudantium
          atque. Magnam!
        </p>
        <div className="flex gap-4 h-[50px]">
          <span className="w-[150px]">
            <BlueGradientBtn text={"Play Now"} icon={icons.play} />
          </span>
          <button className="w-[50px] h-[50px] bg-util-light flex justify-center items-center rounded-md hover:text-secondary-color transition-all">
            <Icon icon={icons.add} />
          </button>
        </div>
      </div>
      <div
        className="w-full md:w-1/2 h-[350px] flex-shrink-0"
        style={{
          backgroundImage: `url(${adultBannerFront})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}></div>
    </div>
  );
}

export default AdultBanner;
