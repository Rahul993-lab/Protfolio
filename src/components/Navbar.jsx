import React, { useState } from 'react';
import pic from '../../public/pic.png'
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from 'react-scroll'
export default function Navbar() {

    const [menu, setMenu] = useState(false)
    const navItem = [
        {
            id: 1,
            text: "Home"
        },
        {
            id: 2,
            text: "About"
        },
        {
            id: 3,
            text: "Protfolio"
        },
        {
            id: 4,
            text: "Experiance"
        },
        {
            id: 5,
            text: "Contacts"
        }
    ]
    return (
        <>
            <div className='max-w-screen-3xl max-auto px-4 md:px-20 shadow-md h-16 fixed top-0 right-0 left-0 bg-white'>

                <div className='flex justify-between items-center h-16'>
                    <div className='flex space-x-2'>
                        <img src={pic} className='h-12 w-12 rounded-full' alt="" />
                        <h1 className='font-semibold text-xl cursor-pointer'>Rahu<span className='text-green-500 text-2xl'>l</span>
                            <p className='text-sm'>MERN Stack Developer</p>
                        </h1>
                    </div>
                    <div>
                        <ul className='hidden md:flex space-x-8'>
                            {
                                navItem.map(({ id, text }) => (
                                    <li className='hover:scale-105 duration-300 cursor-pointer' kay={id}>
                                        <Link
                                            to={text}
                                            smooth={true}
                                            duration={500}
                                            activeClass='active'
                                        >
                                            {text}
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                        <div onClick={() => setMenu(!menu)} className='md:hidden'> {menu ? <IoCloseSharp size={24} /> : <AiOutlineMenu size={24} />}</div>
                    </div>
                </div>
                {
                    menu && (
                        <div className='bg-white'>
                            <ul className='md:hidden flex flex-col items-center justify-center h-screen space-y-4 text-xl'>
                                {
                                    navItem.map(({ id, text }) => (
                                        <li className='hover:scale-105 duration-300 cursor-pointer font-semibold' kay={id}>
                                            <Link
                                                onClick={() => setMenu(!menu)}
                                                to={text}
                                                smooth={true}
                                                duration={500}
                                                activeClass='active'
                                            >
                                                {text}
                                            </Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    )
                }

            </div>

        </>
    )
}
