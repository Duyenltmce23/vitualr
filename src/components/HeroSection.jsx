import React from 'react'
import video1 from '../assets/video1.mp4'
import video2 from '../assets/video2.mp4'

const HeroSection = () => {
    return (
        <div className="flex flex-col items-center mt-6 lg:mt-20">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
                Vitual build tools
                <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
                    {" "}for developers
                </span>
            </h1>
            <p className="text-lg text-neutral-500 text-center mt-10 max-w-4xl">
                Empower your creativity and bring your VR app ideas to life with our
                intuitive development tools. Get started today and turn your imagination
                into immersive reality!
            </p>
            <div className="flex justify-center my-10">
                <a href="#" className="mx-3 bg-gradient-to-r from-orange-500 to-orange-800 border py-3 px-4 rounded-md mr-3">
                    Start for free
                </a>
                <a href="#" className="mx-3 border py-3 px-4 rounded-md mr-3">
                    Documentation
                </a>
            </div>
        </div>
    )
}

export default HeroSection