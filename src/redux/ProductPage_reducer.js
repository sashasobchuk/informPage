import {extreme_ip_lookupAPI, getWetherAPI} from "../api/api";
import {download_money} from "./Money.reducer";

// const foto = 'https://vgorode.ua/img/article/3938/12_main-v1573686449.jpg'


const EXTREME_IP_LOOKUP = 'EXTREME_IP_LOOKUP'
const SET_WETHER = 'SET_WETHER'


const defaultStatus = {
    /* в залежності від id editDisplay */
        type: 'EXTREME_IP_LOOKUP',
        extreme_ip_lookup: {
            city: 'Ternopil',
            continent: 'Europe',
            country: 'Ukraine',
            countryCode: 'UA',
            ipType: 'Residential',
            lat: '99.57312',
            lon: '99.68118',
            query: '91.86.242.34',
            region: 'Ternopil',
            status: 'success'
        },
    weather: {
        lat: 49.5534,
        lon: 25.5892,
        timezone: 'Europe/Kiev',
        timezone_offset: 7200,
        current: {
            dt:      1616837818,
            sunrise: 1616817919,
            sunset: 1616863229,
            temp: 283.04,
            feels_like: 278.25,
            pressure: 1024,
            humidity: 58,
            dew_point: 275.17,
            uvi: 3.31,
            clouds: 5,
            wind_speed: 4.46,
            wind_deg: 172,
            wind_gust: 4.64,
            weather: [
                {
                    id: 800,
                    main: 'Clear',
                    description: 'clear sky',
                    icon: '01d'
                }
            ]
        },
        hourly: [
            {
                dt: 1616803200,
                temp: 275.93,
                feels_like: 272.21,
                pressure: 987,
                humidity: 64,
                dew_point: 270.19,
                clouds: 100,
                wind_speed: 1.85,
                wind_deg: 162,
                wind_gust: 2.12,
                weather: [
                    {
                        id: 804,
                        main: 'Clouds',
                        description: 'overcast clouds',
                        icon: '04n'
                    }
                ]
            },
            {
                dt: 1616806800,
                temp: 274.82,
                feels_like: 270.89,
                pressure: 987,
                humidity: 67,
                dew_point: 269.79,
                clouds: 100,
                wind_speed: 2.07,
                wind_deg: 156,
                wind_gust: 2.61,
                weather: [
                    {
                        id: 804,
                        main: 'Clouds',
                        description: 'overcast clouds',
                        icon: '04n'
                    }
                ]
            },
            {
                dt: 1616810400,
                temp: 274.82,
                feels_like: 270.65,
                pressure: 987,
                humidity: 67,
                dew_point: 269.79,
                clouds: 100,
                wind_speed: 2.42,
                wind_deg: 145,
                wind_gust: 3.51,
                weather: [
                    {
                        id: 804,
                        main: 'Clouds',
                        description: 'overcast clouds',
                        icon: '04n'
                    }
                ]
            },
            {
                dt: 1616814000,
                temp: 274.82,
                feels_like: 270.62,
                pressure: 988,
                humidity: 69,
                dew_point: 270.14,
                clouds: 100,
                wind_speed: 2.53,
                wind_deg: 147,
                wind_gust: 4.16,
                weather: [
                    {
                        id: 804,
                        main: 'Clouds',
                        description: 'overcast clouds',
                        icon: '04n'
                    }
                ]
            },
            {
                dt: 1616817600,
                temp: 274.82,
                feels_like: 270.72,
                pressure: 988,
                humidity: 68,
                dew_point: 269.97,
                clouds: 86,
                wind_speed: 2.35,
                wind_deg: 162,
                wind_gust: 2.86,
                weather: [
                    {
                        id: 804,
                        main: 'Clouds',
                        description: 'overcast clouds',
                        icon: '04n'
                    }
                ]
            },
            {
                dt: 1616821200,
                temp: 277.04,
                feels_like: 273.04,
                pressure: 988,
                humidity: 68,
                dew_point: 271.85,
                clouds: 71,
                wind_speed: 2.58,
                wind_deg: 168,
                wind_gust: 4.13,
                weather: [
                    {
                        id: 803,
                        main: 'Clouds',
                        description: 'broken clouds',
                        icon: '04d'
                    }
                ]
            },
            {
                dt: 1616824800,
                temp: 277.7,
                feels_like: 273.56,
                pressure: 1025,
                humidity: 77,
                dew_point: 274.02,
                clouds: 60,
                wind_speed: 3.26,
                wind_deg: 165,
                wind_gust: 5.56,
                weather: [
                    {
                        id: 803,
                        main: 'Clouds',
                        description: 'broken clouds',
                        icon: '04d'
                    }
                ]
            },
            {
                dt: 1616828400,
                temp: 279.3,
                feels_like: 274.62,
                pressure: 1025,
                humidity: 70,
                dew_point: 274.24,
                clouds: 6,
                wind_speed: 4.08,
                wind_deg: 165,
                wind_gust: 5.64,
                weather: [
                    {
                        id: 800,
                        main: 'Clear',
                        description: 'clear sky',
                        icon: '01d'
                    }
                ]
            },
            {
                dt: 1616832000,
                temp: 280.76,
                feels_like: 275.79,
                pressure: 1024,
                humidity: 64,
                dew_point: 274.39,
                clouds: 6,
                wind_speed: 4.53,
                wind_deg: 167,
                wind_gust: 5.51,
                weather: [
                    {
                        id: 800,
                        main: 'Clear',
                        description: 'clear sky',
                        icon: '01d'
                    }
                ]
            },
            {
                dt: 1616835600,
                temp: 281.98,
                feels_like: 277.03,
                pressure: 1024,
                humidity: 61,
                dew_point: 274.88,
                clouds: 5,
                wind_speed: 4.62,
                wind_deg: 168,
                wind_gust: 5.1,
                weather: [
                    {
                        id: 800,
                        main: 'Clear',
                        description: 'clear sky',
                        icon: '01d'
                    }
                ]
            }
        ]
    }
}


const mainPage_reducer = (state = defaultStatus, action) => {
    switch (action.type) {

        case EXTREME_IP_LOOKUP:
            return {...state, extreme_ip_lookup: action.extreme_ip_lookup}
        case SET_WETHER:
            return {...state, weather: action.weather}
        default:
            return state
    }
}

export const set_extreme_ip_lookup = (extreme_ip_lookup) => ({type: EXTREME_IP_LOOKUP, extreme_ip_lookup})
export const set_wether = (weather) => ({type: SET_WETHER, weather})


export const download_extreme_ip_lookup = () => async (dispath) => {
    try {
        let response = await extreme_ip_lookupAPI();
        dispath(set_extreme_ip_lookup(response.data))
        console.log(response.data)

        await dispath( downloadWether( response.data.lat,response.data.lon))
        await dispath(download_money())
    } catch (e) {
        console.error(e)
    }
}
export const downloadWether = (lat, lon) => async (dispath) => {
    try {
        let response = await getWetherAPI(lat, lon);

        dispath(set_wether(response.data))
    } catch (e) {
        console.error(e)
    }
}
/*
* export const addComment_T = (text, itemId) => async (dispatch) => {
    try {
        if (text) {
             перрірка що text не null undefined or ''
let response = await addCommentAPI(text, itemId,userId)
if (response.status === 200) {
    dispatch(addComment(response.data.videoComment, itemId))
}
} else {
    console.log('trouble in get back uploaded comment')
    return undefined
}
} catch (e) {
    console.log('trouble in get back uploaded comment2', e)
}

}*/

export default mainPage_reducer




