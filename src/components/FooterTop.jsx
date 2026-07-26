import React from "react";
import Container from "./layout/Container";
import { FaFacebookF, FaTwitter, FaPinterestP } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";

const FooterTop = () => {
  return (
    <div className="bg-gry py-10">
      <Container>
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-8">

          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h5 className="font-pop text-2xl md:text-3xl font-semibold">
              Subscribe our Newsletter
            </h5>

            <p className="font-pop text-sm text-[#999999] max-w-[400px] mx-auto lg:mx-0 mt-3">
              Pellentesque eu nibh eget mauris congue mattis mattis nec
              tellus. Phasellus imperdiet elit eu magna.
            </p>
          </div>

          {/* Right Content */}
          <div className="flex flex-col lg:flex-row items-center gap-6">

            {/* Input + Button */}
            <div className="flex w-full max-w-[500px]">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 border border-[#808080] py-3 px-5 rounded-l-full outline-none placeholder:text-[#808080]"
              />

              <button className="bg-primary text-white px-6 md:px-8 rounded-r-full font-semibold">
                Subscribe
              </button>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-primary hover:text-white cursor-pointer duration-300">
                <FaFacebookF />
              </div>

              <div className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-primary hover:text-white cursor-pointer duration-300">
                <FaTwitter />
              </div>

              <div className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-primary hover:text-white cursor-pointer duration-300">
                <FaPinterestP />
              </div>

              <div className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-primary hover:text-white cursor-pointer duration-300">
                <CiInstagram />
              </div>
            </div>

          </div>

        </div>
      </Container>
    </div>
  );
};

export default FooterTop;