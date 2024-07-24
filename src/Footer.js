import React from 'react'
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import './styles/Footer.css'

function Footer() {
  return (
    <div className='footerContainer'>
      <h1>Bizimle iletişime geçin!</h1>
      <div className='logos'>
      <FaFacebook className='footerLogo' />
      <FaInstagram className='footerLogo' />
      <FaXTwitter className='footerLogo' />
      </div>
      <p>Tüm haklar saklıdır | BurgerYiyelim</p>
      
    </div>
  )
}

export default Footer