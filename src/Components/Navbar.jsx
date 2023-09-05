import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


const Navbar = () => {

    const navigate = useNavigate()
return (
    <div>
        <h1>Rick & Morty</h1>
        <div style={{display: "flex", justifyContent: "center"}}>
        <button onClick={()=> navigate(-1)}> Atras </button>
        <Link to="/"> <h4 style={{margin:10}}>Personajes</h4> </Link>
        <Link to ="/historia"> <h4 style={{margin:10}}>Historia</h4> </Link>
        

        </div>
    </div>

)
}

export default Navbar