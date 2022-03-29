import React from 'react';
import { getProviders, signIn } from 'next-auth/react';
import Logo from '../../components/data/logo.JPG';
import Image from 'next/image';
const signin = ({ providers }) => {
  return (
    <div className='flex login-screen items-center justify-center  px-3 w-full h-screen'>
      <div className='max-w-md py-10 px-6 text-center w-full bg-white shadow-lg border border-gray-600/5 z-50 rounded-xl'>
        <div className='max-w-[300px] space-y-6 mx-auto'>
          {/* text logo */}
          <div>
            {/* logo */}
            <div className='relative h-10'>
              <Image
                src={Logo}
                objectFit='contain'
                layout='fill'
                alt='pinterest logo'
              />
            </div>

            <div className='my-6'>
              <h2 className='text-3xl text-red-600 tracking-tighter font-semibold'>
                Welcome to Pinterest
              </h2>
              <p className='text-gray-600 mt-1'>Discovery starts here</p>
            </div>
          </div>

          {/* buttons */}
          <div className=' space-y-2'>
            {Object.values(providers).map((provider) => (
              <div key={provider.name}>
                <button
                  className='rounded-full hover:shadow-md font-bold py-3 hover:border-gray-900/5  w-full bg-white border transition duration-200  border-gray-200 text-black flex items-center justify-center gap-6'
                  onClick={() => signIn(provider.id, { callbackUrl: '/' })}
                >
                  <img
                    src={`${
                      provider.name === 'Google'
                        ? 'https://cdn.iconscout.com/icon/free/png-64/google-160-189824.png'
                        : 'https://cdn.iconscout.com/icon/free/png-64/github-163-761603.png'
                    }`}
                    alt='logo'
                    className='h-5 w-auto animate-pulse object-contain'
                  />
                  <span> Sign in with {provider.name}</span>
                </button>
              </div>
            ))}
          </div>

          {/* terms */}
          <div className='divide-y divide-gray-100'>
            <div className='pb-6'>
              <p className='text-xs leading-5 text-gray-400'>
                By continuing, you agree to Pinterest's <br />
                <span className='font-bold text-gray-800 '>
                  Terms of Service
                </span>{' '}
                and acknowledge that you've read <br /> our{' '}
                <span className='font-bold text-gray-700 '>Privacy Policy</span>
              </p>
            </div>

            {/* already member */}
            <div className='pt-6 space-y-3 text-sm text-gray-800'>
              <p className='font-medium cursor-pointer'>
                Already a member? Login
              </p>
              <p className='font-medium cursor-pointer'>
                Are you a business? Get started here!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: {
      providers,
    },
  };
}

export default signin;
