import React from "react";
import NavigationLogo from "./NavigationLogo";
import NavigationItemList from "./NavigationItemList";
import NavigationSearch from "./NavigationSearch";
import NavigationSubscribeBtn from "./NavigationSubscribeBtn";
import NavigationMenu from "./NavigationMenu";


// Navigation
function Navigation() {
  return (
    <nav className="w-full h-[75px] flex items-center justify-between px-2 xl:px-16 py-4">
        <div className="w-auto h-full flex items-center gap-4">
          <span className="h-full flex items-center"><NavigationLogo /></span>
          <span className="h-full hidden md:flex items-center"><NavigationItemList /></span>
        </div>
        <div className="w-auto h-full flex items-center gap-4">
          <span className="h-full hidden xl:flex items-center"><NavigationSearch /></span>
          <span className="h-full hidden xl:flex items-center"><NavigationSubscribeBtn /></span>
          <span className="h-full xl:hidden flex items-center"><NavigationMenu /></span>
        </div>
    </nav>
  );
}


export default Navigation;
