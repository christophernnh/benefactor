import React, { useState, useRef } from 'react';
import './styles.css';

import car1 from '../assets/car/1.png';
import car2 from '../assets/car/2.png';
import car3 from '../assets/car/3.png';
import car4 from '../assets/car/4.png';
import car5 from '../assets/car/5.png';
import car6 from '../assets/car/6.png';
import car7 from '../assets/car/7.png';
import car8 from '../assets/car/8.png';
import car9 from '../assets/car/9.png';
import car10 from '../assets/car/10.png';
import car11 from '../assets/car/11.png';
import car12 from '../assets/car/12.png';
import car13 from '../assets/car/13.png';
import car14 from '../assets/car/14.png';
import car15 from '../assets/car/15.png';
import car16 from '../assets/car/16.png';
import car17 from '../assets/car/17.png';
import car18 from '../assets/car/18.png';
import car19 from '../assets/car/19.png';
import car20 from '../assets/car/20.png';
import car21 from '../assets/car/21.png';
import car22 from '../assets/car/22.png';
import car23 from '../assets/car/23.png';
import car24 from '../assets/car/24.png';
import car25 from '../assets/car/25.png';
import car26 from '../assets/car/26.png';
import car27 from '../assets/car/27.png';
import car28 from '../assets/car/28.png';
import car29 from '../assets/car/29.png';
import car30 from '../assets/car/30.png';
import car31 from '../assets/car/31.png';
import car32 from '../assets/car/32.png';
import car33 from '../assets/car/33.png';
import car34 from '../assets/car/34.png';
import car35 from '../assets/car/35.png';

const CarSlider = () => {
    const [current, setCurrent] = useState(1);
  const carlist = Array.from({ length: 35 }, (_, index) => index + 1);
  const isMouseDown = useRef(false);
  const startX = useRef(null);

  const leftRotateCar = () => {
    setCurrent((prevCurrent) => (prevCurrent - 1 + carlist.length) % carlist.length);
  };

  const rightRotateCar = () => {
    setCurrent((prevCurrent) => (prevCurrent + 1) % carlist.length);
  };

  const handleMouseDown = (e) => {
    e.preventDefault();
    isMouseDown.current = true;
    startX.current = e.pageX;
  };

  const handleMouseUp = (e) => {
    e.preventDefault();
    isMouseDown.current = false;
  };

  const handleMouseMove = (e) => {
    e.preventDefault();
    if (isMouseDown.current) {
      const distance = 50;
      const movementX = e.pageX - startX.current;
      console.log(movementX);
      if (Math.abs(movementX) > distance) {
        if (movementX < 0) {
          rightRotateCar();
        } else if (movementX > 0) {
          leftRotateCar();
        }
        startX.current = e.pageX;
      }
    }
  };
  
  

  const getCarImage = (car) => {
    switch (car) {
      case 1:
        return car1;
      case 2:
        return car2;
      case 3:
        return car3;
      case 4:
        return car4;
      case 5:
        return car5;
      case 6:
        return car6;
      case 7:
        return car7;
      case 8:
        return car8;
      case 9:
        return car9;
      case 10:
        return car10;
      case 11:
        return car11;
      case 12:
        return car12;
      case 13:
        return car13;
      case 14:
        return car14;
      case 15:
        return car15;
      case 16:
        return car16;
      case 17:
        return car17;
      case 18:
        return car18;
      case 19:
        return car19;
      case 20:
        return car20;
      case 21:
        return car21;
      case 22:
        return car22;
      case 23:
        return car23;
      case 24:
        return car24;
      case 25:
        return car25;
      case 26:
        return car26;
      case 27:
        return car27;
      case 28:
        return car28;
      case 29:
        return car29;
      case 30:
        return car30;
      case 31:
        return car31;
      case 32:
        return car32;
      case 33:
        return car33;
      case 34:
        return car34;
      case 35:
        return car35;
      default:
        return null;
    }
  };

  return (
    <div
      className="RotationContainer"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      {carlist.map((car, index) => (
        <img
          key={car}
          src={getCarImage(car)}
          alt={`Car ${car}`}
          className={`absolute w-full ${current === index ? 'visible' : 'hidden'}`}
        />
      ))}
    </div>
  );
};

export default CarSlider;
