import React from "react";
import NavigationLogo from "./NavigationLogo";
import NavigationItemList from "./NavigationItemList";
import NavigationSearch from "./NavigationSearch";
import NavigationSubscribeBtn from "./NavigationSubscribeBtn";
import NavigationMenu from "./NavigationMenu";


// Navigation
function Navigation() {

  const homepageCategories = [
    { text: "Featured", onclick: () => {} },
    { text: "Top Picks", onclick: () => {} },
    { text: "New Arrivals", onclick: () => {} },
    { text: "Movies", onclick: () => {} },
    { text: "TV Shows", onclick: () => {} },
    { text: "Web Series", onclick: () => {} },
    { text: "Sports", onclick: () => {} },
    { text: "Home & Living", onclick: () => {} },
  ];

  const movieCategories = [
    { text: "Top Rated", onclick: () => {} },
    { text: "Popular Movies", onclick: () => {} },
    { text: "New Releases", onclick: () => {} },
    { text: "Genre", onclick: () => {} },
    { text: "Release Year", onclick: () => {} },
    { text: "Director", onclick: () => {} },
    { text: "Actor/Actress", onclick: () => {} },
  ];

  const tvShowCategories = [
    { text: "Top Rated", onclick: () => {} },
    { text: "Popular Shows", onclick: () => {} },
    { text: "New Releases", onclick: () => {} },
    { text: "Genre", onclick: () => {} },
    { text: "Platform", onclick: () => {} },
    { text: "Release Year", onclick: () => {} },
    { text: "Actor/Actress", onclick: () => {} },
  ];

  const webSeriesCategories = [
    { text: "Top Rated", onclick: () => {} },
    { text: "Popular Web Series", onclick: () => {} },
    { text: "New Releases", onclick: () => {} },
    { text: "Genre", onclick: () => {} },
    { text: "Platform", onclick: () => {} },
    { text: "Release Year", onclick: () => {} },
    { text: "Actor/Actress", onclick: () => {} },
  ];

  const sportsCategories = [
    { text: "Top Sports Events", onclick: () => {} },
    { text: "Popular Sports", onclick: () => {} },
    { text: "Upcoming Matches", onclick: () => {} },
    { text: "By Sport", onclick: () => {} },
    { text: "By League/Tournament", onclick: () => {} },
    { text: "By Country", onclick: () => {} },
  ];

  return (
    <nav className="w-full h-auto relative xxs:h-[75px] flex flex-wrap items-center justify-between py-4 gap-y-4 px-2 lg:px-14">
      <div className="w-auto h-full flex items-center gap-4">
        <span className="h-full flex items-center"><NavigationLogo /></span>
        <span className="h-full hidden md:flex items-center"><NavigationItemList homepageCategories={homepageCategories} movieCategories={movieCategories} tvShowCategories={tvShowCategories} webSeriesCategories={webSeriesCategories} sportsCategories={sportsCategories} /></span>
      </div>
      <div className="w-auto h-full flex items-center gap-4">
        <span className="h-full hidden xl:flex items-center"><NavigationSearch /></span>
        <span className="h-full hidden xl:flex items-center"><NavigationSubscribeBtn /></span>
        <span className="h-full xl:hidden flex items-center"><NavigationMenu homepageCategories={homepageCategories} movieCategories={movieCategories} tvShowCategories={tvShowCategories} webSeriesCategories={webSeriesCategories} sportsCategories={sportsCategories} /></span>
      </div>
    </nav>
  );
}


export default Navigation;
