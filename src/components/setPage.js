import { useState } from 'react';
import axios from 'axios';
import './page.css';
import BcgColor from './bgColors';


const SetPage = () => {
    const [data, setData] = useState({});
    const [cityName, setCityName] = useState('');

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=fda522805e4ac313ff3f55c134df2357&units=metric`;

    async function searchLocation() {
        return await axios.get(url).then((response)=>{
            setData(response.data)
        })
    }
    
    const handleChange = event => {
        setCityName(event.target.value);
    }

    function currDate(){
        let newDate = new Date()
        let date = newDate.getDate();
        let month = newDate.getMonth();
        let year = newDate.getFullYear();
        return(
            `${date}.${month}.${year}`
        )
    }

    

    return ( 
        <div>
            <form className='form'>
                <header className='nav'>
                    <input className='field' placeholder='City' type='text' id='cityName' onChange={handleChange} value={cityName}>

                    </input>
                    <button type='button' onClick={searchLocation} className = 'btnGet'>
                        Get
                    </button>
                </header>
                <div>
                <ul>
                    <li>
                        {data.name &&<h1>{data.name}, {data.sys.country} {currDate()} </h1> }
                    </li>
                    <li>
                        {data.main && <h1> Weather:{data.main.temp} °C</h1>}
                    </li>
                    <li>
                        <div className='sky'>
                            {data.weather && <h1> Sky: {data.weather[0].main}</h1>}
                            {data.weather && <img alt = 'icon' src = {`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`}/>}
                        </div>
                    </li>
                    </ul>
                    {data.main && <BcgColor temp={data.main.temp}/>}
                </div>
            </form>
            <span className='tags'>Made by Tamara Moskaleva 30.09.2022</span>
        </div>
     );
}
 
export default SetPage;