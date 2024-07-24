import React from 'react'
import { Data } from './Datas.js/Data'
import MenuList from './MenuList'
import './styles/Menu.css'
function Menu() {
  return (
    <div className='menuContainer'>
      <h1 className='menuTitle'>Burgerlerimiz</h1>
      <div className='menuList'>
      {Data.map((menuItem,key) => {
        return <MenuList image={menuItem.image} name={menuItem.name} content={menuItem.content} price={menuItem.price} key={key} />
      })}
      </div>
      
    </div>
  )
}

export default Menu