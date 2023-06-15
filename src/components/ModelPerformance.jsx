import React from 'react'
import {TbEngine} from 'react-icons/tb'
import {IoMdSpeedometer, IoIosSpeedometer} from 'react-icons/io'
import {ImPower} from 'react-icons/im'
import engine from '../assets/engine.png'

const PerformanceComponent = () => {
    return (
        <div className='pb-48'>
            <div className='flex justify-center'>
                <div className='w-screen flex grid grid-cols-4 gap-x-12'>
                    <div className='pl-5 pt-10'>
                        <p className='text-zinc-900 text-4xl'><ImPower></ImPower></p>
                        <p className='text-sm text-zinc-900 pb-2 w-3/4'>Up to</p>
                        <p className='text-4xl font-mercedes text-zinc-900 pb-5 h-24'>280 kW / 381 hp</p>
                        <p className='text-sm text-zinc-900 pb-2 w-3/4'>Rated output</p>
                    </div>
                    <div className='pl-10 pt-10'>
                    <p className='text-zinc-900 text-4xl'><IoMdSpeedometer></IoMdSpeedometer></p>
                        <p className='text-sm text-zinc-900 pb-2 w-3/4'>Acceleration</p>
                        <p className='text-4xl font-mercedes text-zinc-900 pb-5 h-24'>5 s</p>
                        <p className='text-sm text-zinc-900 pb-2 w-3/4'>from 0 to 100 km/h</p>
                    </div>
                    <div className='pl-10 pt-10'>
                        <p className='text-zinc-900 text-4xl'><IoIosSpeedometer></IoIosSpeedometer></p>
                        <p className='text-sm text-zinc-900 pb-2 w-3/4'>Top speed</p>
                        <p className='text-4xl font-mercedes text-zinc-900 pb-5 h-24'>250 km/h</p>
                        <p className='text-sm text-zinc-900 pb-2 w-3/4'>Rated output</p>
                    </div>
                    <div className='pl-10 pt-10'>
                        <p className='text-zinc-900 text-4xl'><TbEngine></TbEngine></p>
                        <p className='text-sm text-zinc-900 pb-2 w-3/4'>Up to</p>
                        <p className='text-4xl font-mercedes text-zinc-900 pb-5 h-24'>500  Nm</p>
                        <p className='text-sm text-zinc-900 pb-2 w-3/4'> Torque</p>
                    </div>
                </div>
            </div>
            <div className='pl-5'>
                <p className='text-gray-500 pt-24 pb-5 text-xs'>[1] All units in this catalogue is based on Indonesia standard specs - additional features may be requested at one of our authorized dealers.</p>
                <p className='text-gray-500 text-xs'>[2] Power figures may vary between variants</p>
            </div>
        </div>
    );

};

export default PerformanceComponent;
