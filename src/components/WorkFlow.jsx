import React from 'react'
import codeImg from "../assets/code.jpg"
import { CheckCircle2 } from 'lucide-react'
import { checklistItems } from '../constants'

const WorkFlow = () => {
    return (
        <div className="relative mt-20 border-b border-neutral-800 ">
            <div className="text-center">
                <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
                    Accelerate your
                    <span className="text-transparent bg-clip-text bg-gradient-to-r
                 from-orange-500 to-orange-800">
                        {" "}coding workflow
                    </span>
                </h2>
            </div>
            <div className="flex flex-wrap justify-center">
                <div className="lg:w-1/2 w-full p-2">
                    <img className="" src={codeImg} alt="code image" />
                </div>
                <div className="lg:w-1/2 w-full pt-12">
                    {checklistItems.map((value, index) =>
                    (
                        <div key={index} className="flex mb-12">
                            <div className="text-green-400 bg-neutral-800 mx-6 rounded-full p-2 h-10 w-10">
                                <CheckCircle2 />
                            </div>
                            <div className="mb-6">
                                <h5 className="text-xl">
                                    {value.title}
                                </h5>
                                <p className="text-neutral-500 text-sm pt-2">
                                    {value.description}
                                </p>
                            </div>
                        </div>
                    )

                    )}
                </div>
            </div>
        </div>
    )
}

export default WorkFlow