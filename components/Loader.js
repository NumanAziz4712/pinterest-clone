import React from 'react';

const Loader = () => {
  return (
    <div className='absolute z-[999] left-1/2 -translate-x-1/2 '>
      <div className='h-10 w-10 p-3 animate-spin flex items-center justify-center rounded-full bg-black/70  mt-12 '>
        <div className='grid grid-cols-2 place-items-center gap-y-1 gap-x-2'>
          <span className='h-2 w-2 rounded-full bg-white inline-block'></span>
          <span className='h-2 w-2 rounded-full bg-white inline-block'></span>
          <span className='h-2 w-2 rounded-full bg-white inline-block'></span>
          <span className='h-2 w-2 rounded-full bg-white inline-block'></span>
        </div>
      </div>
    </div>
  );
};

export default Loader;
