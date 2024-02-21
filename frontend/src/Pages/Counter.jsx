import React, { useEffect, useState } from "react";
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'

const Counter = ({ maxCount, content, icon }) => {
  const [count, setCount] = useState(false);
  const duration = Math.floor(2000 / maxCount);

//   useEffect(() => {
//     const counter = setInterval(() => {
//       setCount((prevNum) => {
//         if (prevNum === maxCount) {
//           clearInterval(counter);
//           return prevNum; // Return the same value to stop further increments
//         } else {
//           return prevNum + 1; // Increment the value
//         }
//       });
//     }, duration);

//     return () => clearInterval(counter);
//   }, [maxCount]);

  return (
    <ScrollTrigger onEnter={() => setCount(true)} onExit={() => setCount(false)}>
        <div className="w-40 sm:w-40 p-4 border-b-8 border-green-500 bg-gray-800 rounded-xl gap-2 flex flex-col items-center justify-center">
            <span className="text-green-500 text-3xl">{icon}</span>
            {
                count && (
                    <p className="text-white font-bold text-2xl"><CountUp start={0} end={maxCount} duration={duration}/>+</p>
                )
            }
            <p className="text-white text-sm">{content}</p>
        </div>
    </ScrollTrigger>
    
  );
};

export default Counter;
