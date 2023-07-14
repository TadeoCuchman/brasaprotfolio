import React from "react"
import { useEffect, useState } from "react";
import './Gallery.css'


const Gallery = ({photos}) => {
  
  const [selectedImg, setSelectedImg] = useState({ })

  useEffect(() => { 
    if(photos.length > 0) {
      setSelectedImg(photos[0])
      let firstImage = document.querySelector('.imagesList').children[0];
      firstImage.classList.remove('noSelected')
    }
  },[photos])


  
  function changeImage() {
    var image = document.getElementById('mainImg');
    image.classList.add('hide');
  
    setTimeout(function() {
      image.classList.remove('hide');
    }, 1000); // Adjust the delay here to match the fade-out duration in CSS
  }

  

  return (
    <div id='gallery'>
      <div className="imgcontainer">
       <img id='mainImg' src={selectedImg.url} alt={selectedImg.name} />
      </div>
       <ul className="imagesList">
         {photos.map((photo) => <img className='littlePhoto noSelected' src={photo.url} lowsrc={photo.url} alt={photo.name} key={photo.name} onClick={(e) => {
           if(selectedImg.url !== photo.url){
            
             let allImages = document.querySelector('.imagesList').children;
             for (var i = 0; i < allImages.length; i++) {
               allImages[i].classList.add('noSelected')
             }
             
            e.target.classList.remove('noSelected')
            changeImage()
            setTimeout(() => {
              setSelectedImg({url:photo.url, name:photo.name})
            },400)
          }
          }}/>)
          } 
      </ul>
    </div>
  )
};

export default Gallery;
