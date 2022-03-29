/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import { signOut } from 'next-auth/react';
export default function Logout() {
  return (
    <Menu as='div' className='relative inline-block '>
      <div className='mt-2'>
        <Menu.Button className=' flex-none flex hover:bg-gray-100  focus:ring-blue-300 focus:ring items-center justify-center  h-6 w-6 rounded-full'>
          <ChevronDownIcon
            className=' h-6 fill-gray-500 w-6'
            aria-hidden='true'
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter='transition ease-out duration-100'
        enterFrom='transform opacity-0 scale-95'
        enterTo='transform opacity-100 scale-100'
        leave='transition ease-in duration-75'
        leaveFrom='transform opacity-100 scale-100'
        leaveTo='transform opacity-0 scale-95'
      >
        <Menu.Items className='origin-top-right absolute right-0 mt-4  rounded-md shadow-lg bg-white w-20 ring-1 ring-black ring-opacity-5 focus:outline-none'>
          <div className='py-1'>
            <Menu.Item>
              <button
                type='submit'
                className='text-gray-900 whitespace-nowrap hover:bg-gray-100 w-full text-center font-semibold px-4 py-2 text-sm'
                onClick={() => signOut({ callbackUrl: '/signup/' })}
              >
                Sign out
              </button>
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
