import React from 'react';
import { v4 as uuidv4 } from 'uuid';


const DisplayForcast = ({forecasts,searchInput,error}) => {
    console.log(forecasts)
    console.log(forecasts.cnt, 'message');
    console.log(forecasts.city, 'lists');

    const convertKelvinToCelsuis = (temp) => {
        return Math.floor(temp - 273.15)
    }
    
  return (
      <div>
           {
          forecasts?.list?.length ? 
          <div className='forcast-container'>
          <h1>{forecasts?.city?.name}</h1>
          
          <ul>
            {forecasts?.list?.length  && forecasts.list.map((forecast,index) =>  {
                return (index === 0 || index % 7 === 0) && index !== 1 &&  
                
                    <li key={uuidv4()} className={index === 0 ? 'day today-weather ' : 'day other-days'}>
                       <p>{new Date(forecast?.dt * 1000).toDateString() }</p>
                        <h1>{convertKelvinToCelsuis(forecast?.main?.temp)}&#8451;</h1>
                        <sub>{convertKelvinToCelsuis(forecast?.main?.temp_min)}&#8451;</sub>
                        <sup>{convertKelvinToCelsuis(forecast?.main?.temp_max)}&#8451;</sup>
                        <img src={'https://openweathermap.org/img/w/'+forecast?.weather[0]?.icon+'.png'} alt={forecast?.weather[0]?.main} />
                        <p>{forecast?.weather[0]?.description}</p>
                        
                    </li>      
               }) 
            }
          </ul>
      </div>
        :
        <div className='error-page'>Please enter a valid city or check your spelling</div>
      }
      </div>
     
  
  )
  
}

export default DisplayForcast;
