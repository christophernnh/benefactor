import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import Loader from '../components/Loader';
import Footer from '../components/footer';
import { Swiper, SwiperSlide } from 'swiper/react';
import ModelCardData from '../components/ModelCardData';
import ModelCard from '../components/ModelCard';
import ImageSlider from '../components/InteriorSlider';
import ModelSpecs from '../components/ModelSpecs';
import {GiSteeringWheel} from 'react-icons/gi';
import {AiOutlineArrowRight} from 'react-icons/ai';
import {ImLocation2} from 'react-icons/im';
import {BsBookHalf} from 'react-icons/bs';
import CarSlider from '../components/360View';


function Models() {
  const [pos, setPos] = useState(1);
  const [topText, setTopText] = useState(true);
  const [navShow, setNavShow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setPos(scrollPosition);
      if (scrollPosition >= 1300) {
      } else if (scrollPosition >= 600) {
        setNavShow(false);
      }else if (scrollPosition >= 400){
        setPos(3);
      }else if(scrollPosition >300){
        setPos(2);
      }else if(scrollPosition <= 100){
        setNavShow(true);
        setPos(1);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (pos === 1) {
      setTopText(true);
    }else{
      setTopText(false);
    }
  }, [pos]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div className='m-0 p-0'>
      {isLoading ? (
        <Loader/>
      ) : (
      <div className='w-screen text-white m-0 p-0'>
        <NavBar Expand={navShow}></NavBar>
        <div className='flex items-center justify-center'>
          <img className='h-screen w-screen object-cover brightness-75' src='https://www.motortrend.com/uploads/2022/12/2023-Mercedes-Benz-Maybach-S-Class-Haute-Voiture-2.jpg'></img>
          <div className='pt-5 absolute flex flex-col items-center justify-center'>
            <p className={topText ? 'font-mercedes text-7xl font-medium opacity-100 transition duration-500' : 'font-mercedes text-7xl font-medium opacity-0 transition duration-500'}>The New S-Class</p>
            <p className={topText ? 'font-mercedes text-5xl opacity-100 transition duration-500' : 'font-mercedes text-5xl opacity-0 transition duration-500'} >Limousine</p>
          </div>
          <div className='absolute w-full h-full bg-gradient-to-b from-transparent via-transparent to-white bg-opacity-65'></div>
        </div>
        <div className='w-screen py-10 bg-white px-32'>
          <p className='text-sm text-gray-500 pb-2 w-3/4'>Exterior</p>
          <p className='text-2xl font-mercedes text-zinc-900 pb-5'>The Exterior of the S-Class Saloon.</p>
          <p className='text-sm text-gray-500 pb-10 w-3/4'>Superior look and a luxurious feeling of spaciousness in ideal harmony: the design idiom of sensuous purity in its most modern form.</p>
          <div className='w-screen flex justify-center'>
            <CarSlider></CarSlider>
          </div>
          <Swiper spaceBetween={20} slidesPerView={3} navigation  className="mySwiper">
            {ModelCardData.map((card, index) => (
              <SwiperSlide key={index}>
                <ModelCard details={[card]} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
          <div className='w-screen py-10 bg-white px-32'>
          <p className='text-sm text-gray-500 pb-2 w-3/4'>Interior</p>
          <p className='text-2xl font-mercedes text-zinc-900 pb-5'>The Interior of the S-Class Saloon.</p>
          <p className='text-sm text-gray-500 pb-10 w-3/4'>The S-Class Saloon combines a broad selection of elegant materials with fine surfaces. Innovative technology and high-resolution screens lend it a progressive character. Furthermore, high-tech and infotainment are presented with a user-friendly architecture.</p>
          <ImageSlider></ImageSlider>
        </div>
        <div className='w-screen py-10 bg-white px-32'>
          <p className='text-sm text-gray-500 pb-2 w-3/4'>Specifications</p>
          <p className='text-2xl font-mercedes text-zinc-900 pb-5'>Technical data of the S-Class Saloon.</p>
          <p className='text-sm text-gray-500 pb-10 w-3/4'>Find out everything about the consumption, engine, performance, dimensions and other technical data of the S-Class Saloon.</p>
          <ModelSpecs></ModelSpecs>
        </div>
        <div className='w-screen py-10 bg-white px-32'>
          <div className='grid grid-cols-3 gap-4'>
            <button className="group w-full border-2 flex group">
              <div className="text-black py-5 px-7 text-xl">
                <GiSteeringWheel></GiSteeringWheel>
              </div>
              <div className="ml-2">
                <p className="text-zinc-950 text-left group-hover:underline">Test Drive</p>
                <p className="text-gray-500 text-sm text-left group-hover:underline">Arrange a test drive.</p>
              </div>
              <div className="text-blue-500 px-7 py-5 text-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <AiOutlineArrowRight></AiOutlineArrowRight>
              </div>
            </button>

            <button className="group w-full border-2 flex group">
              <div className="text-black py-5 px-7 text-xl">
                <ImLocation2></ImLocation2>
              </div>
              <div className="ml-2">
                <p className="text-zinc-950 text-left group-hover:underline">Nearest Dealer</p>
                <p className="text-gray-500 text-sm text-left group-hover:underline">Find a dealer based on your location.</p>
              </div>
              <div className="text-blue-500 px-7 py-5 text-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <AiOutlineArrowRight></AiOutlineArrowRight>
              </div>
            </button>

            <button className="group w-full border-2 flex group">
              <div className="text-black py-5 px-7 text-xl">
                <BsBookHalf></BsBookHalf>
              </div>
              <div className="ml-2">
                <p className="text-zinc-950 text-left group-hover:underline">Download the Brochure</p>
                <p className="text-gray-500 text-sm text-left group-hover:underline">Download Now.</p>
              </div>
              <div className="text-blue-500 px-7 py-5 text-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <AiOutlineArrowRight></AiOutlineArrowRight>
              </div>
            </button>

          </div>
        </div>
        <Footer></Footer>
      </div>
      )}
    </div>
  );
}

export default Models;

