import { useState } from 'react'
import './index.css'

function App() {

  const[zipcode, setZipcode] = useState('')

  return (
    <>
      <form>
        <label>
          Please enter a zip code:
          <input name="zipCode" />
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default App
