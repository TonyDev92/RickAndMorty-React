import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {  getCharacters } from '../../redux/actions/fetch';
import { useNavigate } from 'react-router-dom';
import './Galery.css';

const Galery = () => {
    const [characters, setCharacters] = useState([]);
    const response = useSelector((state) => state.data.data);
    const dispatch = useDispatch();
    const [ page , setPage] = useState(1);
    const navigate = useNavigate();

    const handlePage = () =>{
        if(page !== 42){
            setPage( page + 1);
        }
        dispatch(getCharacters(page))
        setCharacters(response)
    }
    const previusPage = () => {
        if(page !== 0){
            setPage( page - 1)
            dispatch(getCharacters(page))
            setCharacters(response)
        }
    }
    
    const characterDetail = (e, index) => {
        navigate('charactersDetail', {state: {element: e , index}})
    }
    useEffect(() => {
        dispatch(getCharacters(page))
        
    }, [dispatch , page])

    useEffect(() => {
        if(response){
            setCharacters(response)
        }
    },[setCharacters, response])

    return (
        <div className='galery'>
        <div className='galery__container'>
            <button className='galery__container__btn' onClick={() => previusPage()}>Previus Page</button>
            <button className='galery__container__btn' onClick={() => handlePage()}>next page</button>
        </div>
            {characters.map((character, index) => 
            <div className='charcard' key={index}>
            <h2 className='charcard__title'>{character.name}</h2>
                <img className='charcard__img' onClick={() => characterDetail(character, index)} src={character.image} alt={character.name}/>
            </div>)}
        </div>
    )
}

export default Galery;
