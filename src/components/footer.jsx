import React from 'react';
import {FaFacebookSquare, FaInstagram,FaLinkedin,FaTwitter,FaYoutube } from 'react-icons/fa';

const Footer = () => {

  return (
    <div className='h-72 bg-zinc-950 relative snap-start p-0 m-0 bg-black'>
        <div className='z-50 px-12 pb-5 bg-black'>
            <div className='flex flex-col justify-center items-center text-white border-b-[0.1px] py-10 border-grey'>
                <div className="font-mercedes text-2xl">Benefactor</div>
                <div className="text-sm font-extralight">AUTOMOBILES</div>
            </div>
            <div className='flex space-x-52 border-b-[0.1px] py-5 border-grey'>
                <div className='flex flex-col space-y-5 text-white text-sm'>
                    <button className='text-left font-light'>COOKIES</button>
                    <button className='text-left font-light'>LEGAL</button>
                </div>
                <div className='flex flex-col space-y-4 text-white text-sm'>
                    <button className='text-left font-light'>SERVICES</button>
                    <button className='text-left font-light'>PRIVACY</button>
                </div>
                <div className='flex flex-col space-y-4 text-white text-sm'>
                    <button className='text-left font-light'>CONTACT</button>
                    <button className='text-left font-light'>AFTERSALES</button>
                </div>
                <div className='flex flex-col space-y-4 text-white text-sm'>
                    <button className='text-left font-light'>DEALERS</button>
                </div>
                <div className='flex flex-col space-y-4 text-white text-sm'>
                    <button className='text-left font-light'>LEGAL</button>
                </div>
            </div>
            <div className='flex items-center justify-center space-x-5 pt-5 text-xl text-white'>
                <button><FaYoutube></FaYoutube></button>
                <button><FaFacebookSquare></FaFacebookSquare></button>
                <button><FaInstagram></FaInstagram></button>
                <button><FaLinkedin></FaLinkedin></button>
                <button><FaTwitter></FaTwitter></button>
            </div>
        </div>
    </div>
  );
};

export default Footer;