import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { BiLogoMongodb } from "react-icons/bi";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import { ReactTyped, Typed } from "react-typed";
import pic from '../../public/pic.png'

export default function Home() {
    return (
        <>
            <div name="Home" className='max-w-screen-3xl max-auto px-4 md:px-20 my-20'>
                <div className='flex flex-col md:flex-row'>
                    <div className='md:w-1/2 mt-12 md:mt-24 space-x-1 order-2 md:order-1'>
                        <span className='text-xl'>Welcome In my Feed</span>
                        <div className='flex space-x-1 text-2xl md:text-4xl'>
                            <h1>Hello, I'm a</h1>
                            {/* <span >Developer</span> */}
                            <ReactTyped
                                className='text-red-700 font-bold'
                                strings={["Developer", "Programmer", "Coder"]}
                                typeSpeed={40}
                                backSpeed={50}
                                loop={true}
                            />
                        </div>
                        <br />
                        <p className='text-md md:text-md text-justify'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, recusandae consequatur.
                            Accusamus sint libero eligendi Laborum fuga repudiandae? Asperiores tempore eos animi dolores
                            corrupti! Sint quos, mollitia architecto aliquam nesciunt, optio cum delectus sit voluptatum
                            aut ratione quaerat veniam aperiam!
                        </p>
                        <br />
                        <div className='flex flex-col md:flex-row justify-between space-y-6 md:space-y-0 items-center'>
                            <div className='space-y-2'>
                                <h1 className='font-bold'>Avallable on</h1>
                                <ul className='flex space-x-5'>
                                    <li>
                                        <a href="https://www.facebook.com/ ">
                                            <FaFacebookSquare className='text-2xl cursor-pointer  hover:scale-110 duration-200' />
                                        </a>
                                    </li>
                                    <li>
                                        <a href=" ">
                                            <FaLinkedin className='text-2xl cursor-pointer hover:scale-110 duration-200' />
                                        </a>
                                    </li>
                                    <li>
                                        <a href=" ">
                                            <FaInstagramSquare className='text-2xl cursor-pointer hover:scale-110 duration-200' />
                                        </a>
                                    </li>
                                    <li>
                                        <a href=" ">
                                            <FaTwitter className='text-2xl cursor-pointer hover:scale-110 duration-200' />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className='space-y-2'>
                                <h1 className='font-bold '>Currently working on</h1>
                                <div className='flex space-x-5'>
                                    <BiLogoMongodb className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />
                                    <SiExpress className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />
                                    <FaReact className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />
                                    <FaNodeJs className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='md:w-1/2 md:ml-48 md:mt-13 mt-8 order-1'>

                        <img src={pic} alt="" className='rounded-full md:h-[500px] md:w-[500px]' />

                    </div>
                </div>
            </div>
            <hr />
        </>
    )
}
