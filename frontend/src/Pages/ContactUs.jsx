import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className='h-auto p-2 bg-gray-200'>
      <div className='flex gap-4 items-center justify-center py-3 '>
        <div><FaFacebookF className='w-8 h-8 hover:translate-x-1'/></div>
        <div><FaInstagram className='h-10 w-12 hover:translate-x-1'/></div>
        <div><FaGithub className='h-10 w-12 hover:translate-x-1'/></div>
        <div><FaYoutube className='h-10 w-12 hover:translate-x-1'/></div>
      </div>
    </div>
  )
}

export default ContactUs
