import React, {useEffect} from 'react'

export default function Slider1() {
  let count = 1;

useEffect( () => {
  
  document.getElementById("radio1").checked = true
})

  setInterval( function (){
    nextImage();
    
  }, 2000)

  function nextImage(){
    count++;
    if(count > 4) {
      count = 1;
    }
    document.getElementById("radio"+count).checked = true
  }
  return (
    <div className='slider mx-auto my-0 w-[200px] h-[300px] overflow-hidden '>
    <div className='slides w-[400%] h-[300px] flex'>
        <input className='hidden  ' type="radio" name="radio-btn" id="radio1" />
        <input className='hidden ' type="radio" name="radio-btn" id="radio2" />
        <input className='hidden' type="radio" name="radio-btn" id="radio3" />
        <input className='hidden' type="radio" name="radio-btn" id="radio4" />

      <div className='slide w-1/4 relative first '>
        <img className='w-[200px]'   src="https://picsum.photos/id/237/200/300" alt="img1" />
      </div>

      <div className='slide w-1/4 relative'>
        <img className='w-[200px]' src="https://picsum.photos/id/238/200/300" alt="img2" />
      </div>
 
        <div className='slide w-1/4 relative'>
         <img className='w-[200px]'   src="https://picsum.photos/id/239/200/300" alt="img3" />
        </div>

        <div className='slide w-1/4 relative'>
         <img className='w-[200px]' src="https://picsum.photos/id/240/200/300" alt="img4" />
        </div>


        <div className="navigation-auto ">
          <div className='  auto-btn1'></div>
          <div className='  auto-btn2'></div>
          <div className='  auto-btn3'></div>
          <div className='  auto-btn4'></div>
        </div>
      </div>
     

      <div className="manual-navigation absolute flex w-[200px] gap-2 -mt-[40px] justify-center">
        <label className=" manual-btn border-2 border-solid border-white p-1 rounded-lg cursor-pointer transition-colors duration-700 hover:bg-white  " htmlFor="radio1"></label>
        <label className=" manual-btn border-2 border-solid border-white p-1 rounded-lg cursor-pointer transition duration-700 hover:bg-white " htmlFor="radio2"></label>
        <label className="manual-btn border-2 border-solid border-white p-1 rounded-lg cursor-pointer transition duration-700 hover:bg-white " htmlFor="radio3"></label>
        <label className="manual-btn border-2 border-solid border-white p-1 rounded-lg cursor-pointer transition duration-700 hover:bg-white " htmlFor="radio4"></label>
      </div>

    </div>
  )
}