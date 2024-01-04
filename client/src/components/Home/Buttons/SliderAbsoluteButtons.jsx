import React from "react";
import { Icon } from '@iconify/react';
import { icons } from '../../../utils/icons';


function SliderAbsoluteButtons({ onClickLeft, onClickRight }) {
  return (
    <>
      <button onClick={onClickLeft} className="absolute left-0 top-1/2 -translate-y-1/2 py-6 rounded-md hover:bg-primary-color transition-all">
        <Icon icon={icons.left} fontSize={20} />
      </button>
      <button onClick={onClickRight} className="absolute right-0 top-1/2 -translate-y-1/2 py-6 rounded-md hover:bg-primary-color transition-all">
        <Icon icon={icons.right} fontSize={20} />
      </button>
    </>
  );
}

export default SliderAbsoluteButtons;

