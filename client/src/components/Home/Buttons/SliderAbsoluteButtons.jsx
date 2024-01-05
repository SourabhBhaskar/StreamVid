import React from "react";
import { Icon } from '@iconify/react';
import { icons } from '../../../utils/icons';


function SliderAbsoluteButtons({ onClickLeft, onClickRight }) {
  return (
    <>
      <button onClick={onClickLeft} className="hidden active:bg-util-color-3 group-hover:flex absolute left-0 top-1/2 -translate-y-1/2 mx-1 py-6 rounded-md hover:bg-primary-color transition-all">
        <Icon icon={icons.left} fontSize={20} />
      </button>
      <button onClick={onClickRight} className="hidden active:bg-util-color-3 group-hover:flex absolute right-0 top-1/2 -translate-y-1/2 mx-1 py-6 rounded-md hover:bg-primary-color transition-all">
        <Icon icon={icons.right} fontSize={20} />
      </button>
    </>
  );
}

export default SliderAbsoluteButtons;

