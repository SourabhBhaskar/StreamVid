import React from 'react';

function ArtistCard() {

  return (
    <div className='p-2 transition-all group'>
        <div className='w-[100px] sm:w-[150px] h-auto rounded-md relative'>
            <div className='w-full aspect-square rounded-full border-[1px] border-util-color-1 hover:ring-1 transition-all' style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1604200213928-ba3cf4fc8436?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}></div>
         <h1 className='w-full font-semibold text-sm truncate py-2'>Thor : Love & Thunder</h1>
        </div>
    </div>
  )
}

export default ArtistCard;