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
import Logo from '../components/data/logo.JPG';
import { useSession } from 'next-auth/react';
import Logout from '../components/Logout';
const Header = () => {
  // states
  const { inputChange, setInputChange, setMyAlert, getData } =
    useGlobalContext();
  const [scrollY, setScrollY] = useState(false);

  const { data: session } = useSession();

  const [query, setQuery] = useState('');
  // const widthRef = useRef(0);
  //
  // useEffect(() => {
  //   if (widthRef.current) {
  //     let width = widthRef.current.offsetWidth;
  //     setMenuWidth(width);
  //   }
  // }, [widthRef, inputChange]);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!query) {
      setMyAlert(true);
      setInputChange(false);
      return;
    }
    setInputChange(false);
    getData(query);
    setQuery('');
  };

  // scroll events

  useEffect(() => {
    const event = window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
        setScrollY(true);
      } else setScrollY(false);
    });
    return () => window.removeEventListener('scroll', event);
  }, [scrollY]);

  return (
    <div className=' sticky top-0 z-50 bg-white'>
      <header
        className={`flex  items-center relative  ${
          scrollY && 'shadow'
        } space-between py-2 px-6 gap-2`}
      >
        {/* logo */}
        <div className='p-2.5 hover:bg-gray-100 focus:ring-blue-300 focus:ring cursor-pointer rounded-full'>
          <Link href={'/'}>
            <div className='relative h-7 w-7'>
              <Image
                src={Logo}
                className='rounded-full'
                layout='fill'
                objectFit='contain'
                alt='pinterest logo'
              />
            </div>
          </Link>
        </div>

        {/* home button */}
        <button className='rounded-full text-black sm:bg-black py-2.5 px-4  font-bold hover:bg-gray-100 sm:hover:bg-black sm:text-white'>
          <Link href={'/'}>Home</Link>
        </button>
        {/* search bar  */}
        <div className='flex-1 relative  py-2 '>
          <div className='absolute inset-y-0 flex items-center justify-center'>
            <SearchIcon className='w-5 ml-4 h-5 fill-gray-400' />
          </div>
          <form onSubmit={handleSubmit}>
            <input
              type='text'
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => setInputChange(true)}
              onBlur={() => setInputChange(false)}
              className='w-full rounded-full hover:bg-gray-200 border-none bg-gray-100 pl-12 py-3 outline-none focus:ring-blue-300 focus:ring pr-4 '
              placeholder='Search'
            />
          </form>
        </div>

        {/* icons */}
        <div className='flex items-center gap-1'>
          <button className='rounded-full focus:ring-blue-300 focus:ring hover:bg-gray-100 p-2.5'>
            <BellIcon className='h-7 w-7 fill-gray-500' />
          </button>
          <button className='rounded-full focus:ring-blue-300 focus:ring hover:bg-gray-100 p-2.5'>
            <ChatIcon className='h-7 w-7  fill-gray-500' />
          </button>

          <button className='rounded-full focus:ring-blue-300 focus:ring hover:bg-gray-100 p-3'>
            <Link href={'/profile/'} className=' inline-block'>
              <img
                src={session?.user?.image}
                alt='image'
                className='rounded-full h-6 w-6'
              />
            </Link>
          </button>
          <button className=' '>
            <Logout />
            {/* <ChevronDownIcon className='h-6 w-6  fill-gray-500' /> */}
          </button>
        </div>
      </header>

      {inputChange && <Menu />}
    </div>
  );
};

export default Header;
