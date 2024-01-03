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
        gsap.to(parentElement, { display: 'block', opacity: 1});
        gsap.fromTo(element, { left: '-100%' }, { left: '0%'});
      }else{
        gsap.fromTo(element, { left: '0%'}, { left: '-100% '});
        gsap.to(parentElement, { display: 'none', opacity: 0 });
      }
    }
  }, [menu])

  const handleClick = (e) => {
    e.stopPropagation();
    const id = e.target.id;
    if(id){
      setMenu(!menu);
    }
  }

  return (
    <>
        <button onClick={() => setMenu(true)} className='w-auto h-full flex items-center'>
          <span>
            <Icon icon={icons.menu} fontSize={25} />
          </span>
        </button>
        <div ref={menuContainerRef} onClick={handleClick} id='parent' className={`w-screen h-screen fixed top-0 left-0 hidden bg-secondary-hover-color`}>
          <div ref={menuRef} className='w-[80%] sm:w-[60%] h-screen flex flex-col fixed top-0 shadow-md bg-primary-color'>
            <div className="w-full h-[75px] flex-shrink-0 flex items-center justify-between px-4">
              <NavigationLogo />
            </div>
            <div className="w-full h-[75px] flex-shrink-0 flex items-center justify-between py-4 px-4">
              <NavigationSearch />
            </div>
            <div className='flex-grow px-4 overflow-x-hidden overflow-y-auto'>
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
      </div>
    </>
  )
}

export default NavigationMenu