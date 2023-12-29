import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [city, setCity] = useState('');
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=827e4ab0abc7bc135bbebd336a2b94fb`;

  const searchCity = async (e) => {
    if (e.key === 'Enter') {
      try {
        const response = await axios.get(url);
        setCity(response.data);
      } catch (error) {
        console.error('Error fetching weather data:', error.message);
      }
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-r from-blue-400 to-purple-500 p-8 flex flex-col items-center justify-center">
      <div className="bg-white rounded-lg border border-gray-300 shadow-md p-4">
        <input
          type="text"
          value={city.name}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter location"
          onKeyDown={searchCity}
          className="focus:outline-none focus:ring-2 focus:ring-blue-500 w-full px-4 py-2"
        />
      </div>

      {city.name && (
        <div className="mt-4 text-center text-white">
          <h1 className="text-4xl font-extrabold">{city.name}</h1>
          {city.main && (
            <p className="text-3xl mt-2">{Math.floor(city.main.temp - 273)}°C</p>
          )}
        </div>
      )}
    </main>
  );
}

export default App;
