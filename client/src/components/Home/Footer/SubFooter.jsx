import React from 'react';

function SubFooter() {
  return (
    <section className='w-full h-auto px-2 xl:px-16 py-4 flex justify-between flex-wrap gap-2 text-light-color border-t-[1px] border-lighter-color '>
        <div className='flex items-center text-sm'>
            <h1>Copyright © 2023 StreamVid JWS. All rights reserved.</h1>
        </div>
        <div className='flex items-center gap-2 text-xs'>
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
        </div>
    </section>
  );
}

export default SubFooter;
