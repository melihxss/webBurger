import React from 'react'

function MenuList({name,image,price,content}) {
  return (
    <div className='menuCard'>
        <div className='menuItem'>
        <img src={image} alt="" />
        <h1 className='productName'>{name}</h1>
        <h6 className='poductContent'>{content}</h6>
        <h5 className='productPrice'>{price} TL</h5>
        </div>
        
    </div>
  )
}

export default MenuList