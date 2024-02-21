import React, { useState } from 'react'
import { Cardsdata } from '../Data/data.js'
import Navbar from '../Components/Navbar.jsx'
import Footer from './Footer.jsx'
import { useDispatch } from "react-redux";
import { ADD } from "../redux/actions/action.js";

const MenuItems = () => {
  const [data, setData] = useState(Cardsdata);

  const dispatch = useDispatch();

  const send = (e) => {
    console.log(e);
    dispatch(ADD(e));
  }

  return (
    <>
      {/* <Navbar /> */}
      <div id='menu' className='p-4 sm:p-8  flex  flex-col items-center justify-center bg-gradient-to-l from-[#77dcab] to-[#d3dcdd]'>
        <div className='text-4xl my-8 font-bold border-b-2'>MENU</div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-[1200px] mx-auto my-6 pb-4'>
        {
            data.map((menu) => (
                <div className='max-w-80 border-2 rounded bg-opacity-50 backdrop-blur-xl p-2'>
                    <img src={menu.imgdata} className='w-auto h-55 rounded mb-2'/>
                    <p className='text-xl font-bold px-2'>{menu.rname}</p>
                    {/* <p className='text-sm px-2 my-2'>{menu.description}</p> */}
                    <p className='text-xl font-semibold px-2'>₹ {menu.price}</p>
                    <button className='flex w-full py-1 mt-4 bg-gray-700 rounded justify-center items-center text-white hover:bg-gray-600' onClick={() => send(menu)}>Add to Cart</button>
                </div>
            ))
        }
      </div>
    </div>
    {/* <Footer/> */}
    </>
    
  )
}

export default MenuItems
