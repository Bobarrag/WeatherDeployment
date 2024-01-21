import { useState } from 'react'
import axios from 'axios';
import './index.css'

function App() {

  const baseUrl = 'http://localhost:3001/'
  const[zipcode, setZipcode] = useState('');
  const[weather, setWeather] = useState<WeatherData | null>(null);

  interface WeatherData {
    data:{
      current:{
        temperature_2m: number;
      };
    }
  }

    const postZip = async(e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      try {
        const res = await axios.post(baseUrl + zipcode)
        console.log(res)
        setWeather(res)

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
        {weather && (        
        <p>
          It is currently {weather.data.current.temperature_2m}° Fahrenheit
        </p>)}

      </form>
    </>
  )
}

export default App
