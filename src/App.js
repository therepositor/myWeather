import './App.css';
import Index from './Routes/Index';
import  { useState } from 'react'

function App() {
  const [searchInput, setSearchInput] = useState('');
  const [error, setError] = useState(null);
  const [forecast, setForecast] = useState({});
  const apiKey = process.env.REACT_APP_APIKEY;
  const APIURL = `https://api.openweathermap.org/data/2.5/forecast?q=${searchInput}&appid=${apiKey}`;
  
  const handleChange = (e) => {
    e.preventDefault();
    
    setSearchInput(e.target.value);
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
    
  }
  const fetchData = () => {
    var requestOptions = {
      origin: 'cors'
    };
    fetch(APIURL,requestOptions)
    .then(response => response.json())
    .then(result => result = setForecast(result))
    .catch(error => setError(error))  

 } 
  console.log(forecast);
  
  return (
    <div className="App">
      <Index error={error} searchInput={searchInput} onClick={handleSubmit} onChange={handleChange} forecasts={forecast}/>
    </div>
    
  );
}

export default App
