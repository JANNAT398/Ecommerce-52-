// import React, { useRef } from 'react'
// import Container from './layout/Container'
// import { CiLocationOn } from "react-icons/ci";
// import { FaAngleDown } from "react-icons/fa";
// const TopBar = () => {
//   let dropRefLan = useRef(null)
//   let handleDropLan = () =>{
//     if(dropRefLan.current.style.display == 'block'){
//       dropRefLan.current.style.display = 'none'
//     }else{
//       dropRefLan.current.style.display = 'block'
//     }
//   }
//   return (
//      <>
//         <div className='border border-solid border-b-gry font-pop text-[#666666] text-sm py-[3.5px]'>
//             <Container>
//               <div className='flex justify-between'>
//                 <div className='flex items-center gap-x-1'> <CiLocationOn /> Store Location: Lincoln- 344, Illinois, Chicago, USA</div>
//                 <div className='flex gap-x-5'>
//                   <div className='flex items-center' onClick={handleDropLan}>
//                     Eng 
//                     <FaAngleDown />
//                   </div>
//                   <div ref={dropRefLan} className='absolute top-[35px] bg-gry py-3 hidden'>
//                     <ul>
//                       <li>Ba</li>
//                       <li>CH </li>
//                     </ul>
//                   </div>
//                   <div className='flex items-center'>
//                     USD
//                     <FaAngleDown />
//                   </div>
//                   <div className='flex items-center relative after:w-[2px] after:h-[15px] after:bg-[#E6E6E6] after:content-[] after:absolute after:top-[2px] after:left-[-10px]'>
//                   Sign In/Sign Up
//                   </div>
//                 </div>
//               </div>
//             </Container>
//         </div>
//      </>
//   )
// }

// export default TopBar





import React, { useRef, useState } from "react";
import Container from "./layout/Container";
import { CiLocationOn } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa";
import { useOnClickOutside } from "../hooks/useOnClickOutside";

const TopBar = () => {
  const [openLan, setOpenLan] = useState(false);
  const dropRefLan = useRef(null);

 
  useOnClickOutside(dropRefLan, () => setOpenLan(false));

  return (
    <div className="border border-solid border-b-gry font-pop text-[#666666] text-sm py-[3.5px]">
      <Container>
        <div className="flex justify-between relative">
          <div className="flex items-center gap-x-1">
            <CiLocationOn />
            Store Location: Lincoln- 344, Illinois, Chicago, USA
          </div>
          <div className="flex gap-x-5 items-center">
            <div className="relative" ref={dropRefLan}>
              <div
                className="flex items-center"
                onClick={() => setOpenLan(!openLan)}
              >
                Eng <FaAngleDown />
              </div>
              {openLan && (
                <div className="absolute top-[25px] bg-gray-200 py-3 px-3">
                  <ul>
                    <li>BA</li>
                    <li>CH</li>
                  </ul>
                </div>
              )}
            </div>
            <div className="flex items-center">
              USD <FaAngleDown />
            </div>
            <div className="flex items-center relative after:w-[2px] after:h-[15px] after:bg-[#E6E6E6] after:content-[] after:absolute after:top-[2px] after:left-[-10px]">
              Sign In/Sign Up
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TopBar;