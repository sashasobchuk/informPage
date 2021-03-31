import {getMoneyPrivatAPI} from "../api/money.api";


const SET_MONEY = 'SET_MONEY'


const defaultStatus = {
    moneyPrivat: [
        {
            ccy: 'USD',
            base_ccy: 'UAH',
            buy: '27.70000',
            sale: '28.10000'
        },
        {
            ccy: 'EUR',
            base_ccy: 'UAH',
            buy: '32.55000',
            sale: '33.15000'
        },
        {
            ccy: 'RUR',
            base_ccy: 'UAH',
            buy: '0.36000',
            sale: '0.39000'
        },
        {
            ccy: 'BTC',
            base_ccy: 'USD',
            buy: '55268.7927',
            sale: '61086.5603'
        }
    ]
}


const moneyPage_reducer = (state = defaultStatus, action) => {
    switch (action.type) {

        case SET_MONEY:
            return {...state, moneyPrivat: action.money}

        default:
            return state
    }
}

export const setMoney = (money) => ({type: SET_MONEY, money})



export const download_money = () => async (dispath) => {
    try {
        let response = await getMoneyPrivatAPI();
        dispath(setMoney(response.data))
    } catch (e) {
        console.error(e)
    }
}


export default moneyPage_reducer




