import React, {useEffect, useRef, useState} from 'react';
import './moneyPage.css'
import {useSelector} from "react-redux";
import privatIcon from '../../../accets/foto/privat.png'

const MoneyPage = () => {
    const money = useSelector(state => state.moneyPage.moneyPrivat)
    const [moneyIndex, setmoneyIndex] = useState(0)

    let renderCount  = useRef();renderCount.current = 0;

    const [width,ChangeWidth]=useState(window.innerWidth)
    console.log(width)
    useEffect(() => {
        moneyIndex < 3
            ? setTimeout(() =>{
                setmoneyIndex(moneyIndex + 1);

                ChangeWidth( window.innerWidth)
                renderCount.current++
                if(width<800 & renderCount.current === 1){changeItem('small')}
                console.log('renderCount',renderCount)

            }, 2000)
            : setmoneyIndex(0);
    }, [moneyIndex]);

    let [item, changeItem] = useState('big')



    function toSmallHandler() {
        changeItem('small')
    }

    function toBigHandler() {
        changeItem('big')

    }
        // if(window.innerWidth < 800) {changeItem('small') }

    return (<div className='moneyPage'>

            {item === 'big'
                ? <div className='big'  onClick={toSmallHandler}>
                    <div><b>  {money[moneyIndex].base_ccy}</b> --- <b>  {money[moneyIndex].ccy}</b></div>
                    <div><b> купити : </b><b>  {money[moneyIndex].buy}</b></div>
                    <div><b>продати : </b><b>  {money[moneyIndex].sale}</b></div>
                </div>
                : <div className='small' onClick={toBigHandler} style={{right:'0',position:'absolute'}}>
                    <img  src={privatIcon} alt=""/>

                </div>}
        </div>

    );
};

export default MoneyPage;