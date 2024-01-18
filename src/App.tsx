import { useState } from 'react'
import './Components/Dropdown'
import './index.css'
import Dropdown from './Components/Dropdown'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="bg-red-300 max-w-sm flex content-center mx-auto" >
        <Dropdown></Dropdown>
      </div>
    </>
  )
}

export default App
