import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faArrowRight, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import NavigationLogo from './NavigationLogo';
import NavigationSearch from './NavigationSearch';
import NavigationSubscribeBtn from './NavigationSubscribeBtn';



function NavigationSubMenuItem() {
  const [menu, setMenu] = useState(false);

  return (
    <li onClick={() => setMenu(!menu)} className='w-full h-auto'>
      <div className='w-full h-[45px] flex justify-between items-center border-b-[1px] border-primary-color'>
        <a href='#'>Home</a>
        <FontAwesomeIcon icon={faChevronDown} transform={menu && 'rotate-180'} fontSize={12} className='transition-all' />
      </div>
      { menu && <ul className='w-full h-full'>
        <li className='w-full h-[45px] flex items-center px-4 border-b-[1px] border-primary-color'><a href='#'>Home</a></li>
      </ul>}
    </li>
  )
}

function NavigationMenu() {
  const menuRef = useRef(null);
  const [menu, setMenu] = useState(false);

  useEffect(() =>{
    const element = menuRef.current;
    if(element){
      if(menu){
        gsap.fromTo(element, { left: '-100%' }, { left: '0%', display: 'flex'});
      }else{
        gsap.fromTo(element, { left: '0%'}, { left: '-100% ', display: 'none'});
      }
    }
  }, [menu])

  return (
    <div className='border-2'>
        <button onClick={() => setMenu(true)} className='w-auto h-auto border-2 flex items-center'>
          <FontAwesomeIcon icon={faBars} fontSize={20} />
        </button>
        {/* <div ref={menuRef} className='border-2 w-[70%] max-w-[350px] h-screen hidden flex-col fixed top-0 shadow-md px-2 bg-primary-color '>
          
          <nav className="w-full h-[75px] flex items-center justify-between px-2 py-4">
            <div className="w-auto h-full flex items-center gap-4">
              <span className="h-full flex items-center"><NavigationLogo /></span>
            </div>
          </nav>

          <nav className="w-full h-[75px] flex items-center justify-between px-2 py-4">
            <div className="w-full h-full flex items-center justify-between gap-4">
              <span className="h-full w-full flex items-center "><NavigationSearch /></span>
            </div>
          </nav>

          <div className='flex-grow p-2 overflow-hidden'>
            <ul className='w-full h-full'>
              <NavigationSubMenuItem />
              <NavigationSubMenuItem />
              <NavigationSubMenuItem />
            </ul>
          </div>

        </div> */}
    </div>
  )
}

export default NavigationMenu