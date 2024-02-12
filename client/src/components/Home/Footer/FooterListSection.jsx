import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Icon } from '@iconify/react';
import { icons } from '../../../utils/icons';


function FooterListSection({ title, links }) {
  const listRef = useRef(null);
  const [expand, setExpand] = useState(false);

  useEffect(() => {
    const element = listRef.current;
    if (element && window.innerWidth <= 640 ) {
      if (expand) {
        gsap.to(element, { height: 'auto' });
      } else {
        gsap.to(element, { height: 0 });
      }
    }
    return () => gsap.killTweensOf(element);
  }, [expand]); 

  return (
    <div className='w-full xs:w-1/2 lg:w-auto'>
      <h1 className='font-semibold text-sm py-2'>{title}</h1>
      <ul ref={listRef} className='overflow-hidden '>
        {links.map((link, index) => (
          <li key={index} className='text-sm py-[2px] text-light-color hover:text-light-hover-color'>
            <a href='#'>{link}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FooterListSection;
