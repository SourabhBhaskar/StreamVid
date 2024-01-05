import React from 'react';
import watchTrailerBanner1 from '../../../assets/watchTrailerBanner1.jpg';
import WhiteGradientBtn from '../Buttons/WhiteGradientBtn';
import { icons } from '../../../utils/icons';
import { Icon } from '@iconify/react';


function WatchTrailerBanner() {
    return (
      <div className='w-full h-auto min-h-[250px] px-2 lg:px-16'>
        <div
          className='w-full h-full py-8 lg:py-16 flex flex-col sm:flex-row items-center gap-8 relative px-4 my-16 inner-box-shadow-md'
          style={{
            backgroundImage: `url(${watchTrailerBanner1})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className='flex-grow flex flex-col items-center text-white'>
            <h1 className='text-3xl sm:text-6xl font-primary-font-bold tracking-widest text-primary-color hover:text-primary-hover-color transition-all leading-tight'>
              John Wick
            </h1>
            <p className='text-red-600 font-primary-font-bold text-lg tracking-wider'>
              Streaming on 17 December
            </p>
          </div>
          <div className='w-[150px] h-[40px] sm:h-[50px] flex-shrink-0'>
            <WhiteGradientBtn text={'Watch Trailer'} />
          </div>
        </div>
      </div>
    );
  }
  
  export default WatchTrailerBanner;
  