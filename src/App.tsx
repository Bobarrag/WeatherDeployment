import { useState } from 'react'
import axios from 'axios';
import './index.css'

function App() {

  const baseUrl = 'http://localhost:3001/'
  const[zipcode, setZipcode] = useState('')
  const[coords, setCoords] = useState({})

    const postZip = async(e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      try {
        const res = await axios.post(baseUrl + zipcode)
        console.log(res)
      } catch (error) {
        console.error('Error getting weather data: ', error)
      }
    }
  return (
    <>
      <form onSubmit={(e) =>postZip(e)}>
        <label>
          Please enter a zip code:
          <input name='zipcode' value={zipcode} onChange={(e)=>setZipcode(e.target.value)} />
        </label>
        <button type='submit'>Submit</button> 
        <p>
          {zipcode}
        </p>
      </form>
    </>
  )
}

export default App
