import React, { useEffect, useState } from "react"
import { useLocation } from "react-router-dom";
import Gallery from "../components/Gallery"


function Home() {
  const [photos, setPhotos] = useState([])
  const location = useLocation();
  const [pathName, setPathName] = useState('');


  function convertArrayToObject(arr) {
    const headers = arr[0];
    const result = arr.slice(1).map(row => {
      const obj = {};
      headers.forEach((header, index) => {
        obj[header.toLowerCase()] = row[index];
      });
      return obj;
    });
    return result;
  }


  useEffect(() => {
    const apiKey = import.meta.env.VITE_GOOGLE_DRIVE_API_KEY;
    console.log(apiKey)

    fetch(`https://sheets.googleapis.com/v4/spreadsheets/1S43Co3DdvwBTsYYumHx_NxQ2X5N-PfzXSO0b1aObQkg/values/A1%3AC100?majorDimension=ROWS&fields=values&key=${apiKey}`, {
      headers: {
        Accept: "application/json"
      }
    })
      .then(response => response.json())
      .then(data => {
        // Handle the response data
        console.log(data.values);
        setPhotos(convertArrayToObject(data.values))

      })
      .catch(error => {
        // Handle any errors
        console.error(error);
      })
  }, [])

  useEffect(() => {
    console.log(location.pathname)
    location.pathname != '/'? setPathName(location.pathname):console.log('annana');
  }, [location.pathname])



  return (
    <div className='App'>
  
      {photos.length > 1 ? <Gallery pathName={pathName} photos={photos} /> : ''}

    </div>
  )
}

export default Home;
