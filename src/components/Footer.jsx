import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
function Footer() {
  return (
    <>

      <hr />
      <footer className='py-12'>
        <div className='max-w-screen-3xl  max-auto px-4 md:px-20'>
          <div className='flex flex-col items-center justify-center'>
            <div className='flex space-x-4'>
              <FaFacebookSquare size={24} />
              <FaLinkedin size={24} />
              <FaInstagramSquare size={24} />
              <FaTwitter size={24} />
            </div>
            <div className='mt-8 border-t border-gray-700 pt-8 flex flex-col items-center'>

              <p className='text-sm'>
                &copy; 2024 Your company. All rights reserved.
              </p>
             
            </div>

          </div>
        </div>
      </footer>

    </>
  )
}

export default Footer
