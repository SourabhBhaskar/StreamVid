import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Icon } from '@iconify/react';
import { icons } from '../../../utils/icons';
import NavigationLogo from './NavigationLogo';
import NavigationSearch from './NavigationSearch';
import NavigationSubMenu from './NavigationSubMenu';
import NavigationSubscribeBtn from './NavigationSubscribeBtn';



// Menu
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
    <>
      <button onClick={() => setMenu(true)} className='w-auto h-full flex items-center'>
        <span>
          <Icon icon={icons.menu} fontSize={25} />
        </span>
      </button>
      <div onClick={() => setMenu(false)} ref={menuContainerRef} className='w-full h-screen fixed left-0 top-0 z-50 hidden bg-primary-hover-color'></div>
      <div ref={menuRef} className='w-[80%] sm:w-[40%] lg:w-[30%] h-screen fixed top-0 z-50 hidden flex-col bg-primary-color '>
        <div className="w-full h-[75px] flex-shrink-0 flex items-center justify-between px-4">
          <NavigationLogo />
        </div>
        <div className="w-full h-[75px] flex-shrink-0 flex items-center justify-between py-4 px-4">
          <NavigationSearch />
        </div>
        <div className='flex-grow px-4 overflow-x-hidden overflow-y-auto hide-scrollbar'>
          <ul className='w-full h-full'>
            <NavigationSubMenu menuName='Home' menuList={homepageCategories} />
            <NavigationSubMenu menuName='Movies' menuList={movieCategories} />
            <NavigationSubMenu menuName='TV Shows' menuList={tvShowCategories} />
            <NavigationSubMenu menuName='Web Series' menuList={webSeriesCategories}  />
            <NavigationSubMenu menuName='Sports' menuList={sportsCategories} />
            <div className='w-full h-[80px] py-4'>
              <div className='w-full h-full'>
                <NavigationSubscribeBtn />
              </div>
            </div>
          </ul>
        </div>
      </div>
    </>
  )
}

export default NavigationMenu