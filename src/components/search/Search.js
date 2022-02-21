import React, {useEffect, useState} from 'react';
import './Search.css';
import InfoCard from "../infoCard/InfoCard";

function Search(){
    const [searchItem, setSearchItem] = useState('sohag');
    const [tempInfo, setTempInfo] = useState({});

    useEffect(()=>{
        handleSearch();
    },[]);
    const handleSearch = async ()=>{
        const url =`https://api.openweathermap.org/data/2.5/weather?q=${searchItem}&units=metric&appid=1e6c85b868fe83858788d534758b95c0`;
        try{
            const result = await fetch(url);
            const data = await result.json();
            // console.log(data);
            const { temp, humidity, pressure } = data.main;
            const { main: weatherType } = data.weather[0];
            const { name } = data;
            const { speed } = data.wind;
            const { country, sunset } = data.sys;

            const myNewWeatherInfo = {
                temp,
                humidity,
                pressure,
                weatherType,
                name,
                speed,
                country,
                sunset,
            };

            setTempInfo(myNewWeatherInfo);
        }catch (err){
            console.log(err);
        }
    }
    return (
        <>
            <div className='searchDiv'>
                <input
                    type='text'
                    name='searchItem'
                    placeholder='type city name.'
                    onChange={(e)=>setSearchItem(e.target.value)}
                    />
                <button onClick={handleSearch}>Search</button>
            </div>
            <InfoCard {...tempInfo}/>
        </>
    );
}

export default Search;