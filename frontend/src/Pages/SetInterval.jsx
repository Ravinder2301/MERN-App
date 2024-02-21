import React from "react";
import Counter from "./Counter";
import { MdRestaurant } from "react-icons/md";
import { FaRegSmile } from "react-icons/fa";
import { TfiMenuAlt } from "react-icons/tfi";
import { FaStar } from "react-icons/fa";

const SetInterval = () => {
  return (
    <>
    <hr />
    <div id="about" className=" p-4 flex flex-col items-center justify-center h-auto bg-gradient-to-r from-[#77dcab] to-[#d3dcdd]">
      <div className="font-bold text-3xl mt-10 border-b-2">WHO WE ARE</div>
      <div className="my-12 flex flex-col w-80 sm:w-fit sm:grid sm:grid-cols-2 md:grid-cols-4 gap-4 items-center justify-center">
        <Counter
          maxCount={400}
          content={"Meals Delivered"}
          icon={<MdRestaurant />}
        />
        <Counter
          maxCount={340}
          content={"Happy Customers"}
          icon={<FaRegSmile />}
        />
        <Counter maxCount={225} content={"Menu Items"} icon={<TfiMenuAlt />} />
        <Counter maxCount={205} content={"Five Stars"} icon={<FaStar />} />
      </div>
    </div>
    </>
    
  );
};

export default SetInterval;
