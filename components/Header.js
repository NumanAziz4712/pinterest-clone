import { useState, useEffect, useRef } from 'react';
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  SearchIcon,
} from '@heroicons/react/solid';
import Image from 'next/image';
import Link from 'next/link';
import Menu from './Menu';
import { useGlobalContext } from './utils/context';
const Header = () => {
  // states
  const { inputChange, setInputChang } = useGlobalContext();

  // const widthRef = useRef(0);
  //
  // useEffect(() => {
  //   if (widthRef.current) {
  //     let width = widthRef.current.offsetWidth;
  //     setMenuWidth(width);
  //   }
  // }, [widthRef, inputChange]);

  return (
    <div className=' sticky top-0 z-50 bg-white'>
      <header className='flex  items-center relative  shadow space-between py-2 px-6 gap-2'>
        {/* logo */}
        <div className='p-2.5 hover:bg-gray-100 focus:ring-blue-300 focus:ring cursor-pointer rounded-full'>
          <div className='relative h-7 w-7'>
            <Image
              src={'/logo.jpg'}
              className='rounded-full'
              layout='fill'
              objectFit='contain'
              alt='pinterest logo'
            />
          </div>
        </div>

        {/* home button */}
        <button className='rounded-full sm:inline-flex hidden bg-black py-2.5 px-4  font-bold text-white'>
          Home
        </button>
        {/* search bar  */}
        <div className='flex-1 relative  py-2 '>
          <div className='absolute inset-y-0 flex items-center justify-center'>
            <SearchIcon className='w-5 ml-4 h-5 fill-gray-400' />
          </div>
          <input
            type='text'
            onFocus={() => setInputChange(true)}
            onBlur={() => setInputChange(false)}
            className='w-full rounded-full hover:bg-gray-200 border-none bg-gray-100 pl-12 py-3 outline-none focus:ring-blue-300 focus:ring pr-4 '
            placeholder='Search'
          />
        </div>

        {/* icons */}
        <div className='flex items-center '>
          <button className='rounded-full focus:ring-blue-300 focus:ring hover:bg-gray-100 p-2.5'>
            <BellIcon className='h-7 w-7 fill-gray-500' />
          </button>
          <button className='rounded-full focus:ring-blue-300 focus:ring hover:bg-gray-100 p-2.5'>
            <ChatIcon className='h-7 w-7  fill-gray-500' />
          </button>

          <button className='rounded-full focus:ring-blue-300 focus:ring hover:bg-gray-100 p-3'>
            <Link href={''} className=' inline-block'>
              <img
                src='https://lh3.googleusercontent.com/ogw/ADea4I6zGEGOUYpGZl7Gxmn8egwtDeSMQ_UxJ5GeTuaEvA=s32-c-mo'
                alt='image'
                className='rounded-full h-6 w-6'
              />
            </Link>
          </button>
          <button className='rounded-full focus:ring-blue-300 focus:ring hover:bg-gray-100'>
            <ChevronDownIcon className='h-6 w-6  fill-gray-500' />
          </button>
        </div>
      </header>

      {inputChange && <Menu />}
    </div>
  );
};

export default Header;
