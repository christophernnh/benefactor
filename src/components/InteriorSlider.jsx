import React, { useState } from 'react';
import interior1 from '../assets/interior/interior-1.png';
import interior2 from '../assets/interior/interior-2.png';
import interior3 from '../assets/interior/interior-3.png';
import interior4 from '../assets/interior/interior-4.png';
import interior5 from '../assets/interior/interior-5.png';
import interior6 from '../assets/interior/interior-6.png';

const ImageSlider = () => {
  const [sliderValue, setSliderValue] = useState(0);
  const imageCount = 6;
  const imageIndex = Math.min(Math.max(sliderValue, 0), imageCount - 1);

  const handleSliderChange = (event) => {
    setSliderValue(parseInt(event.target.value));
  };

  const getImagePath = (index) => {
    switch (index) {
      case 0:
        return interior1;
      case 1:
        return interior2;
      case 2:
        return interior3;
      case 3:
        return interior4;
      case 4:
        return interior5;
      case 5:
        return interior6;
      default:
        return '';
    }
  };

  return (
    <div className="flex justify-center h-2/3">
        <div className="place-items-center">
            <img className="w-full" src={getImagePath(imageIndex)} alt={`Image ${imageIndex + 1}`} />
            <div className="flex justify-center"> {/* Add flex and justify-center classes */}
            <input
                className="my-4 w-2/3 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                type="range"
                min={0}
                max={imageCount - 1}
                value={sliderValue}
                onChange={handleSliderChange}
            />
            </div>
            <p className='flex w-100 justify-center text-sm text-gray-500 pb-2'>Interact with the slider to see more.</p>
        </div>
    </div>


  );
};

export default ImageSlider;
