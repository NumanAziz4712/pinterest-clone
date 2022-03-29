import React, { useEffect } from 'react';

const Alert = ({ msg }) => {
  return (
    <div className='text-center absolute px-6 py-2 rounded bg-red-50 text-red-800 shadow-md text-sm uppercase font-semibold border-l-4  border-red-600 left-1/2 -translate-x-1/2 animate-slidein top-[92px] z-[999] '>
      {msg}
    </div>
  );
};

export default Alert;
