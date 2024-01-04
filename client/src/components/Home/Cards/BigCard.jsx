import React, { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';
import { Icon } from '@iconify/react';
import { icons } from '../../../utils/icons';


function BigCard() {
    const cardRef = useRef(null);

    useEffect(() => {
        VanillaTilt.init(cardRef.current, {
            max: 25,
            speed: 400,
            glare: true,
            scale: 1.1,
            'max-glare': 0.5,
            perspective: 1000,
        });

        return () => {
            VanillaTilt.destroy(cardRef.current);
        };
    }, []);

    return (
        <div className='w-[200px] sm:w-[250px] lg:w-[280px] h-auto relative rounded-md p-2'>
            <div ref={cardRef} className='w-full aspect-[2/3] rounded-md shadow-md relative flex items-center justify-center group'>
                <img src='https://images.unsplash.com/photo-1604200213928-ba3cf4fc8436?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='w-full h-full' />
                <span className='absolute hidden group-hover:flex text-primary-color hover:text-primary-hover-color '>
                    <Icon icon={icons.play} fontSize={50} />
                </span>
                <h1 className='w-full hidden group-hover:flex items-center justify-center py-2 bg-util-light  font-semibold text-sm truncate absolute bottom-0'>Add to my list</h1>
            </div>
            <div className='flex flex-col items-center justify-between gap-2 '>
                <div className='w-full flex justify-between items-center gap-8 py-2'>
                    <h1 className='font-semibold text-sm flex-grow truncate'>Thor : Love & Thunder</h1>
                    <span className='text-sm bg-secondary-color px-2 rounded-sm'>English</span>
                </div>
                <ul className='w-full flex flex-wrap items-center text-light-color text-sm'>
                    <li>8.2</li>
                    <Icon icon={icons.dot} className='hidden sm:block' />
                    <li>2032</li>
                    <Icon icon={icons.dot} />
                    <li>1h 23m</li>
                </ul>
            </div>
        </div>
    );
}

export default BigCard;
