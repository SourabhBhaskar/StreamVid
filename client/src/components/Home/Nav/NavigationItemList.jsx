import NavigationItem from "./NavigationItem";


// Navigation Item List
function NavigationItemList({ homepageCategories, movieCategories, tvShowCategories, webSeriesCategories, sportsCategories }) {
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