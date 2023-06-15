import React, {useState, useEffect}  from 'react'
import Loader from './Loader';
import NavBar from './NavBar';
import Footer from './footer';

export const Dealerships = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
        setIsLoading(false);
        }, 2000);
    }, []);
    return (
        <div>
            {isLoading ? (
             <Loader/>
            ) : (
            <div>
                <NavBar></NavBar>
                <div className='pt-32  bg-white flex justify-center'>
                <iframe src="https://my.atlist.com/map/f0627624-f313-4ee8-9c3d-894935307c20?share=true" allow="geolocation 'self' https://my.atlist.com" width="80%" height="500px" frameborder="0" scrolling="no" allowfullscreen></iframe>
                </div>
                <div className='pl-32 pb-20'>
                    <p className='text-zinc-900 pt-10 pb-5 text-xs'>[ ! ] Finding the nearest dealer requires your gps to be enabled.</p>
                </div>
                <Footer></Footer>
            </div>
            )}
        </div>
    );
}

export default Dealerships;
