import Image from 'next/image';
import React, { useEffect } from 'react';
import { data } from '../data';
import { useGlobalContext } from './utils/context';
const MenuImages = () => {
  const { apiData } = useGlobalContext();
  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-3'>
      {apiData.slice(0, 10).map((image) => (
        <div key={image.id}>
          {/* single image */}
          <div className='bg-black relative h-24 rounded-xl overflow-hidden'>
            <Image
              src={image.urls?.regular}
              alt=''
              className='background-center  opacity-60 hover:opacity-50  w-full'
              objectFit='cover'
              layout='fill'
            />
            <p className='font-bold text-white text-sm tracking-wide absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
              {image.user?.username}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuImages;
