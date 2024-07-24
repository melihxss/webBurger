import React from 'react'
import BurgerI from './images/banneryeni.jpg'
import { useNavigate } from 'react-router-dom'
import './styles/Home.css'


function Home() {
  const navigate = useNavigate();
  return (
    <div className='homeContainer' style={{backgroundImage:`url(${BurgerI})`}}>
      <div className='order'>
        <button onClick={() =>{
          navigate('/menu')
          }} className='orderButton'>Sipariş ver
        </button>
      </div>
      
      
    </div>
  )
}

export default Home