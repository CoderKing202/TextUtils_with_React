import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/favicon.ico'
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import About from './components/About'
import Alert from './components/Alert'
const Test =()=>{
  return(<h1>Hello</h1>)
}

function App() {
  const [mode,setMode] = useState('light')//Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type)=>{
    setAlert({message,type})
    setTimeout(()=>{
      setAlert(null)
    },1500)
  }
  const removeBodyClasses=()=>{
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
  }

  const toggleMode = (cls)=>{
    removeBodyClasses()
    document.body.classList.add("bg-"+cls)
  if(mode === "light"){
    setMode("dark")
    document.body.style.backgroundColor="#042743"
    showAlert("Dark mode has been enabled", "success")
  } 
  else{
    setMode("light")
    document.body.style.backgroundColor="white"
    showAlert("Light mode has been enabled", "success")
  } 
  }

  return (
 <>
 <Router>
<Navbar title={"TextUtils"} mode={mode} toggleMode={toggleMode} />
<Alert alert={alert}/>
<div className="container my-3">
<Routes>
  <Route path='/React_with_Harry/'element={<TextForm heading="TextUtils - Word Counter, Character Counter, Remove extra Spaces" mode={mode} 
showAlert={showAlert}/>}/> 
  <Route path="/React_with_Harry/about" element={<About mode={mode}/>}/>

</Routes>
</div>
</Router>

 </>
  )
}

export default App
