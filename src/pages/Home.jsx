import React, { useState, useEffect } from 'react';
import FullPageScroll from '../components/FullScroll';
import NavBar from '../components/NavBar';
import Loader from '../components/Loader';
import '../styles.css';

export default function Home() {
  const [navShowChange, setNavShowChange] = useState(true);

  const handleNavShowChange = (newValue) => {
    setNavShowChange(newValue);
  };

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
    {isLoading ? (
      <Loader/>
    ) : (
    <div className="p-0 m-0">
      <helmet>
        <style>{'body { background-color: black; }'}</style>
      </helmet> 
      <NavBar Expand={navShowChange} />
      <FullPageScroll navShowChange={handleNavShowChange}
        onNavShowChange={handleNavShowChange}/>
    </div>
    )}</div>
  );
}
