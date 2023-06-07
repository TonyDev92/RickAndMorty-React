import React from 'react'
import './SlashPage.css'
import { Link } from 'react-router-dom'
const SlashPage = () => {

  return (
    <div className='slash'>
        <div className='slash__title'>
        <h1 className='slash__title__in'>Rick and Morty</h1>
        </div>
        <div className='slash__cont'>
        <Link to='/characters'>
        <button className='slash__cont__btn'>Characters</button>
        </Link>
        </div>
    </div>
  )
}

export default SlashPage
