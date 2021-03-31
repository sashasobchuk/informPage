import React from 'react';
import './HourDay.css'
const HourDay = ({item,timeConverter,temperature}) => {
    return (
        <div className='oneDay'>
            <div className='time'> {timeConverter(item.dt).substr(11, )}</div>
            <div className='temp'><div className='description'> </div> {Math.round(temperature(item.temp))} &#8451; </div>
            <div className='pressure' title='тиск'><span className='description'>T :  </span> {Math.round(temperature(item.pressure))}
                <span className='oE'>  мм рт. ст.</span>  </div>
            <div className='humidity' title='вологість'><span className='description'>V : </span> {item.humidity}  </div>
            <div className='dew_point' title="пориви вітру"><span className='description'>D.P : </span> {item.dew_point}  </div>
                <div className='clouds'title='Хмарність' ><span className='description'>Хm :  </span> {item.clouds}  </div>
                <div className='wind_speed' title='швидкість вітру:' ><span className='description'>VS:  </span> {item.wind_speed}  </div>
                <div className='wind_deg' title='напрям вітру:' > <span className='description'>VD : </span> {item.wind_deg}  </div>
                <div className='wind_gust' title='пориви вітру:' ><span className='description'>VG : </span> {item.wind_gust}  </div>
                <div className='weather'>{item.weather.map(item=>(
                    <div  >  {item.main}
                        <div>   {item.description}</div>

                    </div>
                ))}</div>
        </div>
    );
};

export default HourDay;