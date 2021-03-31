import * as axios from "axios";

export const extreme_ip_lookupAPI = async () => {

    try {
        return await axios.get(`https://extreme-ip-lookup.com/json/`,{})
    } catch (e) {
        alert('proplemin extreme_ip_lookupAPI ', e)
    }
}
//http://api.openweathermap.org/data/2.5/onecall/timemachine?lat=60.99&lon=30.9&dt=1616741960&appid=7db5ac79f0d52b9435d27260bb94887c
export const getWetherAPI = async (lat,lon) => {
const myApi = '695d0b21b9d6f597262ea032901e29ba'
    //тут час
    // const utcDate2 = new Date(Date.UTC(0, 0, 0, 0, 0, 0));
    //str.substring(0, str.length - 1))

        var utcDate2 = Date.now()
        utcDate2 = utcDate2.toString()
        utcDate2=  utcDate2.substring(0, utcDate2.length - 3)

    // console.log(lat,lon,utcDate2, myApi)
    // console.log(`http://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${lat}&lon=${lon}&dt=${utcDate2}&appid=${myApi}`)

    try {
        return await axios.get(`http://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${lat}&lon=${lon}&dt=${utcDate2}&appid=${myApi}`,{})
    } catch (e) {
        console.error('proplemin getWetherAPI ', e)
    }
}










//
// export const extreme_ip_lookupAPI= async ()=>{
//     fetch('https://extreme-ip-lookup.com/json/')
//         .then( res => res.json())
//         .then(response => {
//              return  response
//         })
//         .catch((data, status) => {
//             console.log('Request failed:', data);
//
//             return status
//         });
// }
