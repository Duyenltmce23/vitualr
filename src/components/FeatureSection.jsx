import React from 'react'
import { features } from '../constants'

const FeatureSection = () => {
    return (
        <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
            <div className="text-center">
                <span className="uppercase text-orange-500 bg-neutral-900 
             px-2 py-1 rounded-full h-6 text-sm font-medium">
                    Feature
                </span>
                <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
                    Easily build
                    <span className="text-transparent bg-clip-text bg-gradient-to-r
                 from-orange-500 to-orange-800">
                        {" "}your code
                    </span>
                </h2>
            </div>
            <div className="flex flex-wrap mt-10 lg:mt-20">
                {
                    features.map((value, index) =>
                        <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
                            <div className="flex">
                                <div className="text-orange-700 bg-neutral-900 rounded-full 
                                flex justify-center items-center
                                mx-6 p-2 w-10 h-10">
                                    {value.icon}
                                </div>
                                <div>
                                    <h5 className="text-xl mt-1 mb-6">
                                        {value.text}
                                    </h5>
                                    <p className="text-neutral-500 text-md mb-20 p-2">
                                        {value.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>

        </div>
    )
}

export default FeatureSection