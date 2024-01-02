import NavigationItem from "./NavigationItem";


// Navigation Item List
function NavigationItemList() {
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
      <ul className="w-auto h-full flex-shrink-0 flex items-center gap-8">
        <NavigationItem
          item={{ text: "Home", onclick: () => {} }}
          menuList={homepageCategories}
        />
        <NavigationItem
          item={{ text: "Movies", onclick: () => {} }}
          menuList={movieCategories}
        />
        <NavigationItem
          item={{ text: "TV Shows", onclick: () => {} }}
          menuList={tvShowCategories}
        />
        <NavigationItem
          item={{ text: "Web Series", onclick: () => {} }}
          menuList={webSeriesCategories}
        />
        <NavigationItem
          item={{ text: "Sports", onclick: () => {} }}
          menuList={sportsCategories}
        />
      </ul>
    );
  }
  

  export default NavigationItemList;