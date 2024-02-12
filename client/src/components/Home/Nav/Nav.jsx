import React from "react";
import NavigationLogo from "./NavigationLogo";
import NavigationList from "./NavigationList";
import NavigationSearch from "./NavigationSearch";
import BlueGradientBtn from "../Buttons/BlueGradientBtn";
import NavigationMenu from "./NavigationMenu";


function Navigation() {
  return (
    <nav className="w-full h-[75px] py-4 px-2 xl:px-16 flex justify-between items-center">
      <div className="flex items-center gap-4">
        <div className="w-auto h-full"><NavigationLogo /></div>
        <div className="w-auto h-full hidden md:flex"><NavigationList /></div>
      </div>
      <div className="h-full flex gap-4">
        <div className="w-auto h-full hidden lg:flex"><NavigationSearch /></div>
        <div className="w-[160px] hidden xl:flex"><BlueGradientBtn text={'Subscribe'} /></div>
        <div className="w-auto h-full xl:hidden"><NavigationMenu /></div>
      </div>
    </nav>
  );
}


export default Navigation;
