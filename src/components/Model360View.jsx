import React from "react";
import ThreeSixty from 'react-360-view';

const Model360View = ( ) =>{
    const basePath = "https://fastly-production.24c.in/webin/360";
    return(
        <div className="object-cover w-1/2">
            <ThreeSixty
                amount={75}
                imagePath={basePath}
                fileName="output_{index}.jpeg"
                onZoomScroll = {false}
            />
        </div>
    );
};

export default Model360View;