import React, {useState} from 'react'
import landingvideo2 from '../assets/landingvideo1.mp4';

export default function FullScroll2({Show}){

    return (
        <div className="relative flex h-screen snap-start">
            <video autoPlay loop muted src={landingvideo2} className="w-full h-full object-cover"></video>
            <div className="mx-auto w-screen absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <h2 className={Show ? "text-white font-light text-3xl font-mercedes opacity-0 translate-y-72 transition duration-500" : "text-white font-light text-3xl font-mercedes opacity-100 -translate-y-0 transition duration-700"}>Greatness built to last.</h2>
                <h2 className={Show ? "text-white text-6xl font-mercedes py-5 opacity-0 translate-y-72 transition duration-700" : "text-white text-6xl font-mercedes py-5 opacity-100 -translate-y-0 transition duration-500"}>The Grand Benefactor</h2>
                <button className={Show ? "font-normal bg-white mt-4 text-l py-2 px-8 rounded-3xl border-0 tracking-wide items-center ease-in hover:bg-blue-500 hover:text-white  hover:duration-150 opacity-0" : "font-normal bg-white mt-4 text-l py-2 px-8 rounded-3xl border-0 tracking-wide items-center ease-in hover:bg-blue-500 hover:text-white  hover:duration-150 transition ease-linear duration-700"}>
                    Discover More
                </button>
            </div>
        </div>
    );
}