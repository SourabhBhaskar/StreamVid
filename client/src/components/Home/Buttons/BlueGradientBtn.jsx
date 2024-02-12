import React from 'react';
import { Icon } from '@iconify/react';


function BlueGradientBtn({ text, icon}) {
  return (
    <button className={`w-full h-full flex flex-shrink-0 items-center justify-center gap-2 rounded-md font-semibold bg-gradient-to-r from-util-color-1 via-util-color-3 to-util-color-1 hover:from-util-color-3 hover:via-util-color-1 hover:to-util-color-3 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900 transition-all`}>
      <span>{text}</span>
      <span><Icon icon={icon} fontSize={20}/></span>
    </button>
  )
}


export default BlueGradientBtn;