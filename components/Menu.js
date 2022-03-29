import React from 'react';
import MenuImages from './MenuImages';
import { useGlobalContext } from './utils/context';
const Menu = () => {
  const { setInputChange } = useGlobalContext();
  return (
    <div className='absolute z-50 w-full'>
      <div
        className='min-h-screen  bg-black/30'
        onClick={() => setInputChange(false)}
      >
        <div className=' bg-white  rounded-b-xl'>
          <div className=' z-30 px-6 pt-6 pb-8 rounded-b-lg mx-auto  max-w-4xl'>
            {/* text */}
            <p className='mb-2 text-gray-500 font-medium'>
              Popular on Pinterest{' '}
            </p>

            {/* parent grid container */}

            <MenuImages />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
