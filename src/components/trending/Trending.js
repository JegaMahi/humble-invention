import React from 'react';
import { useState  } from 'react';
import css from './Trending.css';
import img1 from './cooker.png';
import img2 from './jeans.png';
import img3 from './facewash.png';

import img5 from './iphone.png';
import img6 from './headphone.png';
import img7 from './shower.png';
import img8 from './shirt.png';
import { AiFillStar} from "react-icons/ai";
import { BsStarHalf} from "react-icons/bs";
import { AiOutlineHeart} from "react-icons/ai";
import { AiTwotoneHeart} from "react-icons/ai";







function Trending() {

    const [color, setColor] = useState('');
    const [color2, setColor2] = useState('');
    const [color3, setColor3] = useState('');
    const [color4, setColor4] = useState('');
    const [color5, setColor5] = useState('');
    const [color6, setColor6] = useState('');
    const [color7, setColor7] = useState('');
    const [color8, setColor8] = useState('');
  
    const changeColor1 = () => {
      const newColor = color === 'black' ? 'red' : 'black';
      setColor(newColor);
    };
    const changeColor2 = () => {
      const newColor = color2 === 'black' ? 'red' : 'black';
      setColor2(newColor);
    };
    const changeColor3 = () => {
      const newColor = color3 === 'black' ? 'red' : 'black';
      setColor3(newColor);
    };
    const changeColor4 = () => {
      const newColor = color4 === 'black' ? 'red' : 'black';
      setColor4(newColor);
    };
    const changeColor5 = () => {
      const newColor = color5 === 'black' ? 'red' : 'black';
      setColor5(newColor);
    };
    const changeColor6 = () => {
      const newColor = color6 === 'black' ? 'red' : 'black';
      setColor6(newColor);
    };
    const changeColor7 = () => {
      const newColor = color7 === 'black' ? 'red' : 'black';
      setColor7(newColor);
    };
    const changeColor8 = () => {
      const newColor = color8 === 'black' ? 'red' : 'black';
      setColor8(newColor);
    };
     
    return (
      <div className='trending-container'>
        <h5>Trending <span className='cont-title'>Products</span></h5>
        <div className='card-container1'>
            <div className='card1'>

            <img className='trend-image' src={img1}   alt='' />
            <h4>Hawkins 2 litre cooker onion pink.Hard anodised...</h4>
            <h4>4.0 <AiFillStar color='rgb(240, 216, 6)'/><AiFillStar color='rgb(240, 216, 6)'/><AiFillStar color='rgb(240, 216, 6)'/><AiFillStar color='rgb(240, 216, 6)'/></h4>
        
            <div className='price1'>
            <h3 className='price'>Rs.999.00</h3>
            <div className='btn-and-heart'>
            <button className='btn-buy'>BUY NOW</button>
            <AiTwotoneHeart  className='heart' style={{ color: color }} onClick={changeColor1}>c</AiTwotoneHeart>
            </div>
           
            </div>
            </div>
            <div className='card1'>
            <img className='trend-image' src={img2}   alt='' />
            <h4>Premium Jeans Pant - Blue world Fashion-Buy 1 Get 1..</h4>
            <h4>4.0 <AiFillStar color='rgb(240, 216, 6)'/><AiFillStar color='rgb(240, 216, 6)'/><AiFillStar color='rgb(240, 216, 6)'/><AiFillStar color='rgb(240, 216, 6)'/></h4>
            <div className='price1'>
            <h3 className='price'>Rs.899.00</h3>
            <div className='btn-and-heart'>
            <button className='btn-buy'>BUY NOW</button>
            <AiTwotoneHeart className='heart' style={{ color: color2 }} onClick={changeColor2}>click me</AiTwotoneHeart>
            
            </div>
           
            </div>
            </div>
            <div className='card1'>
            <img className='trend-image' src={img3}   alt='' />
            <h4>Curology Face Wash - Chemical free - 150gms</h4>
            <h4>4.5 <AiFillStar color='rgb(240, 216, 6)'/><AiFillStar color='rgb(240, 216, 6)'/><AiFillStar color='rgb(240, 216, 6)'/><AiFillStar color='rgb(240, 216, 6)'/><BsStarHalf color='rgb(240, 216, 6)'/></h4>
            <div className='price1'>
            <h3 className='price'>Rs.99.00 </h3>
            <div className='btn-and-heart'>
            <button className='btn-buy'>BUY NOW</button>
            <AiTwotoneHeart className='heart' style={{ color: color3 }} onClick={changeColor3}>click me</AiTwotoneHeart>
           
           </div>
           
            </div>
            </div>
            <div className='card1'>
            <img className='trend-image' src={img6}   alt='' />
            <h4>JBL Headphone XR6000-Bluetooth & wireless</h4>
            <h4>4.5 <AiFillStar color='rgb(240, 216, 6)'/><AiFillStar color='rgb(240, 216, 6)'/><AiFillStar color='rgb(240, 216, 6)'/><AiFillStar color='rgb(240, 216, 6)'/><BsStarHalf color='rgb(240, 216, 6)'/></h4>
            <div className='price1'>
            <h3 className='price'>Rs.99.00 </h3>
            <div className='btn-and-heart'>
            <button className='btn-buy'>BUY NOW</button> 
            <AiTwotoneHeart className='heart' style={{ color: color4 }} onClick={changeColor4}>click me</AiTwotoneHeart>
            </div>
            </div>
            </div>

            <div className='card1'>
            <img className='trend-image' src={img5}   alt='' />
            <h4>Apple iPhone - 14 (6 gb ram, 254)- Purple & White</h4>
            <h4>4.5 <AiFillStar color='rgb(240, 216, 6)'/><AiFillStar color='rgb(240, 216, 6)'/><AiFillStar color='rgb(240, 216, 6)'/><AiFillStar color='rgb(240, 216, 6)'/><BsStarHalf color='rgb(240, 216, 6)'/></h4>
            <div className='price1'>
            <h3 className='price'>Rs.80,999.00</h3>
            <div className='btn-and-heart'>
            <button className='btn-buy'>BUY NOW</button>
            <AiTwotoneHeart className='heart' style={{ color: color5 }} onClick={changeColor5}>click me</AiTwotoneHeart>
            
            </div>
           
            </div>
            </div>
            <div className='card1'>
            <img className='trend-image' src={img6}   alt='' />
            <h4>JBL Headphone XR6000- Bluetooth & wired</h4>
            <h4>4.5 <AiFillStar color='rgb(240, 216, 6)'/><AiFillStar color='rgb(240, 216, 6)'/><AiFillStar color='rgb(240, 216, 6)'/><AiFillStar color='rgb(240, 216, 6)'/><BsStarHalf color='rgb(240, 216, 6)'/></h4>
            <div className='price1'>
            <h3 className='price'>Rs.1999.00</h3>
            <div className='btn-and-heart'>
            <button className='btn-buy'>BUY NOW</button>
            <AiTwotoneHeart className='heart' style={{ color: color6 }} onClick={changeColor6}>click me</AiTwotoneHeart>
            
            </div>
           
            </div>
            </div>
            <div className='card1'>
            <img className='trend-image' src={img7}   alt='' />
            <h4>Vanguard Bathing shower (premium)- Silver Varient</h4>
            <h4>4.0 <AiFillStar color='rgb(240, 216, 6)'/><AiFillStar color='rgb(240, 216, 6)'/><AiFillStar color='rgb(240, 216, 6)'/><AiFillStar color='rgb(240, 216, 6)'/></h4>
            <div className='price1'>
            <h3 className='price'>Rs.499.00</h3>
            <div className='btn-and-heart'>
            <button className='btn-buy'>BUY NOW</button>
            <AiTwotoneHeart className='heart' style={{ color: color7 }} onClick={changeColor7}>click me</AiTwotoneHeart>
            
            </div>
           
            </div>
            </div>
            <div className='card1'>
            <img className='trend-image' src={img8}   alt='' />
            <h4>DERBY - Denim shirt - Full sleeve, 780 Gsm</h4>
            <h4>4.0 <AiFillStar color='rgb(240, 216, 6)'/><AiFillStar color='rgb(240, 216, 6)'/><AiFillStar color='rgb(240, 216, 6)'/><AiFillStar color='rgb(240, 216, 6)'/></h4>
            <div className='price1'>
            <h3 className='price'>Rs.599.00 </h3>
            <div className='btn-and-heart'>
            <button className='btn-buy'>BUY NOW</button>
            <AiTwotoneHeart className='heart' style={{ color: color8 }} onClick={changeColor8}>click me</AiTwotoneHeart>
           
           </div>
           
            </div>
        </div>

            </div>
       
      </div> 
    );
    }
  export default Trending;
