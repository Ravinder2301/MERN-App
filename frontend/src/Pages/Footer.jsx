import React from 'react'

const Footer = () => {
  return (
    <>
    <hr  className='h-[1.3px] px-4'/>
    <div id='contact' className='flex flex-col bg-gradient-to-l from-[#77dcab] to-[#d3dcdd] justify-center items-center'>
      <div className='text-3xl font-bold border-b-2 pt-10'>CONTACT US</div>
      <div  className='flex flex-col p-10 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-8 gap-8'>
        
        <div className='w-60 md:my-7'>
          <p className='text-xl font-semibold mb-2'>Hours of Operation</p>
          <p>Monday - Thursday: 11:00 AM - 9:00 PM</p>
          <p>Friday - Saturday: 11:00 AM - 10:00 PM</p>
          <p>Sunday: Closed</p>
        </div>

        <div className='w-60 md:my-7'>
          <p className='text-xl font-semibold mb-2'>Contact Us</p>
          <p><strong>Address:</strong> 123 Main Street, Cityville, State, ZIP</p>
          <p><strong>Phone:</strong> (555) 123-4567</p>
          <p><strong>Email:</strong> info@example.com</p>
        </div>

        <div className='w-60 md:my-7'>
          <p className='text-xl font-semibold mb-2'>About Us</p>
          <p>Learn more about our story, mission, and commitment to serving delicious food with exceptional service.</p>
        </div>

        <div className='w-60 md:my-7'>
          <p className='text-xl font-semibold mb-2 '>Privacy Policy | Terms of Service | Accessibility</p>
          <p>Stay informed about our policies and commitment to providing accessible services.</p>
        </div>
    </div>
    </div>
      
    </>
    
  )
}

export default Footer
