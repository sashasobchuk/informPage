import * as axios from "axios";


export const getMoneyPrivatAPI = async (lat,lon) => {

    try {
        return await axios.get(`https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5`,{})
    } catch (e) {
        console.error('proplemin getWetherAPI ', e)
    }
}