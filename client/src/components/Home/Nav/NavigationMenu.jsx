import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Icon } from '@iconify/react';
import { icons } from '../../../utils/icons';
import NavigationLogo from './NavigationLogo';
import NavigationSearch from './NavigationSearch';
import NavigationList from './NavigationList';
import BlueGradientBtn from '../Buttons/BlueGradientBtn';




function NavigationMenu({ homepageCategories, movieCategories, tvShowCategories, webSeriesCategories, sportsCategories }) {
  const menuRef = useRef(null);
  const menuContainerRef = useRef(null);
  const [menu, setMenu] = useState(false);

  useEffect(() =>{
    const parentElement = menuContainerRef.current;
    const element = menuRef.current;
    if(element){
      if(menu){
        gsap.to(parentElement, { display: 'block', opacity: 0.5 });
        gsap.to(element, { display: 'flex', left: '0%' });
      }else{
        gsap.to(element, { display: 'none', left: '-100%' });
        gsap.to(parentElement, { display: 'none', opacity: 0 });
      }
    }
  }, [menuContainerRef, menuRef, menu])

  return (
    <div className='w-auto h-full'>
      <button onClick={() => setMenu(true)} className='w-auto h-full flex justify-center items-center '>
        <Icon icon={icons.menu} fontSize={25} />
      </button>
      <div onClick={() => setMenu(false)} ref={menuContainerRef} className='w-full h-screen fixed left-0 top-0 z-50 hidden bg-primary-hover-color'></div>
      <div ref={menuRef} className='w-[80%] sm:w-[40%] lg:w-[30%] h-screen fixed top-0 z-50 hidden flex-col gap-2 bg-primary-color px-2'>
        <div className="w-full h-[75px] py-4 flex-shrink-0 flex items-center justify-between">
          <NavigationLogo />
        </div>
        <div className="w-full h-[75px] flex-shrink-0 flex items-center justify-between py-4">
          <NavigationSearch />
        </div>
        <ul className="w-auto h-auto flex-shrink-0 flex flex-col items-start px-2 pb-4">
          <li className="w-full text-md cursor-pointer hover:text-primary-hover-color transition-all border-b-[1px] border-gray-700 hover:border-primary-hover-color py-2">Home</li>
          <li className="w-full text-md cursor-pointer hover:text-primary-hover-color transition-all border-b-[1px] border-gray-700 hover:border-primary-hover-color py-2">Movies</li>
          <li className="w-full text-md cursor-pointer hover:text-primary-hover-color transition-all border-b-[1px] border-gray-700 hover:border-primary-hover-color py-2">Web Series</li>
          <li className="w-full text-md cursor-pointer hover:text-primary-hover-color transition-all border-b-[1px] border-gray-700 hover:border-primary-hover-color py-2">Contact Us</li>
          <li className="w-full text-md cursor-pointer hover:text-primary-hover-color transition-all border-b-[1px] border-gray-700 hover:border-primary-hover-color py-2">About</li>
        </ul>
        <div className="w-full h-[45px]"><BlueGradientBtn text={'Subscribe'} /></div>
      </div>
    </div>
  )
}

export default NavigationMenu