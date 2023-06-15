import React, {useState} from 'react'
import landingvideo from '../assets/landingvideo2.mp4';

export default function FullScroll1({Show}){
    

    return (
        <div className="relative flex h-screen snap-start">
          <video autoPlay loop muted src={landingvideo} className="w-full h-full object-cover"></video>
          <div className="mx-auto w-screen absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <h2 className={Show ? "text-white font-thin text-7xl font-mercedes opacity-100 translate-y-0 transition duration-500" : "text-white font-thin text-7xl font-mercedes opacity-0 translate-y-20 transition duration-700"}>Haute Voiture</h2>
            <h2 className={Show ? "py-5 text-white font-extralight text-2xl font-mercedes opacity-100 translate-y-0 transition duration-700" : "py-5 text-white font-extralight text-2xl font-mercedes opacity-0 -translate-y-20 transition duration-500"}>The nexus of high fasion and ultra-luxury.</h2>
            <button className={Show ? "font-normal bg-white mt-4 text-l py-2 px-8 rounded-3xl border-0 tracking-wide items-center ease-in hover:bg-blue-500 hover:text-white  hover:duration-150 transition ease-linear duration-700" : "font-normal bg-white mt-4 text-l py-2 px-8 rounded-3xl border-0 tracking-wide items-center ease-in hover:bg-blue-500 hover:text-white  hover:duration-150 opacity-0" }>
                    Discover More
            </button>
          </div>
        </div>
    );
}