import React, { useRef, useState } from "react";
import Container from "./layout/Container";
import { CiLocationOn } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa";
import { useOutsideClick } from "../hooks/useOutsideClick ";
import { Link } from "react-router";

export default function TopBar() {
  const [open, setOpen] = useState(false);
  const [openTwo, setOpenTwo] = useState(false);
  const dropdownRef = useRef(null);
  const dropdownRefTwo = useRef(null);

  useOutsideClick(dropdownRef, () => setOpen(false), open);
  useOutsideClick(dropdownRefTwo, () => setOpenTwo(false), openTwo);
 
  return (
    <div className="border border-solid border-b-gry font-pop text-[#666666] text-sm py-[3.5px]">
      <Container>
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2 text-xs sm:text-sm">
          <div className="hidden sm:flex items-center gap-x-1 truncate">
            <CiLocationOn className="shrink-0" />
            <span className="truncate">Store Location: Lincoln- 344, Illinois, Chicago, USA</span>
          </div>
          <div className="flex gap-x-4 sm:gap-x-5 items-center justify-between sm:justify-end w-full sm:w-auto">
            <div className="relative" ref={dropdownRef}>
              <div
                className="flex items-center gap-1 cursor-pointer hover:text-primary"
                onClick={() => setOpen(!open)}
              >
                Eng <FaAngleDown className="text-xs" />
              </div>
              {open && (
                <div className="absolute top-[25px] left-0 bg-white border border-gray-200 shadow-md py-2 px-3 z-50 rounded">
                  <ul className="space-y-1">
                    <li className="hover:text-primary cursor-pointer">Eng</li>
                    <li className="hover:text-primary cursor-pointer">Ban</li>
                  </ul>
                </div>
              )}
            </div>
            <div className="relative" ref={dropdownRefTwo}>
              <div
                className="flex items-center gap-1 cursor-pointer hover:text-primary"
                onClick={() => setOpenTwo(!openTwo)}
              >
                USD <FaAngleDown className="text-xs" />
              </div>
              {openTwo && (
                <div className="absolute top-[25px] left-0 bg-white border border-gray-200 shadow-md py-2 px-3 z-50 rounded">
                  <ul className="space-y-1">
                    <li className="hover:text-primary cursor-pointer">USD</li>
                    <li className="hover:text-primary cursor-pointer">BDT</li>
                  </ul>
                </div>
              )}
            </div>
            
            <div className="flex items-center gap-1 border-l border-gray-300 pl-3">
              <Link to="/registration" className="hover:text-primary">Sign Up</Link>
              <span>/</span>
              <Link to="/login" className="hover:text-primary">Sign In</Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

