import React, { useState } from 'react';
import PerformanceComponent from './ModelPerformance';
import DimensionsComponent from './ModelDimensions';
import EquipmentComponent from './ModelEquipment';

const ModelSpecs = () => {
  const [selectedOption, setSelectedOption] = useState('performance');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const renderComponent = () => {
    switch (selectedOption) {
      case 'performance':
        return <PerformanceComponent />;
      case 'dimensions':
        return <DimensionsComponent />;
      case 'equipment':
        return <EquipmentComponent />;
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="flex flex-wrap mt-2 pb-10">
        <label className="relative inline-flex items-center mx-1">
          <input
            type="radio"
            name="radio"
            value="performance"
            checked={selectedOption === 'performance'}
            className="hidden"
            onChange={handleOptionChange}
          />
          <span
            className={`block cursor-pointer bg-white py-1 px-2 relative shadow-sm rounded-l-md text-center ${
              selectedOption === 'performance' ? 'text-blue-500 filter brightness-105' : 'text-gray-700'
            } transition duration-500 ease bg-opacity-100 hover:bg-opacity-75`}
          >
            Performance
          </span>
        </label>
        <label className="relative inline-flex items-center mx-1">
          <input
            type="radio"
            name="radio"
            value="dimensions"
            checked={selectedOption === 'dimensions'}
            className="hidden"
            onChange={handleOptionChange}
          />
          <span
            className={`block cursor-pointer bg-white py-1 px-2 relative shadow-sm text-center ${
              selectedOption === 'dimensions' ? 'text-blue-500 filter brightness-105' : 'text-gray-700'
            } transition duration-500 ease bg-opacity-100 hover:bg-opacity-75`}
          >
            Dimensions
          </span>
        </label>
        <label className="relative inline-flex items-center mx-1">
          <input
            type="radio"
            name="radio"
            value="equipment"
            checked={selectedOption === 'equipment'}
            className="hidden"
            onChange={handleOptionChange}
          />
          <span
            className={`block cursor-pointer bg-white py-1 px-2 relative shadow-sm rounded-r-md text-center ${
              selectedOption === 'equipment' ? 'text-blue-500 filter brightness-105' : 'text-gray-700'
            } transition duration-500 ease bg-opacity-100 hover:bg-opacity-75`}
          >
            Equipment
          </span>
        </label>
      </div>
      {/* Render the selected component */}
      {renderComponent()}
    </div>
  );
};

export default ModelSpecs;
