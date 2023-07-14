import React, { useEffect, useState } from "react"
import { useLocation } from "react-router-dom";
import Gallery from "../components/Gallery"


function Home({photos}) {
  const [filteredPhotos, setFilteredPhotos] = useState([])
  const location = useLocation();



  
  useEffect(() => {
    
    setFilteredPhotos(photos.filter(item => item.path == location.pathname));
    console.log(filteredPhotos);

    console.log(location.pathname);

    window.scrollTo(0, 170); // Scroll to 500 pixels from the top
 

  }, [location.pathname, photos])

  useEffect( () => {
    console.log( window.scrollY);

  },[ window.scrollY] )



  return (
    <div className='App'>
  
      {photos.length > 1 ? <Gallery photos={filteredPhotos} /> : ''} 

    </div>
  )
}

export default Home;
