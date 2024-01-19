import { useState } from 'react'
import './index.css'

function App() {

  const[zipcode, setZipcode] = useState('')

  return (
    <>
      <form>
        <label>
          Please enter a zip code:
          <input name={zipcode} onChange={e=>setZipcode(e.target.value)} />
        </label>
        <button type="submit">Submit</button> 
        <p>
          {zipcode}
        </p>
      </form>
    </>
  )
}

export default App
