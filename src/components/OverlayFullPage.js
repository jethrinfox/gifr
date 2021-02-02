import React from 'react';
import { ImSpinner2 } from 'react-icons/im';

const LoadingOverlay = () => {
  return (
    <div className="w-full h-full fixed block global-bg z-50">
      <div className="w-full h-full flex justify-center items-center">
        <ImSpinner2 className="text-white opacity-75 animate-spin h-40 w-40" />
      </div>
    </div>
  );
};

export default LoadingOverlay;
