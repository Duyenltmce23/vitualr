import React from 'react'
import { pricingOptions } from "../constants"
import { CheckCircle2 } from 'lucide-react'

const Pricing = () => {
    return (
        <div className="mt-20">
            <h2 className="text-center text-3xl sm:text-5xl lg:text-6xl tracking-wide my-8">
                Pricing
            </h2>

            <div className="flex flex-wrap">
                {
                    pricingOptions.map((value, index) =>
                    (
                        <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2 ">
                            <div className="border border-neutral-700 rounded-xl p-10">
                                <p className="text-4xl mb-8">
                                    {value.title}
                                    {value.title === 'Pro' &&
                                        (
                                            <span className="text-xl text-transparent
                                            bg-clip-text bg-gradient-to-r from-orange-500
                                            to-red-400 ml-2 mb-4">(Most Popular)</span>
                                        )}
                                </p>
                                <p className="text-7xl mb-8">
                                    {value.price}
                                    <span className="text-sm text-neutral-400 tracking-tight">
                                        /Month
                                    </span>
                                </p>
                                <ul className="mb-10">
                                    {
                                        value.features.map((item, index) => (
                                            <li key={index}>
                                                <div className="mb-4 flex justify-start items-center">
                                                    <CheckCircle2 />
                                                    <p className="ml-2">
                                                        {item}
                                                    </p>
                                                </div>
                                            </li>
                                        ))
                                    }
                                </ul>
                                <a href="#" className="border border-orange-700 p-2 flex justify-center rounded-xl
                                hover:bg-orange-900 ">Subcribe</a>

                            </div>
                        </div>
                    )
                    )
                }
            </div>
        </div>
    )
}

export default Pricing