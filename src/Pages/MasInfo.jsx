import React from 'react'
import { useGlobalStates } from '../Context/Context'
import { useEffect} from 'react'
import axios from 'axios'


const MasInfo = () => {

    const {personaje, setPersonaje, numero, setNumero} = useGlobalStates()

    // falta traer el axios de card y hacer todos los useState en Context

    const url = `https://rickandmortyapi.com/api/character/${numero}`

const axiosPersonaje = ()=>{

axios(url)
.then(res=>{
    console.log(res.data)
     //IMPORTANTE CONSOLOGUEAR INFO PARA MANEJAR LA INFO DE LA API
    setPersonaje(res.data)
    
})
}
useEffect(axiosPersonaje, [])

return (
    <div className='Card'>
    <h3>Mas detalles del personaje</h3>
    <p> Id: {personaje.id}  </p>
    <p> Nombre: {personaje.name}  </p>
    <p>Status: {personaje.status}</p>
    <p> Species: {personaje.species}  </p>
    <p> Genero: {personaje.gender}   </p>
    <p> Lugar: {personaje.location.name}  </p>
    <p> Estado: {personaje.status} </p>
    </div>
)
}

export default MasInfo