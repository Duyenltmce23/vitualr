import React from 'react'
import { testimonials } from '../constants/index'
import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

const Testimonial = () => {
    return (
        <div className="mb-20 border-b border-neutral-800">
            <div className=" text-center text-3xl sm:text-5xl lg:text-6xl my-10 lg:my-20 tracking-wide">
                <h2>
                    What People are saying
                </h2>
            </div>
            <div className="flex flex-wrap">
                {
                    testimonials.map((value, index) => (
                        <div key={index} className="w-full sm:w-1/2 lg:w-1/3  ">

                            <div className="mx-5 my-5 p-6 bg-neutral-800  rounded-md">
                                <p className="text-xl text-neutral-300">
                                    {value.text}
                                </p>

                                <div className="flex  items-center mt-10 mb-2">

                                    <img className="w-1/6 rounded-full mr-5" src={value.image} alt="user" />

                                    <div>
                                        <h5 className="text-xl">
                                            {value.user}
                                        </h5>
                                        <p className="text-neutral-500 text-sm">
                                            {value.company}
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Testimonial