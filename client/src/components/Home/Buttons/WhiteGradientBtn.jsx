import React from 'react';
import { Icon } from '@iconify/react';


function WhiteGradientBtn({ text, icon}) {
  return (

    <button className={`w-full h-full flex flex-shrink-0 items-center justify-center gap-2 rounded-md text-sm font-primary-font-bold text-black bg-white hover:-translate-y-1 hover:shadow-md hover:shadow-black transition-all`}>
      <span>
        {text}
      </span>
      <span>
        <Icon icon={icon} fontSize={20}/>
      </span>
    </button>
  )
}


export default WhiteGradientBtn;

