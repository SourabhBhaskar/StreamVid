import React, { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import { icons } from '../../../utils/icons';
import video from '../../../assets/video.mp4';

function Header() {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
            console.log(width, height)
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [width, height])

    return (
        <div className={`w-full min-h-[400px] max-h-screen aspect-video flex items-center inner-inner-box-shadow-xl relative`}>
            {/* <iframe 
                className='w-full h-full absolute left-0 top-0 ' 
                src="https://www.youtube.com/embed/QwievZ1Tx-8?si=7nZuE7Ood6Q_d23a" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowfullscreen
            /> */}
            <div className='w-[95%] z-10 md:w-[80%] lg:w-[70%] xl:w-[60%] max-w-[768px] py-4 flex flex-col justify-between gap-4 md:gap-6 px-6'>
                <ul className='w-full flex gap-4 text-sm md:text-[1rem]'>
                    <li className='font-bold text-secondary-color hover:text-secondary-hover-color transition-all'>Action</li>
                    <li className='font-bold text-secondary-color hover:text-secondary-hover-color transition-all'>Thriller</li>
                    <li className='font-bold text-secondary-color hover:text-secondary-hover-color transition-all'>Drama</li>
                    <li className='font-bold text-secondary-color hover:text-secondary-hover-color transition-all'>Comedy</li>
                </ul>
                <h1 className='w-full truncate text-3xl md:text-5xl lg:text-6xl font-primary-font-bold text-primary-color hover:text-primary-hover-color transition-all'>John Wick</h1>
                <ul className='flex items-center gap-4 text-sm md:text-[1rem]'>
                    <li className='flex gap-1'>
                        <Icon icon={icons.rating} fontSize={20}  />
                        <span>8.2</span>
                    </li>
                    <li>2024</li>
                    <li className='flex gap-1'>
                        <Icon icon={icons.time} fontSize={20} />
                        <span>1h 25m</span>
                    </li>
                    <li className='px-2 rounded-md bg-secondary-hover-color'>English</li>
                </ul>
                <p className='w-full line-clamp-3 md:line-clamp-4 text-light-color hover:text-light-hover-color'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt dolores unde fugiat perspiciatis consectetur quis asperiores sequi? Placeat maiores perferendis illo. In, illum? Dolor tenetur accusamus ab, molestiae perspiciatis possimus!</p>
                <div className='flex gap-4'>
                    <button className='flex items-center gap-2 rounded-md font-semibold bg-gradient-to-r from-util-color-1 via-util-color-2 to-util-color-3 hover:from-util-color-3 hover:to-util-color-1 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-900  transition-all'>
                        <div className='h-full flex items-center gap-2 px-6 py-3'>
                            <span>
                                Play
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
        </div>
   )
}

export default Header;