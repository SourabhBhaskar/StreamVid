import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";


// Navigation Item
function NavigationItem({ item = {}, menuList = [] }) {
    const [hover, setHover] = useState(false);
    const menuRef = useRef(null);
    const timeoutRef = useRef(null);
  
    useEffect(() => {
      const element = menuRef.current;
  
      if (element) {
        if (hover) {
          gsap.fromTo(
            element,
            { top: "300%" },
            { top: "150%", display: "block", opacity: 1 }
          );
        } else {
          gsap.fromTo(
            element,
            { top: "150%" },
            { top: "300%", display: "none", opacity: 0 }
          );
        }
      }
    }, [menuRef, hover]);
  
    const handleMouseEnter = () => {
      timeoutRef.current = setTimeout(() => {
        setHover(true);
      }, 200);
    };
  
    const handleMouseLeave = () => {
      clearTimeout(timeoutRef.current);
      setHover(false);
    };
  
    return (
      <li
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="flex items-center transition-all relative">
        <a
          href="#"
          className="text-sm font-semibold hover:text-primary-hover-color transition-all">
          {item.text}
        </a>
        <ul
          ref={menuRef}
          className={`hidden bg-primary-color border-2 border-secondary-color absolute z-10 ${(item.text === 'Home' || item.text === 'Movies') ? 'left-0': 'right-0'} rounded-md p-4 shadow-md`}>
          {menuList.map((value, index) => (
            <li
              key={index}
              className="w-auto relative px-4 hover:pl-5 hover:pr-3 py-2 text-nowrap hover:text-primary-hover-color transition-all rounded-md hover:bg-[#fff1]">
              <span className="">{value.text}</span>
            </li>
          ))}
        </ul>
      </li>
    );
  }
  

  export default NavigationItem