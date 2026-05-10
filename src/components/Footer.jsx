import React from 'react'
import Container from './layout/Container'
import footerlogo from '../assets/images/footerlogo.webp'
import { Link } from 'react-router'
import Footerlogo2 from '../assets/images/footerlogo2.webp'
const Footer = () => {
  return (
   <div className='bg-black text-white'>
   <Container>
     <div className='flex justify-between items-start py-10'>
       <div>
         <img src={footerlogo} alt="" />
         <p className='max-w-[300px] font-pop text-sm text-[#808080] my-4'>
         Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis dui, eget bibendum magna congue nec.
         </p>
         <div>
            <Link to ='tel:219555-0114' className='inline-block mr-4 border-b border-primary'>(219) 555-0114</Link><span className='text-[#808080]'>or</span>
            <Link to ='mailto:Proxy@gmail.com' className='inline-block ml-4 border-b border-primary'>Proxy@gmail.com</Link>
         </div>
       </div>
 
       <div>
         <h5 className='font-pop text-md text-semibold text-white mb-5'>My Account</h5>
         <ul className='font-pop text-sm text-[#999999] flex flex-col gap-3'>
            <li className='hover:text-white cursor-pointer'>My Account</li>
            <li className='hover:text-white cursor-pointer'>Order History</li>
            <li className='hover:text-white cursor-pointer'>Shoping Cart</li>
            <li className='hover:text-white cursor-pointer'>Wishlist</li>
         </ul>
       </div>
       <div>
         <h5 className='font-pop text-md text-semibold text-white mb-5'>Helps</h5>
            <ul className='font-pop text-sm text-[#999999] flex flex-col gap-3'>
               <li className='hover:text-white cursor-pointer'>Contact</li>
               <li className='hover:text-white cursor-pointer'>Faqs</li>
               <li className='hover:text-white cursor-pointer'>Terms & Condition</li>
               <li className='hover:text-white cursor-pointer'>Privacy Policy</li>
            </ul>
       </div>
       <div>
         <h5 className='font-pop text-md text-semibold text-white mb-5'>Proxy</h5>
               <ul className='font-pop text-sm text-[#999999] flex flex-col gap-3'>
                  <li className='hover:text-white cursor-pointer'>About</li>
                  <li className='hover:text-white cursor-pointer'>Shop</li>
                  <li className='hover:text-white cursor-pointer'>Product</li>
                  <li className='hover:text-white cursor-pointer'>Track Order</li>
               </ul>
       </div>
       <div>
         <h5 className='font-pop text-md text-semibold text-white mb-5'>Categories</h5>
                  <ul className='font-pop text-sm text-[#999999] flex flex-col gap-3'>
                     <li className='hover:text-white cursor-pointer'>Fruit & Vegetables</li>
                     <li className='hover:text-white cursor-pointer'>Meat & Fish</li>
                     <li className='hover:text-white cursor-pointer'>Bread & Bakery</li>
                     <li className='hover:text-white cursor-pointer'>Beauty & Health</li>
                  </ul>
       </div>
     </div>
     <div className='flex justify-between font-sm text-[#808080] font-pop border-t border-[#808080] py-7.25'>
       <div>Ecobazar eCommerce © 2021. All Rights Reserved</div>
       <div>
         <img src={Footerlogo2} alt="" />
       </div>
     </div>
   </Container>
 </div>
  )
}

export default Footer