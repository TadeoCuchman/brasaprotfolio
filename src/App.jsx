import React, {useEffect, useState} from 'react';
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Footer from "./components/Footer"
import Header from "./components/Header"

import './App.css'

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [titles, setTitles] = useState([]);
  const [loading, setLoading] = useState(false)

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


  function getUniqueHeadersValues(data) {
    const uniqueValues = [];
  
    data.forEach(item => {
      const { pagina, subpagina, path } = item;
      const obj = { pagina, path };
  
      const existingObj = uniqueValues.find(val => val.pagina === pagina);
      if (existingObj) {
        if (subpagina && !existingObj.subpaginas.some(val => val.subpagina === subpagina)) {
          existingObj.subpaginas.push({ subpagina, path });
          existingObj.path = null;
        }
      } else {
        obj.subpaginas = subpagina ? [{ subpagina, path }] : [];
        uniqueValues.push(obj);
      }
    });
  
    return uniqueValues;
  }


  useEffect(() => {
    const apiKey = import.meta.env.VITE_GOOGLE_DRIVE_API_KEY;
    const sheetId = import.meta.env.VITE_GOOGLE_SHEET_ID;
    console.log(apiKey)

    fetch(`https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/A1%3AE?majorDimension=ROWS&fields=values&key=${apiKey}`, {
      headers: {
        Accept: "application/json"
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log(data.values);
        setPhotos(convertArrayToObject(data.values));
        setTitles(getUniqueHeadersValues(convertArrayToObject(data.values)));    

      })
      .catch(error => {
        console.error(error);
      })
  }, [])




  return (
    <BrowserRouter>
      <Header titles={titles} setLoading={setLoading} loading={loading}/>
      <Routes>
        <Route path="/*" element={<Home photos={photos} setLoading={setLoading} loading={loading}/>} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
