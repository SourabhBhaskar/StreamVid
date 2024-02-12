import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Icon } from '@iconify/react';
import { icons } from '../../../utils/icons';


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
        gsap.fromTo(element, { top: "300%" }, { top: "120%", display: "block", opacity: 1 });
      }
        
      if(!searchValue.length){
        setIsSearching(false);
        gsap.fromTo(element, { top: "150%" }, { top: "300%", display: "none", opacity: 0 });
      }
    }
  }, [searchValue]);

  const handleChange = (e) => setSearchValue(e.target.value);

  return (
    <div className="w-full h-full relative">
      <div className='w-auto h-full flex items-center border-[1px] border-gray-700 rounded-md pl-2'>
        <input type="text" placeholder="Search Movies, Web Series and more" onChange={handleChange} className="w-full h-full bg-transparent enabled:outline-none placeholder:w-full placeholder:truncate" />
        <span className='h-full aspect-square flex justify-center items-center'>
          <Icon icon={isSearching ? icons.animatedSearchingIcon : icons.search} fontSize={25} />
        </span>
      </div>
      <ul ref={searchListRef} className="hidden w-full bg-primary-hover-color absolute z-10 left-0 rounded-md shadow-md overflow-hidden">
        {searchList.map((value, index) => (
          <li
            key={index}
            className="w-auto relative px-4 hover:pl-5 hover:pr-3 py-2 text-nowrap hover:text-primary-hover-color transition-all hover:bg-[#fff1]">
            <span className="">{value}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}


export default NavigationSearch;