import './App.css'
import {  Routes, Route } from 'react-router-dom'
import Card from './Pages/Card'
import Navbar from './Components/Navbar'
import Historia from './Pages/Historia'
import Context from './Context/Context'
import MasInfo from './Pages/MasInfo'


function App() {

  return (
    <> 
    <Navbar/>
    <Context>
    <Routes>
    <Route path='/' element={<Card/>}/>
    <Route path='/historia' element={<Historia/>}/>
    <Route path='/masinfo' element={<MasInfo/>}/>
    </Routes>
    </Context>
    </>
  )
}

export default App
