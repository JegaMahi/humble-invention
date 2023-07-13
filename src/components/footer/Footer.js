import React from 'react';
import css from './Footer.css';
import { BiLogoInstagramAlt} from "react-icons/bi";
import { BsTwitter , BsFacebook} from "react-icons/bs";

function Footer() {
    return (
      
      <div className="footer-container">
        <div className="footer">
          <div className="about-us">
       <h5 className="footer-headings">About Us</h5>
       <ul>
        <li className='list'>Services</li>
        <li className='list'>Help</li>
        <li className='list'>Affiliate</li>
        <li className='list'>Privacy</li>
       </ul>
       </div>
       <div className="contact-us">
        <h5 className="footer-headings">Contact Us</h5>
        <div >
        <BiLogoInstagramAlt ></BiLogoInstagramAlt>
        <BsTwitter className='contact-icons'></BsTwitter>
        <BsFacebook className='contact-icons'></BsFacebook>
        </div>
        </div>
</div>
      </div>
    );
  }
  
  export default Footer;