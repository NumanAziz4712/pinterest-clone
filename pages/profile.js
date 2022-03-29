import React from 'react';
import Header from '../components/Header';
import { useSession } from 'next-auth/react';

const Profile = () => {
  const { data: session } = useSession();
  return (
    <div className='h-screen bg-white '>
      <Header />

      {session && (
        <div className='w-full mx-auto flex items-center mt-12 space-y-6 flex-col sm:max-w-sm'>
          <img src={session?.user?.image} className='h-28 w-28 rounded-full' />

          {/* name */}
          <div className='text-center '>
            <h1 className='font-bold text-4xl mb-3'>{session?.user?.name}</h1>
            {session?.user?.email && (
              <p className='text-sm mb-1 text-gray-400'>
                @{session?.user?.email?.split('@')[0].toLowerCase()}
              </p>
            )}
            <p className='text-gray-700'>20 following</p>
          </div>

          {/* share / edit */}
          <div className='flex items-center gap-2'>
            <button className='py-2 rounded-full px-4 bg-gray-100 text-black hover:bg-gray-200 font-bold'>
              Share
            </button>
            <button className='py-2 rounded-full px-4 bg-gray-100 text-black font-bold hover:bg-gray-200'>
              Edit Profile
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
