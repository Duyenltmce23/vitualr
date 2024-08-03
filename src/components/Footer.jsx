import React from 'react'
import { resourcesLinks } from '../constants/index'
import { platformLinks } from '../constants/index'
import { communityLinks } from '../constants/index'

const Footer = () => {
    return (
        <footer className="mt-20">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                <div>
                    <h5 className="text-md font-semibold mb-4">Resource</h5>
                    <ul>
                        {resourcesLinks.map((value, index) => (
                            <li className="mb-4" key={index}>
                                <a className="font-thin text-neutral-400 hover:text-white" href={value.href}>{value.text}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h5 className="text-md font-semibold mb-4">Platform</h5>
                    <ul>
                        {platformLinks.map((value, index) => (
                            <li className="mb-4" key={index}>
                                <a className="font-thin text-neutral-400 hover:text-white" href={value.href}>{value.text}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h5 className="text-md font-semibold mb-4">Community</h5>
                    <ul>
                        {communityLinks.map((value, index) => (
                            <li className="mb-4" key={index}>
                                <a className="font-thin text-neutral-400 hover:text-white" href={value.href}>{value.text}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer