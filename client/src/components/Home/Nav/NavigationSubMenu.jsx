import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Icon } from '@iconify/react';
import { icons } from '../../../utils/icons';



function NavigationSubMenu({ menuName = null, menuList = [] }) {
    const menuRef = useRef(null);
    const [menu, setMenu] = useState(false);
  
    useEffect(() =>{
      const element = menuRef.current;
      if(element){
        if(menu){
          gsap.to(element, { height: 'auto'});
        }else{
          gsap.to(element, { height: '45px'});
        }
      }
    }, [menu])
  
    return (
      <li ref={menuRef} className='w-full h-[45px] overflow-hidden md:hidden'>
        <div className='w-full h-[45px] flex justify-between items-center border-b-[1px] border-primary-color'>
          <a href='#' className='font-semibold sm:font-normal'>{menuName}</a>
          <button onClick={() => setMenu(!menu)} className='h-full aspect-square flex items-center justify-end '>
            <Icon icon={icons.expend} fontSize={20} className={`transition-all duration-300 ${menu ? 'rotate-180' : 'rotate-0'}`} />
          </button>
        </div>
        <ul className='w-full h-auto px-4'>
          {menuList.map((value, index) => 
            <li key={index} className='w-full h-[45px] flex justify-between items-center border-b-[1px] border-primary-color hover:text-primary-hover-color transition-all'>
              <a href='#' className='hover:translate-x-2 transition-all'>{value.text}</a>
            </li>)}
        </ul>
      </li>
    )
  }

  
  export default NavigationSubMenu;