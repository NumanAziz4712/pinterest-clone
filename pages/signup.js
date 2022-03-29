import { ChevronDownIcon } from '@heroicons/react/solid';

import { signIn } from 'next-auth/react';
import { imagelinks } from '../components/data/imagelinks';
import Image from 'next/image';
import Logo from '../components/data/logo.JPG';
const signup = () => {
  return (
    <div className='h-screen relative bg-white overflow-hidden w-full'>
      <nav>
        <div className='flex items-center justify-between px-8 py-5'>
          {/* logo */}
          <div>
            <div className='relative h-8 w-8'>
              <Image
                src={Logo}
                className='rounded-full'
                layout='fill'
                objectFit='contain'
                alt='pinterest logo'
              />
            </div>
          </div>

          {/* links */}
          <div className='flex items-center text-sm sm:text-base gap-6 sm:gap-10'>
            <a
              href=''
              className='font-bold hover:border-b hover:border-black hidden sm:inline-flex text-black'
            >
              About
            </a>
            <a
              href=''
              className='font-bold  hover:border-b hover:border-black hidden sm:inline-flex  text-black'
            >
              Business
            </a>
            <a
              href=''
              className='font-bold hover:border-b hover:border-black hidden sm:inline-flex text-black'
            >
              Press
            </a>

            <div className='flex items-center text-sm sm:inline-flex gap-4'>
              <button
                onClick={() => signIn()}
                className='py-2 px-3 rounded-full bg-red-600 hover:bg-red-700 text-white font-bold'
              >
                Login
              </button>
              <button
                onClick={() => signIn()}
                className='py-2 px-3 rounded-full bg-gray-200 hover:bg-gray-300 text-black font-bold'
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* main content */}
      <div className='z-50 absolute left-1/2 -translate-x-1/2 sm:top-28 top-40'>
        <div className='text-center'>
          <h1 className='font-semibold md:text-6xl text-4xl whitespace-nowrap '>
            Get your next <br />{' '}
            <span className='sm:mt-5 mt-3 animate-pulse text-[#4e9176] inline-block'>
              green thumb idea
            </span>
          </h1>
        </div>
      </div>
      <div className='absolute left-1/2 -translate-x-1/2 z-50 animate-bounce flex items-center justify-center cursor-pointer bottom-28 sm:bottom-12  rounded-full md:h-14 h-10 w-10 md:w-14 bg-[#4e9176] '>
        <ChevronDownIcon className='md:h-12 md:w-12 h-10 w-10 fill-white' />
      </div>
      {/* gradient */}
      <div className='absolute z-20 h-56   w-full top-32 bg-gradient-to-b from-white via-white to-transparent'></div>

      {/* second gradient */}
      <div className='absolute h-12 bottom-0 w-full bg-gradient-to-b from-transparent to-white z-50'></div>
      <div className='absolute z-20 h-56  w-full top-40 bg-gradient-to-b from-white via-white to-transparent'></div>
      <div className='columns-2 sm:columns-3 md:columns-4 lg:columns-5 mt-44 opacity-50 gap-5'>
        {imagelinks.map((img) => (
          <div key={img.id} className='mb-5'>
            <img src={img.url} alt='image' className='rounded-xl' />
          </div>
        ))}
      </div>
    </div>
  );
};

export default signup;
