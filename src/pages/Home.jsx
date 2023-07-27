import React, { useEffect, useState } from "react"
import { useLocation } from "react-router-dom";
import Gallery from "../components/Gallery"


function Home({photos, setLoading, loading}) {
  const [filteredPhotos, setFilteredPhotos] = useState([])

  const location = useLocation();



  
  useEffect(() => {
    setFilteredPhotos(photos.filter(item => item.path == location.pathname));
  }, [location.pathname, photos])



  return (
    <div className='App'>
      
      <Gallery photos={filteredPhotos} setLoading={setLoading} loading={loading}/> 

    </div>
  )
}

export default Home;
