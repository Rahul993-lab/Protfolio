import React from 'react'
import node from '../../public/node.png'
import react from '../../public/react.png'
import express from '../../public/ex.png'
import mongoDB from '../../public/mongoDB.png'

function Protfolio() {

    const cardItem = [
        {
            id: 1,
            logo: node,
            name: "Node Js"
        },
        {
            id: 2,
            logo: react,
            name: "React Js"
        },
        {
            id: 3,
            logo: express,
            name: "Express js"
        },
        {
            id: 4,
            logo: mongoDB,
            name: "MongoDB"
        },
    ]
    return (
        <>

            <div name="Protfolio" className='max-w-screen-3xl max-auto px-4 md:px-20'>
                <div>

                    <h1 className='text-3xl font-bold'>Portfolio</h1>
                    <span className='underline font-semibold'> Featured Projects</span>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-10 my-10'>

                        {
                            cardItem.map(({ id, logo, name }) => (
                                <div className='md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300' key={id}>
                                    <img src={logo} className='w-[120px] h-[120px] p-1 rounded-full  border-[2px]' alt="" />
                                    <div>
                                        <div className='font-bold text-xl mb-3 px-2'>{name}</div>
                                        <p className='px-2 text-gray-700'>
                                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. VideoSource code
                                        </p>
                                    </div>
                                    <div className='px-2 py-2 space-x-4 justfiy-around'>
                                        <button className='bg-blue-700 text-white font-semibold px-4 py-2 rounded'>Video</button>
                                        <button className='bg-green-700 text-gray-50 font-semibold px-4 py-2 rounded'>Source Code</button>
                                    </div>
                                </div>

                            ))
                        }

                    </div>
                </div>

            </div>

        </>
    )
}

export default Protfolio
