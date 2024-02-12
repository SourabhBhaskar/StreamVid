import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Icon } from "@iconify/react";
import { icons } from "../../../utils/icons";



function CardSlider({ title, children}) {
  const cardSwipeValue = 1;
  const sliderRef = useRef(null);
  const cardContainer = useRef(null);
  const [counter, setCounter] =  useState(0);
  const [sliderWidth, setSliderWidth] = useState(window.innerWidth);
  const [cardLimit, setCardLimit] = useState(null)

  const handlePrev = () => {
    if(counter !== 0)
      setCounter(counter+cardSwipeValue);
  }

  const handleNext = () => {
    if(Math.abs(counter, cardLimit)+Math.floor(cardLimit) < children.length)
      setCounter(counter-cardSwipeValue);
  }

  useEffect(() => {
      const element = cardContainer.current;
      if(element && children){
        gsap.to(element, { xPercent: 100/children.length*counter });
      }
  }, [counter])


  useEffect(() => {
    if(children)
      setCardLimit(sliderWidth/(cardContainer.current.getBoundingClientRect().width/children.length));
  }, [sliderWidth])

  return (
    <div className="w-full h-auto px-2 lg:px-16 py-8">
      <div ref={sliderRef} className="w-full h-auto overflow-hidden relative">
        <div className="w-full h-auto flex justify-between py-2">
          <h1 className="text-xl font-semibold">{title}</h1>
          <button className="text-xs font-extrabold flex items-center">
            <span>View all</span>
            <Icon icon={icons.right} fontSize={16} />
          </button>
        </div>
        <ul ref={cardContainer} className="w-fit h-auto flex gap-2 overflow-hidden">
          {children} 
        </ul>
          <ul onClick={handlePrev} className="hover:bg-primary-color active:bg-util-color-3 w-6 h-16 rounded-lg absolute left-0 top-1/2 flex justify-center items-center transition-all group">
            <li className="w-0 h-3 mx-auto border-[2px] rounded-t-full absolute -translate-y-[3px] group-hover:rotate-45 transition-all bg-white"></li>
            <li className="w-0 h-3 mx-auto border-[2px] rounded-b-full absolute translate-y-[3px] group-hover:-rotate-45 transition-all bg-white "></li>
          </ul>
          <ul onClick={handleNext} className="hover:bg-primary-color active:bg-util-color-3 w-6 h-16 rounded-lg absolute right-0 top-1/2 flex justify-center items-center transition-all group">
            <li className="w-0 h-3 mx-auto border-[2px] rounded-t-full absolute -translate-y-[3px] group-hover:-rotate-45 transition-all bg-white"></li>
            <li className="w-0 h-3 mx-auto border-[2px] rounded-b-full absolute translate-y-[3px] group-hover:rotate-45 transition-all bg-white "></li>
          </ul>
      </div>
    </div>
  );
}

export default React.memo(CardSlider);
