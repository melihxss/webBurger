import React from 'react'
import Banner from './images/banneryeni.jpg'
import './styles/aboutUs.css'
function About() {
  return (
    <div className='aboutUsContainer'>
      <img className='backgroundImage' src={Banner} alt="" />
      <h1>Hakkımızda</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ipsum adipisci sapiente at. Quidem animi fuga voluptate eius suscipit. Corporis, quae? Et dicta suscipit nihil libero doloribus? Suscipit enim ullam explicabo, earum ducimus incidunt nam! Aliquid obcaecati numquam soluta quam quidem, quo minima quos, culpa temporibus eveniet voluptatum nihil harum enim voluptas tempora hic iure! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus commodi aliquam similique quaerat incidunt consequuntur libero. Nobis optio possimus facilis, error reprehenderit ipsum quis necessitatibus.</p>
    </div>
  )
}

export default About