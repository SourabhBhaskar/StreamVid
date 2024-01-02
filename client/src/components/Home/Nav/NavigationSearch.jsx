import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch, faSearch } from '@fortawesome/free-solid-svg-icons';


function NavigationSearch() {
    const [searchList, setSearchList] = useState(['Search-1', 'Search-2', 'Search-3', 'Search-4', 'Search-5']);
    const [searchValue, setSearchValue] = useState('');
    const [isSearching, setIsSearching] = useState(false);
    const searchListRef = useRef(null);

    useEffect(() => {
        const element = searchListRef.current;

        if(element){
            if (searchValue.length && !isSearching) {
                setIsSearching(true);
                gsap.fromTo(
                    element,
                    { top: "300%" },
                    { top: "120%", display: "block", opacity: 1 }
                );
            }
            
            if(!searchValue.length){
                setIsSearching(false);
                gsap.fromTo(
                    element,
                    { top: "150%" },
                    { top: "300%", display: "none", opacity: 0 }
                );
            }
        }
}, [searchValue]);

    const handleChange = (e) => {
        setSearchValue(e.target.value);
    }

  return (
    <div className="w-full h-full flex items-center relative border-[1px] border-primary-color rounded-md hover:ring-2 ring-secondary-color ">
        <input type="text" placeholder="Search Movies, Tv Shows, Web Series" onChange={handleChange} className="w-full min-w-[200px] h-full rounded-md bg-transparent pl-2 placeholder:text-sm placeholder:truncate focus:outline-none transition-all" />
        <FontAwesomeIcon icon={isSearching ? faCircleNotch : faSearch} spin={isSearching} className="p-4" />
        <ul
          ref={searchListRef}
          className="hidden w-full bg-primary-hover-color absolute z-10 left-0 rounded-md p-4 shadow-md">
          {searchList.map((value, index) => (
            <li
              key={index}
              className="w-auto relative px-4 hover:pl-5 hover:pr-3 py-2 text-nowrap hover:text-primary-hover-color transition-all rounded-md hover:bg-[#fff1]">
              <span className="">{value}</span>
            </li>
          ))}
        </ul>
    </div>
  )
}


export default NavigationSearch;