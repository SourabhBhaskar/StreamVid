import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import SliderAbsoluteButtons from "../Buttons/SliderAbsoluteButtons";
import { Icon } from "@iconify/react";
import { icons } from "../../../utils/icons";




function CardSlider({ name, children}) {
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

  useEffect(() => {
    const handleResize = () => setSliderWidth(sliderRef.current.getBoundingClientRect().width);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [sliderWidth])

  return (
    <div className="w-full h-auto px-2 lg:px-16 py-8">
      <div ref={sliderRef} className="w-full h-auto overflow-hidden relative group">
        <div className="w-full flex justify-between py-2">
          <h1 className="text-[1.1rem] font-semibold">{name}</h1>
          <button className="text-[0.8rem] font-bold items-center hidden group-hover:flex transition-all ">
            <span>View all</span>
            <Icon icon={icons.right} fontSize={18} />
          </button>
        </div>
        <div ref={cardContainer} className="w-fit h-auto flex gap-2">
          {children}
        </div>
        <SliderAbsoluteButtons onClickLeft={handlePrev} onClickRight={handleNext} />
      </div>
    </div>
  );
}

export default CardSlider;
