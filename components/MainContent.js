import Link from 'next/link';
import React from 'react';

import { ExternalLinkIcon } from '@heroicons/react/solid';
import { CloudDownloadIcon } from '@heroicons/react/outline';
import { useGlobalContext } from './utils/context';

const MainContent = () => {
  const { apiData, queryData } = useGlobalContext();

  return (
    <div className='px-10 relative z-0 my-5 mx-auto columns-2 gap-5 sm:columns-2  md:columns-3 lg:columns-4 xl:columns-5 max-w-full'>
      {apiData?.map((img) => (
        <div
          className='max-w-full cursor-zoom-in group mb-5 overflow-hidden rounded-lg relative'
          key={img.id}
        >
          <div className='bg-black '>
            <img src={img.urls?.regular} className='group-hover:opacity-80' />
          </div>

          {/* ---------------- */}
          {/* Action buttons  */}
          <div className=' hidden  absolute bottom-3 sm:bottom-4 group-hover:inline-flex  gap-6 left-1/2 text-gray-600 -translate-x-1/2'>
            <span className='px-4 hidden sm:inline-flex flex gap-2 py-1.5 rounded-full bg-white text-black font-semibold'>
              <ExternalLinkIcon className='h-5 w-5 fill-gray-600' />
              {img.user?.portfolio_url ? (
                <p className='text-sm hidden sm:inline-flex max-w-[80px] truncate '>
                  <a
                    target='_blank'
                    rel='noreferrer'
                    href={`${img.user?.portfolio_url}`}
                  >
                    {img?.user?.username}
                  </a>
                </p>
              ) : (
                <p className='text-sm hidden sm:inline-flex max-w-[80px] truncate'>
                  {img?.user?.username}
                </p>
              )}
            </span>
            <a
              className='sm:p-1.5 p-1 flex-none sm:bg-white bg-white/60 rounded-full'
              href={`${img.links?.html}`}
              target='_blank'
              rel='noreferrer'
            >
              <CloudDownloadIcon className='sm:h-5 sm:w-5 h-4 w-4 sm:stroke-gray-600 stroke-gray-900 ' />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MainContent;
