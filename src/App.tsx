import { useState } from 'react'
import axios from 'axios';
import './index.css'

function App() {

  const baseUrl = 'http://localhost:3001/'
  const[zipcode, setZipcode] = useState('')
  const[coords, setCoords] = useState('')

    const postZip = async() => {
      try {
        await axios.post(baseUrl + zipcode)
      } catch (error) {
        console.error('Error getting weather data: ', error)
      }
    }
  return (
    <>
      <form>
        <label>
          Please enter a zip code:
          <input name={zipcode} onChange={e=>setZipcode(e.target.value)} />
        </label>
        <button onClick={postZip}>Submit</button> 
        <p>
          {zipcode}
        </p>
      </form>
    </>
  )
}

export default App
