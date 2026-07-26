import React from "react";
import Container from "./layout/Container";
import footerlogo from "../assets/images/footerlogo.webp";
import Footerlogo2 from "../assets/images/footerlogo2.webp";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <Container>
        {/* Top Footer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 py-12">

          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <img src={footerlogo} alt="Ecobazar" />

            <p className="max-w-[300px] text-sm text-[#808080] my-5 leading-6">
              Morbi cursus porttitor enim lobortis molestie. Duis gravida
              turpis dui, eget bibendum magna congue nec.
            </p>

            <div className="flex flex-wrap items-center gap-3 text-sm">
              <Link
                to="tel:2195550114"
                className="border-b border-primary hover:text-primary"
              >
                (219) 555-0114
              </Link>

              <span className="text-[#808080]">or</span>

              <Link
                to="mailto:Proxy@gmail.com"
                className="border-b border-primary hover:text-primary"
              >
                Proxy@gmail.com
              </Link>
            </div>
          </div>

          {/* My Account */}
          <div>
            <h5 className="font-semibold text-white mb-5">My Account</h5>

            <ul className="text-sm text-[#999999] space-y-3">
              <li><Link to="/dashboard" className="hover:text-white duration-300">My Account</Link></li>
              <li><Link to="/dashboard/orders" className="hover:text-white duration-300">Order History</Link></li>
              <li><Link to="/cart" className="hover:text-white duration-300">Shopping Cart</Link></li>
              <li><Link to="/wishlist" className="hover:text-white duration-300">Wishlist</Link></li>
            </ul>
          </div>

          {/* Helps */}
          <div>
            <h5 className="font-semibold text-white mb-5">Helps</h5>

            <ul className="text-sm text-[#999999] space-y-3">
              <li><Link to="/contact" className="hover:text-white duration-300">Contact</Link></li>
              <li><Link to="/faq" className="hover:text-white duration-300">FAQs</Link></li>
              <li><Link to="/terms" className="hover:text-white duration-300">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="hover:text-white duration-300">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h5 className="font-semibold text-white mb-5">Proxy</h5>

            <ul className="text-sm text-[#999999] space-y-3">
              <li><Link to="/about" className="hover:text-white duration-300">About</Link></li>
              <li><Link to="/shop" className="hover:text-white duration-300">Shop</Link></li>
              <li><Link to="/product" className="hover:text-white duration-300">Product</Link></li>
              <li><Link to="/track-order" className="hover:text-white duration-300">Track Order</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h5 className="font-semibold text-white mb-5">Categories</h5>

            <ul className="text-sm text-[#999999] space-y-3">
              <li><Link to="/shop?category=fresh-fruits" className="hover:text-white duration-300">Fruit & Vegetables</Link></li>
              <li><Link to="/shop?category=meat-fish" className="hover:text-white duration-300">Meat & Fish</Link></li>
              <li><Link to="/shop?category=bread-bakery" className="hover:text-white duration-300">Bread & Bakery</Link></li>
              <li><Link to="/shop?category=beauty-health" className="hover:text-white duration-300">Beauty & Health</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Footer */}
        <div className="border-t border-[#333] py-6 flex flex-col md:flex-row items-center justify-between gap-5 text-sm text-[#808080]">

          <p className="text-center md:text-left">
            Ecobazar eCommerce © 2021. All Rights Reserved.
          </p>

          <img
            src={Footerlogo2}
            alt="Payment Methods"
            className="w-full max-w-[250px] md:w-auto"
          />

        </div>
      </Container>
    </footer>
  );
};

export default Footer;