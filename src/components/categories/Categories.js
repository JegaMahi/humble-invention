import React from 'react';
import css from './Categories.css';
import img1 from './electronics1.png';
import img2 from './fashion.png';
import img3 from './kitchen.png';
import img4 from './gift.png';
import img5 from './cosmetics.png';
import img8 from './toys1.png';



function Categories() {
    return (
      <div className="Categories-container">
        
        <h5><span className='cont-title'>Categories</span></h5>
        <div className='cate-container'>
       
            <div className='cate1'>
                {/* <h5>hello</h5> */}
                  <img className='cate-image' src={img1}   alt='' />
                <h4>Electronics</h4>
              
            </div>
            <div className='cate1'>
                {/* <h5>hello</h5> */}
                 <img className='cate-image' src={img2}   alt='' />
                <h4>Fashion</h4>
              
            </div>
            <div className='cate1'>
                {/* <h5>hello</h5> */}
                 <img className='cate-image' src={img3}   alt='' />
                <h4>Kitchen Applience</h4>
              
            </div>
            <div className='cate1'>
                {/* <h5>hello</h5> */}
                  <img className='cate-image' src={img5}   alt='' />
                <h4>Cosmentics</h4>
              
            </div>

            <div className='cate1'>
                {/* <h5>hello</h5> */}
                 <img className='cate-image' src={img4}   alt='' />
                <h4>Gifts</h4>
              
            </div>
            <div className='cate1'>
                {/* <h5>hello</h5> */}
                 <img className='cate-image' src={img5}   alt='' />
                <h4>Cosmentics</h4>
              
            </div>
            <div className='cate1'>
                {/* <h5>hello</h5> */}
                 <img className='cate-image' src={img8}   alt='' />
                <h4>Toys</h4>
              
            </div>
            <div className='cate1'>
                {/* <h5>hello</h5> */}
                 <img className='cate-image' src={img2}   alt='' />
                <h4>Fashion</h4>
              
            </div>
           
           
            </div>
            {/* <div className='cate-container2'>
            
            </div> */}
        </div>
       
      
    );
  }
  
  export default Categories;