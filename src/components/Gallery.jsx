import React from "react"
import { useEffect, useState } from "react";
import './Gallery.css'


const Gallery = ({pathName, photos}) => {
  
  const [selectedImg, setSelectedImg] = useState({ })

  useEffect(() => { 
    setSelectedImg(photos[0])
  },[])

  useEffect(() => {
    photos.filter(photo => photo.album == pathName )
    console.log('holaaa', photos);
  },[pathName])


  return (
    <div id='gallery'>
      <div className="imgcontainer">
       <img id='mainImg' src={selectedImg.url} alt={selectedImg.name} />
      </div>
       <ul>
         {photos.map((photo) => <img className='littlePhoto' src={photo.url} lowsrc={photo.url} alt={photo.name} key={photo.name} onClick={() => setSelectedImg({url:photo.url, name:photo.name})}/>)
          } 
      </ul>
    </div>
  )
};

export default Gallery;
