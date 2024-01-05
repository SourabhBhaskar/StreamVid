import React from 'react'

function NewCard() {
  return (
    <div className='w-screen max-w-[450px] h-[200px] flex overflow-hidden'>
      <div className='w-[150px] h-full flex-shrink-0 overflow-hidden'>
        <img src='https://images.unsplash.com/photo-1604200213928-ba3cf4fc8436?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='w-full h-full transition-all hover:scale-110' />
      </div>
      <div className='flex-grow flex flex-col justify-center p-4 gap-4 border-red-600'>
        <h1 className='text-[0.9rem] font-primary-font-bold line-clamp-2'>Movies that will make your holiday amazing</h1>
        <p className='text-[0.8rem] line-clamp-3 text-light-color '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et adipisci eveniet ipsam quidem. Maiores perspiciatis maxime beatae fuga necessitatibus voluptatum eligendi rerum pariatur itaque laborum, nihil consequuntur, sint autem assumenda.</p>
        <ul className='w-full h-auto text-[0.8rem] text-light-color flex justify-between italic flex-wrap gap-2'>
          <li>17 Dec 2002</li>
          <li>Sourabh Bhaskar</li>
        </ul>
      </div>
    </div>
  )
}

export default NewCard