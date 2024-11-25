import axios from 'axios'
import React from 'react'
import { useForm } from "react-hook-form"
import toast from 'react-hot-toast'
export default function Contact() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const onSubmit = async (data) => {
        const userInfo = {
            name: data.name,
            email: data.email,
            message: data.message,
        }
        try {

            await axios.post('https://getform.io/f/bmddjmoa', userInfo)
            toast.success('send message successfully')
        } catch (e) {
            toast.error('Failed to send email', e)
        }
    }



    return (
        <>

            <div name="Contacts" className='max-w-screen-3xl  max-auto px-4 md:px-20 my-16'>
                <h1 className='text-3xl font-bold mb-4'> Contact</h1>
                <span>Please fill out the form below to contact me</span>
                <div className='flex flex-col items-center justify-center mt-4'>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className='bg-slate-200 w-96 px-8 py-6 rounded-xl'>
                        <h1 className='text-xl font-semibold mb-4'>Send Your Message</h1>
                        <div className='flex flex-col mb-4'>
                            <label className='block text-gray-700'>Full Name:</label>
                            <input
                                {...register("name", { required: true })}
                                className='shadow appearance-none border rounded-lg py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:outline-shadow'
                                type="text"
                                id="name"
                                name='name'
                                placeholder="enter your full name"
                            />
                            {errors.name && <span>This field is required</span>}
                        </div>
                        <div className='flex flex-col mb-4'>
                            <label className='block text-gray-700'>Email Address:</label>
                            <input
                                {...register("email", { required: true })}
                                className='shadow appearance-none border rounded-lg py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:outline-shadow'
                                type="text"
                                id="email"
                                name='email'
                                placeholder="enter your email address"
                            />
                            {errors.email && <span>This field is required</span>}
                        </div>
                        <div className='flex flex-col mb-4'>
                            <label className='block text-gray-700'>Message:</label>
                            <textarea
                                {...register("message", { required: true })}
                                className='shadow appearance-none border rounded-lg py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:outline-shadow'
                                type="text"
                                id="message"
                                name='message'
                                placeholder="message"
                            />
                            {errors.message && <span>This field is required</span>}
                        </div>
                        <button type='submit' className='bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-200'> Send</button>

                    </form>
                </div>

            </div>
        </>
    )
}
