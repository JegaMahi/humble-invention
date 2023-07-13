import React from 'react';
import css from './Banner.css';
import img1 from './banner3 1.png';
import img2 from './banner2 1.png';
import img3 from './banner1 1.png';
import { useEffect, useState } from 'react';

function Banner() {
 const [ selectedimage,setSelectedImage]=useState(0);
 const [allIamges, setAllImages] = useState([img1,img2,img3])

 useEffect(()=>{
  setInterval(()=>{
    setSelectedImage(selectedimage => selectedimage <2 ? selectedimage +1:0)
  },2000)
 },[])

   return (
     <div>

    
    <img className='banner-image' src={allIamges[selectedimage]} />
    
    
    
    
</div>
    

    
    );
  }
  
  export default Banner;


 