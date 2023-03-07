import React from 'react'

const Header = () => {
  return (
    <div className='header'>
        <img  className='img' src={require('../logo/hollywood.png')} alt="" />
        <h1> Welcom to Movies Review</h1>
    </div>
  )
}

export default Header