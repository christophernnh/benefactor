import React, {useState} from 'react';

const ModelCard = (props) => {  

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      {props.details.map((value, index) => (
        <div className="w-full h-96" key={index} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <div className="relative w-full overflow-hidden">
            <div className={isHovered ? "transform transition-transform scale-110" : "transform transition-transform"}>
              <img src={value.img} alt="Zoomable Image" className="object-cover w-full h-full"/>
            </div>
          </div>
          <div className="pl-2 pt-2 border-l-[0.5px] border-white">
            <p className="text-black  pb-2 tracking-wide">{value.title}</p>
            <p className=" font-extralight font-mercedes text-gray-500 tracking-wide">{value.description}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default ModelCard;