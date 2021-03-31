import React from 'react';
import './CurrentWeather.css'
const CurrentWeather = ({item,temperature}) => {

    // let aaa = temperature(item.temp)
    // debugger
    return (
        <>
            <div className='CurrentWeatherPage'>
                <div className='titleWeather'>
                    <h2 >погода </h2>
                </div>

                <div>часова зона: <b>{item.timezone} </b>  </div>


                <div className='time'>time: {item.dt}</div>

                <div className="timeCicle">
                    <div className='sunrise'>sunrise : {item.sunrise}</div>
                    <div className='sunset'>sunset : {item.sunset}</div>
                </div>


                <div className='MainWeatherProp'>
                    <div className='tempMain'><span className='description'>температура : </span> {item.temp} &#8451; </div>
                    <div className='pressure' title='тиск'><span className='description'>тиск :  </span> {Math.round(temperature(item.pressure))}
                        <span >  мм. рт. ст.</span>  </div>
                    <div className='humidity' title='вологість'><span className='description'>вологість : </span> {item.humidity} % </div>
                    <div className='clouds'title='Хмарність' ><span className='description'>Хмарність :  </span> {item.clouds}  %</div>
                </div>

                <div className='windWeatherNow'>
                    <span > вітри</span>
                    <div className='wind_speed' title='швидкість вітру:' ><span className='description'>швидкість вітру:  </span> {item.wind_speed}  </div>
                    <div className='wind_deg' title='напрям вітру:' > <span className='description'>напрям вітру : </span> {item.wind_deg}  </div>
                    <div className='wind_gust' title='пориви вітру:' ><span className='description'>пориви вітру : </span> {item.wind_gust}  </div>
                </div>

                <div >{item.weather.map(item=>(
                    <div  className='weatherDesc'>
                        <div> {item.main}</div>
                        <div>   {item.description}</div>

                    </div>
                ))}</div>
            </div>
        </>
    );
};

export default CurrentWeather;