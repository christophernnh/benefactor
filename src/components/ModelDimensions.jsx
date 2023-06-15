import React,{useState} from 'react'
import dimension1 from '../assets/specifications/dimensions-1.png'
import dimension2 from '../assets/specifications/dimensions-2.png'
import dimension3 from '../assets/specifications/dimensions-3.png'
import dimension4 from '../assets/specifications/dimensions-4.png'

const DimensionsComponent = () => {
    const [sliderValue, setSliderValue] = useState(0);
    const imageCount = 4;
    const imageIndex = Math.min(Math.max(sliderValue, 0), imageCount - 1);

    const handleSliderChange = (event) => {
        setSliderValue(parseInt(event.target.value));
    };

    const getImagePath = (index) => {
        switch (index) {
        case 0:
            return dimension1;
        case 1:
            return dimension2;
        case 2:
            return dimension3;
        case 3:
            return dimension4;
        default:
            return '';
        }
    };
    return (
        <div className="flex justify-center pt-10">
            <div className="place-items-center">
                <img className="w-full" src={getImagePath(imageIndex)} alt={`Image ${imageIndex + 1}`} />
                <div className="flex justify-center">
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

export default DimensionsComponent;
