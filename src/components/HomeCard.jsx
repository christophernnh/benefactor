import React, {useState} from 'react';

const HomeCard = (props) => {  

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
            <p className="text-white font-extralight pb-2 tracking-wide">{value.title}</p>
            <p className="text-xl font-mercedes text-white tracking-wide">{value.description}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default HomeCard;

