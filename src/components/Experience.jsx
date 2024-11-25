import React from 'react'
import css from '../../public/cssss.png'
import html from '../../public/htmllll.png'
import fast from '../../public/fastify.png'
import MySQL from '../../public/sql.png'
import ty from '../../public/type.png'
import js from '../../public/jss.png'

function Experience() {

    const cardItem = [
        {
            id: 1,
            logo: css,
            name: "CSS"
        },
        {
            id: 2,
            logo: html,
            name: "HTML"
        },
        {
            id: 3,
            logo: MySQL,
            name: "MySql"
        },
        {
            id: 4,
            logo: fast,
            name: "Fastify"
        },
        {
            id: 5,
            logo: ty,
            name: "TypeScript"
        },
        {
            id: 6,
            logo: js,
            name: "JavaScript"
        },
    ]
    return (
        <>

            <div name="Experiance" className='max-w-screen-3xl max-auto px-4 md:px-20 mt-10'>
                <div>
                    <h1 className='text-3xl font-bold mt-3'>Experience</h1>

                    <div className='grid grid-cols-2 md:grid-cols-5 gap-20 my-7'>

                        {
                            cardItem.map(({ id, logo, name }) => (
                                <div className='flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] p-1 cursor-pointer hover:scale-110 duration-300' key={id}>
                                    <img src={logo} className='w-[150px] rounded-full' alt="" />
                                    <div>
                                        <div className=''>{name}</div>
                                       
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

export default Experience
