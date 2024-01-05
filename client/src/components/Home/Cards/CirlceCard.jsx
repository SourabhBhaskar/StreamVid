import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Icon } from '@iconify/react';
import { icons } from '../../../utils/icons';


function Card2() {
    const cardRef = useRef(null);
    const [isHovering, setIsHovering] = useState(false);
    const [timeOut, setTimeOut] = useState(null);

    const handleMouseEnter = () => {
        setTimeOut(setTimeout(() => {
            setIsHovering(true);
        }, 200));
    }

    const handleMouseLeave = () => {
        setIsHovering(false);
        clearTimeout(timeOut);
    }

    useEffect(() => {
        const element = cardRef.current;
        if(element){
            if(isHovering){
                gsap.fromTo(element, { left: '100%' }, { left: '0%', display: 'flex'});
            }else{
                gsap.fromTo(element, { left: '0%' }, { left: '100%', display: 'none'});
            }
        }
    }, [isHovering])

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='p-2 hover:-translate-y-4 transition-all group'>
        <div className='w-[100px] sm:w-[150px] h-auto rounded-md relative'>
            <div className='w-full aspect-square rounded-full border-[1px] border-util-color-1 hover:ring-1' style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1604200213928-ba3cf4fc8436?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}></div>
         <h1 className='w-full font-semibold text-sm truncate py-2'>Thor : Love & Thunder</h1>
        </div>
    </div>
  )
}

export default Card2