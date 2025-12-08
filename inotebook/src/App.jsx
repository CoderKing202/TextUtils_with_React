import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import Home from './components/Home'
import About from './components/About'
import NoteState from './context/notes/NoteState'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NoteState>
      {/* it will provide the data to the compoent coming inside it */}
      <Router>
         <NavBar/>
         <div className='container'>
          <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      </Routes>
      </div>
      </Router>
      
      </NoteState>
    </>
  )
}

export default App
