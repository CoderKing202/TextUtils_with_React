import { useState } from 'react'
import NavBar from './NavBar'
import Shop from './Shop'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar/>
      <div className="container">
          <Shop/>
      </div>
      </>
  )
}

export default App
