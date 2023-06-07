
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './CharacterDetail.css';

const CharacterDetail = () => {
  const location = useLocation();
  const character = location.state.element;
  console.log(character);
  return (
    <div className='detail'>
    <div className='detail__back'>
    <Link to="/characters">
    <h2 className='detail__back__to'>BACK</h2>
    </Link>
    </div>
      <div className='detail__img'>
        <h1 className='detail__img__title'>{character.name}</h1>
        <img className='detail__img__img' src={character.image} alt={character.name} />
      </div>
      <div className='detail__txt'>
        <p className='detail__txt__in'>Location : {character.location.name}</p>
        <p className='detail__txt__in'>Species : {character.species}</p>
        <p className='detail__txt__in'>Status : {character.status}</p>
        <p className='detail__txt__in'>Origin : {character.origin.name}</p>
        <p className='detail__txt__in'>Gender : {character.gender}</p>
      </div>
    </div>
  )
}

export default CharacterDetail
