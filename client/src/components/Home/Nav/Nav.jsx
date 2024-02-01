import React from "react";
import NavigationLogo from "./NavigationLogo";
import NavigationItemList from "./NavigationItemList";
import NavigationSearch from "./NavigationSearch";
import NavigationMenu from "./NavigationMenu";
import BlueGradientBtn from "../Buttons/BlueGradientBtn";


// Navigation
function Navigation() {


  return (
    <nav className="w-full h-[75px] relative flex flex-wrap items-center justify-between px-2 lg:px-16 py-4 gap-y-4">
      <div className="w-auto h-full flex items-center gap-4">
        <span className="h-full flex items-center"><NavigationLogo /></span>
        <span className="h-full hidden md:flex items-center"><NavigationItemList /></span>
      </div>
      {/* <div className="w-auto h-full flex items-center gap-4">
        <span className="h-full hidden xl:flex items-center"><NavigationSearch /></span>
        <span className="h-full w-[160px] hidden xl:flex items-center"><BlueGradientBtn text={'Subscribe'} /></span>
        <span className="h-full xl:hidden flex items-center"><NavigationMenu homepageCategories={homepageCategories} movieCategories={movieCategories} tvShowCategories={tvShowCategories} webSeriesCategories={webSeriesCategories} sportsCategories={sportsCategories} /></span>
      </div> */}
    </nav>
  );
}


export default Navigation;
