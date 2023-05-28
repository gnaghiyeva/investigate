import React from 'react'
import footerStyle from "./footer.module.css"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
const Footer = () => {
  return (
   <footer className={footerStyle.footer} >
    <div style={{padding:'0 60px'}}>
       <p style={{color:'white'}}>Copyright ©2023 All rights reserved | This template is made with <FavoriteBorderIcon/> <br/> <span style={{color:'blue', textDecoration:'underline'}}>by</span> Colorlib</p> 
    </div>
    <div>
        <ul className={footerStyle.footer_list}>
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Blog</li>
            <li>Contact</li>
        </ul>
    </div>
   </footer>
  )
}

export default Footer