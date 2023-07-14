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
  }, [location.pathname, photos])



  return (
    <div className='App'>
  
      {photos.length > 1 ? <Gallery photos={filteredPhotos} /> : ''} 

    </div>
  )
}

export default Home;
