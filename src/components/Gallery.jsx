import React from "react"
import { useEffect, useState } from "react";
import './Gallery.css'
import gif from '/cartoon.gif'


function changeImage() {
  var image = document.getElementById('mainImg');
  image.classList.add('hide');

  setTimeout(function () {
    image.classList.remove('hide');
  }, 1000); // Adjust the delay here to match the fade-out duration in CSS
}

const Gallery = ({ photos, setLoading, loading }) => {

  const [selectedImg, setSelectedImg] = useState({})
  const [photoIndex, setPhotoIndex] = useState(0)

  const handleKeyPress = (event) => {
    if (event.key === "ArrowRight") {
      const nextButton = document.querySelector(".nextButton");
      if (nextButton) {
        nextButton.click();
      }
    } else if (event.key === "ArrowLeft") {
      const beforeButton = document.querySelector(".beforeButton");
      if (beforeButton) {
        beforeButton.click();
      }
    }
  };

  useEffect(() => {

    if (photos.length > 0) {
      setSelectedImg({ ...photos[0], index: 0 })
      let firstImage = document.querySelector('.imagesList').children[0];
      firstImage.classList.remove('noSelected')
    }

    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };

  }, [photos])

  useEffect(() => {
    const rect = document.getElementById('mainImg').getBoundingClientRect()
    window.scrollTo(0, rect.top - 20);
  }, [loading])

  return (
    <div id='gallery' style={{ position: 'relative' }}>
      <NextButton photos={photos} setSelectedImg={setSelectedImg} selectedImg={selectedImg} />
      <BeforeButton photos={photos} setSelectedImg={setSelectedImg} selectedImg={selectedImg} />
      {loading ? <Gif /> : ''}
      <div style={{ position: 'relative' }}>
        <img id='mainImg' rel="preconnect" style={loading ? { minHeigth: '80vh', display: 'none' } : {}} src={selectedImg.url} alt={selectedImg.name} onLoad={(e) => {
          setLoading(false)
        }} />
      </div>
      <ul className="imagesList" style={loading ? { opacity: '0' } : {}}>
        {photos.map((photo, index) => <img loading="lazy" rel="preconnect" className='littlePhoto noSelected' src={photo.url} lowsrc={photo.url} alt={photo.name} key={photo.name}
          onClick={(e) => {
            if (selectedImg.url !== photo.url) {

              let allImages = document.querySelector('.imagesList').children;
              for (var i = 0; i < allImages.length; i++) {
                allImages[i].classList.add('noSelected')
              }

              e.target.classList.remove('noSelected')
              changeImage()
              setTimeout(() => {
                setSelectedImg({ url: photo.url, name: photo.name, index: index })
              }, 400)
            }
          }} />)
        }
      </ul>
    </div>
  )
};

const Gif = () => {
  return (<img src={gif} style={{ marginTop: '100px', marginBottom: '100px', height: '200px', width: 'auto' }}></img>)
}

const NextButton = ({ selectedImg, setSelectedImg, photos }) => {
  const lastIndex = photos.length - 1;
  const newIndex = selectedImg.index == lastIndex ? 0 : selectedImg.index + 1;
  const nextPhoto = photos[newIndex];

  return (
    <div className="nextButton" style={{ position: 'absolute', width: '50%', height: '100%', right: '0', top: '0', opacity: '0%', zIndex:'100', cursor:'grab'}} onClick={() => {
      let allImages = document.querySelector('.imagesList').children;
      for (var i = 0; i < allImages.length; i++) {
        allImages[i].classList.add('noSelected');
      }
      allImages[newIndex].classList.remove('noSelected');

      changeImage()
      setTimeout(() => {
        setSelectedImg({ url: nextPhoto.url, name: nextPhoto.name, index: newIndex })
      }, 400)
    }}>
      {'>'}
    </div>
  )
}

const BeforeButton = ({ selectedImg, setSelectedImg, photos }) => {
  const lastIndex = photos.length - 1;
  const newIndex = selectedImg.index == 0 ? lastIndex : selectedImg.index - 1;
  const nextPhoto = photos[newIndex];


  return (
    <div className="beforeButton" style={{ position: 'absolute', width: '50%', height: '100%', left: '0', top: '0', opacity: '0%', zIndex:'100', cursor:'grab' }} onClick={() => {
      let allImages = document.querySelector('.imagesList').children;
      for (var i = 0; i < allImages.length; i++) {
        allImages[i].classList.add('noSelected');
      }
      allImages[newIndex].classList.remove('noSelected');

      changeImage()
      setTimeout(() => {
        setSelectedImg({ url: nextPhoto.url, name: nextPhoto.name, index: newIndex })
      }, 400)
    }}>
      {'<'}
    </div>
  )
}

export default Gallery;
