import React from 'react';
import { useNavigate } from 'react-router-dom';

const SideBar = ({ SideBar }) => {
  const navigate = useNavigate();

  const handleModelsClick = () => {
    navigate('/models');
  };
  const handleHomeClick = () => {
    navigate('/');
  };
  const handleDealershipsClick = () => {
    navigate('/dealerships');
  };

  return (
    <div
      className={
        SideBar
          ? 'absolute bg-black bg-opacity-30 backdrop-filter backdrop-blur-md top-0 left-0 w-1/3 h-screen transform transition-all duration-300 flex flex-col items-end justify-center gap-12 p-8 translate-x-0'
          : 'absolute bg-black bg-opacity-30 backdrop-filter backdrop-blur-md top-0 left-0 w-1/3 h-screen transform -translate-x-full transition-all duration-1500 flex flex-col items-end justify-center gap-5 p-5'
      }>
          <button className={SideBar ? "font-extralight text-2xl text-white pr-5 hover:text-white/[0.5] hover:duration-300 transition duration-500 opacity-100 translate-x-0" : "text-2xl text-white pr-5 hover:text-white/[0.5] hover:duration-300 transition duration-1000 opacity-0 -translate-x-96"} onClick={handleHomeClick}>
            HOME
          </button>
          <button className={SideBar ? "font-extralight text-2xl text-white pr-5 hover:text-white/[0.5] hover:duration-300 transition duration-1000 opacity-100 translate-x-0" : "text-2xl text-white pr-5 hover:text-white/[0.5] hover:duration-300 transition duration-500 opacity-0 -translate-x-96"} onClick={handleModelsClick}>
            MODELS
          </button>
          <button className={SideBar ? "font-extralight text-2xl text-white pr-5 hover:text-white/[0.5] hover:duration-300 transition duration-1500 opacity-100 translate-x-0" : "text-2xl text-white pr-5 hover:text-white/[0.5] hover:duration-300 transition duration-300 opacity-0 -translate-x-96"} onClick={handleDealershipsClick}>
            DEALERSHIPS
          </button>
    </div>
  );
};

export default SideBar;


