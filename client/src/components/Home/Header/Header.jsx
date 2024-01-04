import React, { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import { icons } from '../../../utils/icons';



function Poster() {
    return (
        <div className='w-[95%] md:w-[80%] lg:w-[70%] xl:w-[60%] max-w-[768px] py-4 px-4 flex flex-col justify-between gap-4 sm:gap-6'>
            <ul className='w-full flex flex-wrap gap-4 text-sm md:text-[1rem]'>
                <li className='font-bold text-secondary-color hover:text-secondary-hover-color transition-all'>Action</li>
                <li className='font-bold text-secondary-color hover:text-secondary-hover-color transition-all'>Thriller</li>
                <li className='font-bold text-secondary-color hover:text-secondary-hover-color transition-all'>Drama</li>
                <li className='font-bold text-secondary-color hover:text-secondary-hover-color transition-all'>Comedy</li>
            </ul>
            <h1 className='w-full truncate text-2xl md:text-5xl lg:text-6xl font-primary-font-bold text-primary-color hover:text-primary-hover-color transition-all'>John Wick</h1>
            <ul className='flex flex-wrap items-center gap-4 text-sm md:text-[1rem]'>
                <li className='flex gap-1'>
                    <Icon icon={icons.rating} fontSize={18}  />
                    <span>8.2</span>
                </li>
                <li>2024</li>
                <li className='flex gap-1'>
                    <Icon icon={icons.time} fontSize={18} />
                    <span>1h 25m</span>
                </li>
                <li>English</li>
            </ul>
            <p className='w-full line-clamp-3 md:line-clamp-4 text-sm xs:text-[1rem] text-light-color hover:text-light-hover-color'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt dolores unde fugiat perspiciatis consectetur quis asperiores sequi? Placeat maiores perferendis illo. In, illum? Dolor tenetur accusamus ab, molestiae perspiciatis possimus!</p>
            <div className='flex flex-wrap gap-4 text-sm'>
                <button className='flex items-center gap-2 rounded-md font-semibold bg-gradient-to-r from-util-color-1 via-util-color-2 to-util-color-3 hover:from-util-color-3 hover:to-util-color-1 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-900  transition-all'>
                    <div className='h-full flex items-center gap-2 px-6 py-3'>
                        <span>
                            Play Now
                        </span>
                        <span>
                            <Icon icon={icons.play} fontSize={20}/>
                        </span>
                    </div>
                </button>
                <button className='flex items-center gap-2 rounded-md font-semibold ring-2 ring-util-color-3 border-[1px] hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-900  transition-all'>
                    <div className='h-full flex items-center gap-2 px-6 py-3'>
                        <span>
                            Watch Later
                        </span>
                        <span>
                            <Icon icon={icons.watchLater} fontSize={20}/>
                        </span>
                    </div>
                </button>
            </div>
        </div> 
    )
}


function Header({ children }) {
    return (
        <div className='w-full border-2 h-auto xxs:aspect-video min-h-[500px] max-h-screen flex flex-col relative overflow-hidden'>
            <iframe 
                className='w-full h-full absolute' 
                src="https://www.youtube.comm/embed/tgbNymZ7vqY?mute=1&autoplay=1"
                title="YouTube video player" 
            />
            <div className='w-full h-full absolute inner-box-shadow-xl'></div>
            {children}
            <div className='flex-grow relative flex items-center px-2 lg:px-14'>
                <Poster />
            </div>
            <button className='absolute left-0 top-1/2 -translate-y-1/2 py-6 rounded-md hover:bg-primary-color transition-all'>
                <Icon icon={icons.left} fontSize={20} />
            </button>
            <button className='absolute right-0 top-1/2 -translate-y-1/2 py-6 rounded-md hover:bg-primary-color transition-all'>
                <Icon icon={icons.right} fontSize={20} />
            </button>
        </div>
   )
}

export default Header;

