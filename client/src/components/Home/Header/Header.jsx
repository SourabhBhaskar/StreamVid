import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { icons } from '../../../utils/icons';
import BlueGradientBtn from '../Buttons/BlueGradientBtn';
import headerPlaceholder from '../../../assets/headerPlaceholder.jpg';



function ContentPostInfo() {
    return (
        <div className='w-[95%] md:w-[80%] lg:w-[70%] xl:w-[60%] max-w-[768px] flex flex-col justify-between gap-4 sm:gap-6'>
            <ul className='w-full flex flex-wrap gap-4 text-sm md:text-[1rem]'>
                <li className='font-bold text-secondary-color hover:text-secondary-hover-color transition-all'>Action</li>
                <li className='font-bold text-secondary-color hover:text-secondary-hover-color transition-all'>Thriller</li>
                <li className='font-bold text-secondary-color hover:text-secondary-hover-color transition-all'>Drama</li>
                <li className='font-bold text-secondary-color hover:text-secondary-hover-color transition-all'>Comedy</li>
            </ul>
            <h1 className='w-full truncate text-2xl md:text-5xl lg:text-6xl font-primary-font-bold text-primary-color hover:text-primary-hover-color transition-all'>John Wick</h1>
            <ul className='flex flex-wrap items-center gap-2 text-sm md:text-[1rem] '>
                <li className='flex gap-1'>
                    <Icon icon={icons.rating} fontSize={18}  />
                    <span>8.2</span>
                </li>
                <Icon icon={icons.dot} />
                <li>2024</li>
                <Icon icon={icons.dot} />
                <li className='flex gap-1'>
                    <Icon icon={icons.time} fontSize={18} />
                    <span>1h 25m</span>
                </li>
                <Icon icon={icons.dot} />
                <li>English</li>
            </ul>
            <p className='w-full line-clamp-3 md:line-clamp-4 text-sm xs:text-[1rem] text-light-color hover:text-light-hover-color'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt dolores unde fugiat perspiciatis consectetur quis asperiores sequi? Placeat maiores perferendis illo. In, illum? Dolor tenetur accusamus ab, molestiae perspiciatis possimus!</p>
            <div className='flex flex-wrap gap-4 text-sm'>
                <span className='w-[160px] h-[50px]'>
                    <BlueGradientBtn text={'Play Now'} icon={icons.play}/>
                </span>
                <span className='w-[160px] h-[50px]'>
                    <BlueGradientBtn text={'Watch Later'} icon={icons.watchLater}/>
                </span>
            </div>
        </div> 
    )
}


function Header() {
    const [videoId, setVideoId] = useState("6ZfuNTqbHE8");
    const [posterId, setPosterId] = useState("");
    const [trandingList, setTrandingList] = useState([]);

    return (
        <div className='w-full h-auto xxs:aspect-video min-h-[500px] max-h-screen flex flex-col relative overflow-hidden group transition-all ' style={{
            backgroundImage: `url(${headerPlaceholder})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}>
            <iframe 
                // src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&loop=1`}
                className='w-full h-full absolute' 
                title="YouTube video player" 
            />
            <div className='w-full h-full absolute inner-box-shadow-xl'></div>
            <div className='flex-grow relative flex items-center px-2 lg:px-16'>
                <ContentPostInfo />
            </div>
        </div>
   )
}

export default Header;

