import React, { useEffect, useState } from 'react'
import {useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useGlobalStates } from '../Context/Context'
import "../Styles/Boton.css"
import "../Styles/Card.css"




const Card = () => {

const {personaje, setPersonaje, numero, setNumero} = useGlobalStates()

const navigate = useNavigate()



 //funcion numero aleatorio

function numeroAleatorio (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const handleRandom = ()=>{
  setNumero(numeroAleatorio(1, 151))
}

const url = `https://rickandmortyapi.com/api/character/${numero}`

const axiosPersonaje = ()=>{

axios(url)
.then(res=>{
    console.log(res.data)
     //IMPORTANTE CONSOLOGUEAR INFO PARA MANEJAR LA INFO DE LA API
    setPersonaje(res.data)
    
})
}
useEffect(axiosPersonaje, [numero])



return (
    <>
    <div className='Card'>
    <h2>Personaje: {personaje.name} </h2>     
    <img src= {personaje.image} alt="" />
    </div>
    <br />
    <button onClick={handleRandom}>Cambiar personaje</button>
    <br/>
    <button onClick={()=> navigate('/masinfo')} className='boton'   >+ Detalles</button>
   
    </>
    )
}

export default Card