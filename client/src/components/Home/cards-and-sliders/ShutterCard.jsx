import React from 'react';
import { Icon } from '@iconify/react';
import { icons } from '../../../utils/icons';


function ShutterCard() {

  return (
    <div className='w-auto h-auto overflow-hidden relative group'>
        <div className='w-[160px] md:w-[200px] aspect-[2/3] rounded-md relative' style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1604200213928-ba3cf4fc8436?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}>
            
            <div className='w-[160px] md:w-[200px] aspect-[2/3] flex flex-col gap-4 justify-center rounded-md p-3 bg-primary-hover-color translate-x-full group-hover:translate-x-0 duration-500 delay-100 '>
                <h1 className='w-full truncate font-primary-font-bold text-primary-color hover:text-primary-hover-color transition-all'>John Wick</h1>
                <ul className='flex items-center font-semibold text-[0.75rem]'>
                    <li className='text-secondary-color hover:text-secondary-hover-color'>Action</li>
                    <Icon icon={icons.dot} />
                    <li className='text-secondary-color hover:text-secondary-hover-color'>Thriller</li>
                    <Icon icon={icons.dot} />
                    <li className='text-secondary-color hover:text-secondary-hover-color'>Drama</li>
                </ul>
                <ul className='flex items-center text-[0.75rem]'>
                    <li>6.9</li>
                    <Icon icon={icons.dot} />
                    <li>2024</li>
                    <Icon icon={icons.dot} />
                    <li>1h 25m</li>
                    <Icon icon={icons.dot} />
                    <li>English</li>
                </ul>
                <p className='w-full line-clamp-5 text-[0.8rem] text-light-color'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt dolores unde fugiat perspiciatis consectetur quis asperiores sequi? Placeat maiores perferendis illo. In, illum? Dolor tenetur accusamus ab, molestiae perspiciatis possimus!</p>
                <button className='flex items-center justify-center gap-2 font-semibold py-2 rounded-md text-sm border-2 hover:border-transparent hover:bg-secondary-color transition-all'>
                    <span>Add to My List</span>
                    <Icon icon={icons.add} fontSize={16} />
                </button>
            </div>

        </div> 
        <h1 className='font-semibold text-sm py-1'>Thor : Love & Thunder</h1>
    </div>
  )
}

export default ShutterCard;
