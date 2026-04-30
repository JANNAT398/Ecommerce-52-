import React, { useRef, useState } from "react";
import Container from "./layout/Container";
import { CiLocationOn } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa";
import { useOutsideClick } from "../hooks/useOutsideClick ";

export default function TopBar() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useOutsideClick(dropdownRef, () => setOpen(false), open);
 
  
  useOutsideClick(
    dropdownRef,
    () => setOpen(false),
    open
  )
  return (
    <div className="border border-solid border-b-gry font-pop text-[#666666] text-sm py-[3.5px]">
      <Container>
        <div className="flex justify-between relative">
          <div className="flex items-center gap-x-1">
            <CiLocationOn />
            Store Location: Lincoln- 344, Illinois, Chicago, USA
          </div>
          <div className="flex gap-x-5 items-center">
            <div className="relative" ref={dropdownRef}>
              <div
                className="flex items-center"
                onClick={() => setOpen(!open)}
              >
                Eng <FaAngleDown />
              </div>
              {open && (
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

