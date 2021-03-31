import React, {useEffect, useState} from 'react';
import './MainPage.css'
import {useDispatch, useSelector} from "react-redux";
import {download_extreme_ip_lookup} from "../../redux/ProductPage_reducer";
import HourDay from "./HourDay/HourDay";
import CurrentWeather from "./CurrentWeather/CurrentWeather";
import MoneyPage from "./ManyPage/MoneyPage";


const MainPage = () => {
    const dispatch = useDispatch()
    const extreme_ip_lookup = useSelector(state => state.mainPage.extreme_ip_lookup)



    useEffect(() => {
        dispatch(download_extreme_ip_lookup())


    }, [dispatch])

    function geolocationSuccess(position) {
        changeValue(position);
        console.log('position')
    }



    const [positionValue, changeValue] = useState('unKnowingPosition')
    navigator.geolocation.getCurrentPosition(geolocationSuccess, errorCallback, {maximumAge: 6000000})



    function errorCallback(error) {
        console.log(error)
    }



    var lang = navigator.language

    var preferredLanguages = navigator.languages

    var online = window.navigator.onLine;

    let oscpuInfo = window.navigator.oscpu
    var cookieEnabled = navigator.cookieEnabled;
    const weatherMain = useSelector(state => state.mainPage.weather)

    function timeConverter(UNIX_timestamp){
        var a = new Date(UNIX_timestamp * 1000);
        var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        var year = a.getFullYear();
        var month = months[a.getMonth()];
        var date = a.getDate();
        var hour = a.getHours();
        var min = a.getMinutes();
        var sec = a.getSeconds();
        return date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec;
    }
    function temperature(temp) {
        /** kelvins into C */
        return temp -273.15
    }
        let   takeCurrentWeather = {

             timezone : weatherMain.timezone,
            dt : timeConverter(weatherMain.current.dt),
            sunrise : timeConverter(weatherMain.current.sunrise),
            sunset : timeConverter(weatherMain.current.sunset),
            temp: Math.round(temperature(weatherMain.current.temp)),
            tempFiling : Math.round(temperature(weatherMain.current.feels_like)),
            pressure :weatherMain.current.pressure,
            humidity :weatherMain.current.humidity,
            uvi :weatherMain.current.uvi,
            clouds :weatherMain.current.clouds,
            wind_speed :weatherMain.current.wind_speed,
            wind_deg :weatherMain.current.wind_deg,
            wind_gust :weatherMain.current.wind_gust,

             weather : weatherMain.current.weather,
                hourly : weatherMain.hourly,

            // return {ExtrenalTimeConverter,takeCurrentWeather,timezone,dt,sunrise,sunset,temp,tempFiling,pressure,humidity,uvi,
            //     clouds,wind_speed,wind_deg,wind_gust,weather,hourly}

        }







    // console.log("11122",takeCurrentWeather().ExtrenalTimeConverter(takeCurrentWeather().hourly[0].dt )())



    return (<div className='FullPage'>
        <div >

            <MoneyPage />

        </div>
        {!positionValue.coords
            ? <div className='info'>{positionValue}</div>
            : <div className='info'>
                <div className='tittleMain'> інформаціяя про пристрій</div>
                <div className='myPosition'>
                    <span> місцязнаходження</span>
                    <div> широта : {positionValue.coords.latitude.toFixed(4)}</div>
                    <div> довгота: {positionValue.coords.longitude.toFixed(4)}</div>
                    <div> точність  : {positionValue.coords.accuracy}</div>

                </div>
                <div className='languageDIv'>
                    <div> lang : {lang}</div>
                    <div> preferredLanguages : {preferredLanguages.map((lang, index) =>
                        <span key={index}> {lang},</span>)}</div>
                </div>
                <div className='otherDiviseInfo'>
                    <div> is dewise online : {online ? <span>yes </span> : <span> not </span>}</div>
                    <div> oscpuInfo : {oscpuInfo}</div>
                    <div> cookieEnabled : {cookieEnabled ? <span>yes</span> : <span>no</span>}</div>

                </div>

                <div className='extreme_ip_lookup'>

                    <div><strong>лок. інформація </strong></div>
                    <div>континент : <span>{extreme_ip_lookup.continent}</span></div>
                    <div>країна : <span>{extreme_ip_lookup.country}</span></div>
                    <div>код країни :<span>{extreme_ip_lookup.countryCode}</span></div>
                    <div>тип IP :<span>{extreme_ip_lookup.ipType}</span></div>
                    <div>розташування : <span>{extreme_ip_lookup.lat} широти</span></div>
                    <div>розташування :<span>{extreme_ip_lookup.lon} довготи</span></div>
                    <div>ip адреса:<span>{extreme_ip_lookup.query}</span></div>
                    <div>регіон/місто :<span>{extreme_ip_lookup.region}</span></div>
                </div>


            </div>

        }
        <div className='weatherMain'>
                <div className='currentWeather' >
                    <CurrentWeather   item={takeCurrentWeather} temperature={temperature.bind()} timeConverter={timeConverter.bind()}/>
                </div>
                    <div className= 'HourDays' >
                        {takeCurrentWeather.hourly.map(item=><div className='HourDay'>
                                <HourDay item={item} temperature={temperature.bind()} timeConverter={timeConverter.bind()}/>
                        </div> )}
            </div>
        </div>

    </div>)

};

export default MainPage;
