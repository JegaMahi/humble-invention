import React from 'react';
import css from './Testimonial.css';
import { AiFillStar} from "react-icons/ai";
import img1 from './micheal-dam-mez.png';
import img2 from './christopher campb.png';
import img3 from './james sammuel.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


function Testimonial() {
    return (
        
      <div className="testimonial-container">
        <h5><span className='cont-title'>Testimonials</span></h5>


        <Swiper
      spaceBetween={50}
      slidesPerView={1}
     
    >
     
      <SwiperSlide>

      <div className='testimonial'>
  <div className='profile'>
      <div className='profile-pic'>
      <img className='user-pic' src={img1}   alt='' />
      </div>
      <div className='profile-name'>
          <h3>Micheal Dam Mez <br/>4.0 <AiFillStar color='rgb(240, 216, 6)'/><AiFillStar color='rgb(240, 216, 6)'/><AiFillStar color='rgb(240, 216, 6)'/><AiFillStar color='rgb(240, 216, 6)'/></h3>
      </div>
  </div>
  <div className='review'>
      <p>Packup is one of my favorite E-Commers Website for Purchase any kind of products</p>
  </div>
  </div>
       
      </SwiperSlide>


      <SwiperSlide>

      <div className='testimonial'>
  <div className='profile'>
      <div className='profile-pic'>
      <img className='user-pic' src={img2}   alt='' />
      </div>
      <div className='profile-name'>
          <h3>Christopher Campb <br/>4.0 <AiFillStar color='rgb(240, 216, 6)'/><AiFillStar color='rgb(240, 216, 6)'/><AiFillStar color='rgb(240, 216, 6)'/><AiFillStar color='rgb(240, 216, 6)'/></h3>
      </div>
  </div>
  <div className='review'>
      <p>Packup is one of my favorite E-Commers Website for Purchase any kind of products</p>
  </div>
  </div>

      </SwiperSlide>


      <SwiperSlide>
    
      <div className='testimonial'>
  <div className='profile'>
      <div className='profile-pic'>
      <img className='user-pic' src={img3}   alt='' />
      </div>
      <div className='profile-name'>
          <h3>James Sammuel <br/>4.0 <AiFillStar color='rgb(240, 216, 6)'/><AiFillStar color='rgb(240, 216, 6)'/><AiFillStar color='rgb(240, 216, 6)'/><AiFillStar color='rgb(240, 216, 6)'/></h3>
      </div>
  </div>
  <div className='review'>
      <p>Packup is one of my favorite E-Commers Website for Purchase any kind of products</p>
  </div>
  </div>

      </SwiperSlide>
      
      
    </Swiper>
   
    <div className='slide-line'>
      <h1>_</h1>
      <h1>_</h1>
      <h1>_</h1>
      </div>
      <hr></hr>
      </div>
    );
  }
  
  export default Testimonial;



  