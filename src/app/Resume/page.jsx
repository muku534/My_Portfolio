"use client";

import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import Link from "next/link";
import Image from "next/image";
import Education from "@/app/Education/page";
import Experience from "@/app/Experience/page";
import Skills from "@/app/Skills/page";

const Page = () => {


    return (
        <div className="flex flex-col md:flex-row justify-center h-screen lg:mt-24 md:mt-24 mt-10 ml-24 md:ml-10 lg:ml-24 lg:pl-24">
            {/* Sidebar */}
            <div className="w-40 lg:ml-12 ">
                <div className="text-lg py-10 font-medium text-center text-gray-500 dark:text-gray-400">
                    <ul className="flex-wrap -mb-px">
                        <li className="mb-2">
                            <ScrollLink to="Education"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                className="cursor-pointer inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 active dark:text-blue-500 dark:border-blue-500 dark:hover:text-gray-700"
                            >
                                Education
                            </ScrollLink>
                        </li>
                        <li className="mr-2">
                            <ScrollLink to="Edperience"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                className="inline-block p-4 border-b-2 cursor-pointer border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-700"
                                aria-current="page"
                            >
                                Experience
                            </ScrollLink>
                        </li>
                        <li className="mr-2">
                            <ScrollLink to="Skills"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                className="inline-block p-4 border-b-2 cursor-pointer border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-700"
                            >
                                Skills
                            </ScrollLink>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Main Content */}
            <div className="w-full md:w-70 overflow-y-scroll hide-scrollbar mt-4 ">
                <div id="Education">
                    <Education />
                </div>
                <div id="Experience">
                    <Experience />
                </div>
                <div id="Skills">
                    <Skills />
                </div>
            </div>
        </div>
    );
};

export default Page;

