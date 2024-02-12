import React, { useRef } from 'react';
import { Icon } from '@iconify/react';
import { icons } from '../../../utils/icons';


const PlayCard = () => {
  const cardRef = useRef(null);
  const playRef = useRef(null);
  const playlistRef = useRef(null);

  return (
    <div className="w-[160px] md:w-[250px] h-auto relative rounded-md group">
      <div ref={cardRef} className="w-full aspect-w-[2/3] rounded-md shadow-md relative overflow-hidden flex justify-center items-center">
        <img
          src="https://images.unsplash.com/photo-1604200213928-ba3cf4fc8436?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="w-full h-full rounded-md"
          alt="Movie"
        />
        <div ref={playRef} className="absolute -translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 duration-500">
          <Icon icon={icons.play} fontSize={40} className='text-primary-color hover:text-primary-hover-color transition-all'  />
        </div>
        <h1 ref={playlistRef} className="w-full items-center justify-center font-semibold text-sm truncate absolute bottom-0 translate-y-full group-hover:translate-y-0 duration-500">
          <p className='w-full h-full flex justify-center py-2 transition-all bg-util-light hover:bg-secondary-color'>Add to my list</p>
        </h1>
      </div>
      <div className="flex flex-col items-center justify-between gap-2 mt-2">
        <div className="w-full flex flex-wrap justify-between items-center gap-8 py-2">
          <h1 className="font-semibold text-sm  flex-grow ">Thor: Love & Thunder</h1>
          <span className="hidden md:flex text-sm bg-util-light py-1 px-2 rounded-md">English</span>
        </div>
        <ul className="w-full flex flex-wrap items-center text-light-color text-sm">
          <li className='flex items-center gap-1'>
              <Icon icon={icons.rating} fontSize={15} className='pb-[1px]' />
              <span>8.2</span>
          </li>
          <Icon icon={icons.dot} />
          <li>2032</li>
              <Icon icon={icons.dot} />
          <li>1h 23m</li>
        </ul>
      </div>
    </div>
  );
};

export default React.memo(PlayCard);
