import React, {useEffect, useState} from 'react';
import './InfoCard.css';

function InfoCard(props){
    const {temp,humidity,pressure,weatherType,name,speed,country,sunset} = props;
    const [weatherState, setWeatherState] = useState("");
    let sec = sunset;
    let date = new Date(sec * 1000);
    let timeStr = `${date.getHours()}:${date.getMinutes()}`;
    useEffect(() => {
        if (weatherType) {
            switch (weatherType) {
                case "Clouds":
                    setWeatherState("wi-day-cloudy");
                    break;
                case "Haze":
                    setWeatherState("wi-fog");
                    break;
                case "Clear":
                    setWeatherState("wi-day-sunny");
                    break;
                case "Mist":
                    setWeatherState("wi-dust");
                    break;
                case "Rain":
                    setWeatherState("wi-day-rain");
                    break;

                default:
                    setWeatherState("wi-day-sunny");
                    break;
            }
        }
    }, [weatherType]);

    const dateObj = new Date();
    return (
        <div className='CardInfo'>
            <div className="weatherIcon">
                <i className={`wi ${weatherState}`}></i>
            </div>
            <div className='Info'>
                <div className='Info-item'>
                    <p>{temp} &deg;</p>
                </div>
                <div className='Info-item'>
                    <p>{weatherType}</p>
                    <small>{name},{country}</small>
                </div>
                <div className='Info-item Item3'>
                    <p>{dateObj.toDateString()}</p>
                    <small>{`${dateObj.getHours()}:${dateObj.getMinutes()}  `}
                        {dateObj.getHours()>= 12 ? 'pm' : 'am'}</small>
                </div>
            </div>
            <div className='Info2'>
                <div className="Info-item2">
                    <p>
                        <i className={"wi wi-sunset"}></i>
                    </p>
                    <p>
                        {timeStr}pm<br />
                        Sunset
                    </p>
                </div>
                <div className='Info-item2'>
                    <p>
                        <i className={"wi wi-humidity"}></i>
                    </p>
                    <p>
                        {humidity} <br />
                        Humidity
                    </p>
                </div>
                <div className='Info-item2'>
                    <p>
                        <i className={"wi wi-rain"}></i>
                    </p>
                    <p>
                        {pressure} <br />
                        Pressure
                    </p>
                </div>
                <div className='Info-item2'>
                    <p>
                        <i className={"wi wi-strong-wind"}></i>
                    </p>
                    <p>
                        {speed} <br />
                        Speed
                    </p>
                </div>
            </div>
        </div>
    );
}

export default InfoCard;