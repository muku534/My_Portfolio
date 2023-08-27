"use client";

import Link from "next/link";
import Image from "next/image";
import Profile from "../../../public/assets/Profile.jpg"

const page = () => {
    return (
        <div id="About">
            <section className="text-gray-400 body-font">
                <div className="container mx-auto flex lg:px-5  md:flex-row flex-col items-center justify-center" >
                    <div className="lg:max-w-xl lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10 lg:ml-24 lg:pl-24 ">
                        {/* <!-- Add the 'hidden' class for small screens --> */}
                        <div className="custom-image overflow-hidden object-cover object-center rounded lg:block hidden">
                            <Image alt="hero" src={Profile} width={600} height={600} />
                        </div>
                    </div>
                    <div className="lg:flex-grow lg:pl-24  lg:mx-20   md:pt-5 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 className="title-font sm:text-5xl text-3xl mb-4 font-extrabold text-gray-800">About Me
                        </h1>
                        <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
                        <div className="flex justify-center">
                            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
                            <button className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">Button</button>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default page
