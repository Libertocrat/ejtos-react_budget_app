//import React, { useContext, useState } from 'react';
//import { AppContext } from '../context/AppContext';

// CURRENCY OPTIONS
const currencyOpt = {
    "USD" : "$ Dollar",
    "GBP" : "£ Pound",
    "EUR" : "€ Euro",
    "INR" : "₹ Ruppee"
}

const Currency = () => {

    // Currency selection handler
    const onCurrencyChange = (event) => {
        /*
        let index = event.target.selectedIndex;
        let label = event.target[index].text;
        let currency = event.target[index].value;
        console.log("Selected currency: " + currency + " : " + label + ". Index " + index);
        */

        // Dispatch selected currency
    }

    /*** INTERNAL CSS ***/
    const containerStyle = {
        background: '#D1FAE5',//Emerald 100
        'border-color': '#34D399', //Emerald 400
        display: 'flex',
        'flex-direction': 'row',
        'justify-content': 'left',
        color: '#166534',
        'font-size': 16
    }

    const selectStyle = {
        background: 'inherit',
        'border-width': 0,
        color: 'inherit',
        'font-size': 'inherit',
        'font-weight': '600'
    }

    const optionStyle = {
        background: 'inherit',
        color: 'inherit',
        'font-size': 'inherit'
    }

    const labelStyle = {
        color: 'inherit',
        'font-weight': '500'
    }

    /*** COMPONENT OUTPUT ***/
    return(
        <div className='alert' style={containerStyle}>
            <label for="currency_sel" style={labelStyle}>Currency: </label>
            <select id="currency_sel" onChange={onCurrencyChange} style={selectStyle}>
                {Object.keys(currencyOpt).map((currency, index) => (
                    <option value={currency} index={index} style={optionStyle}>{currencyOpt[currency]}</option>
                ))
                }
            </select>
        </div>
    );
}

export default Currency;