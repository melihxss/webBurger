import React from 'react'
import Logo from './images/burgerlogo.png'
import { Link,useNavigate } from 'react-router-dom'
import './styles/navbar.css'
function Navbar() {
    const navigate = useNavigate();
  return (
    <nav className='navBar'>
        <div className='logo'>
            <img onClick={() =>{
                navigate('/')
            }} src={Logo} alt='resim' />
        </div>
        <div className='navbarMenu'>
            <Link to={'/'}>Anasayfa</Link>
            <Link to={'/menu'}>Menü</Link>
            <Link to={'/aboutUs'}>Hakkımızda</Link>
            <Link to={'/contact'}>İletişim</Link>
        </div>
    </nav>
  )
}

export default Navbar