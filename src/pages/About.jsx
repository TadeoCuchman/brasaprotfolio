import React from "react"
import './About.css'

const About = () => {
  return (
    <div className="about">
      <div className="imgcontainer">
        <img className="aboutImage" src="/BrasaPerfil.jpg" alt="profile photo" />
      </div>
      <div className="text">
        <p>Documentary photographer and filmmaker, Mateo Braselli invites the observer to rediscover the world through his eyes, where he captures the essence of people, focusing on the concept that every individual is unique and irreplaceable. </p>
        <br />
        <p>Linked to the worlds of both skateboarding and surfing since a young age, his style is highly influenced by these disciplines, marvelled by how a brief snapshot of a moment can lead the observer to live a world of emotions and personal experiences, being able to enter in a state of empathy, to understand in his own way.</p>
        <br />
        <p>Influenced by photographers such as Henri Cartier-Bresson, Alexander Rodchenko and Sebastião Salgado amongst others, his work mixes both film and digital, creating that nostalgic vibe of film photography that makes the observer travel to precious memories, connecting in a personal and unique way with the images he is observing.</p>
        <br />
        <p>Emphasising the idea that photography is about immortalising moments in time, Braselli shows us that every moment of ones life is unique and special. His work intends to make us conscious of the briefness of life, to always be present in the... </p>
        <br />
        <p style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
         <span> NOW.</span>
         <br />
         <br />
        <img className='unalome' src="/unalome.jpg" alt="unalome" />
        </p>
        
      </div>
    </div>
  )
};

export default About;
