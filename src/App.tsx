import { useState } from 'react'
import axios from 'axios';
import './index.css'

function App() {

  const baseUrl = import.meta.env.VITE_BACKEND_ADDRESS;
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
      <div className={"bg-gray-800 h-24"}>

      </div>
      <div className = {"flex h-auto"}>
        <form className = {"ml-24 mt-16 w-96 flex flex-col gap-12"} onSubmit={(e) =>postZip(e)}>
          <label className= {"text-xl text-white text-6xl leading-snug font-semibold"}>
            Please enter a 5 digit zip code:
            
          </label>
          <input className = {"h-8"}name='zipcode' value={zipcode} onChange={(e)=>setZipcode(e.target.value)} />
          <button className={`bg-blue-500 h-16 w-36 m-auto text-white px-4 py-2 rounded ${zipcode.length < 5 ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={zipcode.length < 5}>
              Get Weather
          </button> 
          {weather && (        
          <p>
            It is currently {weather.data.current.temperature_2m}° Fahrenheit
          </p>)}

        </form>
      </div>
    </>
  )
}

export default App
