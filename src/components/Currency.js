import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

// CURRENCY OPTIONS
const currencyOptions = {
    "USD" : "$ Dollar",
    "GBP" : "£ Pound",
    "EUR" : "€ Euro",
    "INR" : "₹ Ruppee"
}

const Currency = () => {

    const { dispatch, currency, currencyOptions } = useContext(AppContext);
    const [code, setCode] = useState(currency);

    // Currency selection handler
    const onCurrencyChange = (event) => {
        /*
        let index = event.target.selectedIndex;
        let label = event.target[index].text;
        let currency = event.target[index].value;
        console.log("Selected currency: " + currency + " : " + label + ". Index " + index);
        */
       let currencyCode = event.target.value;

        // Check if selected currency is valid
        if (currencyCode in currencyOptions) {

            // Update selected currency
            setCode(currencyCode);

            // Dispatch selected currency
            dispatch({
                type: 'CHG_CURRENCY',
                payload: currencyCode
            });
        }
        else {
            alert("'" + currencyCode + "' is not a supported currency.");
        }
        
    }

    /*** INTERNAL CSS ***/
    const containerStyle = {
        background: '#D1FAE5',//Emerald 100
        borderColor: '#34D399', //Emerald 400
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'left',
        color: '#166534',
        fontSize: 16
    }

    const selectStyle = {
        background: 'inherit',
        borderWidth: 0,
        color: 'inherit',
        fontSize: 'inherit',
        fontWeight: '600'
    }

    const optionStyle = {
        background: 'inherit',
        color: 'inherit',
        fontSize: 'inherit'
    }

    const labelStyle = {
        color: 'inherit',
        fontWeight: '500'
    }

    /*** COMPONENT OUTPUT ***/
    return(
        <div className='alert' style={containerStyle}>
            <span style={labelStyle}>Currency: </span>
            <select value={code} onChange={onCurrencyChange} style={selectStyle}>
                {Object.keys(currencyOptions).map((currency, index) => (
                    <option value={currency} key={index} style={optionStyle}>{currencyOptions[currency]}</option>
                ))
                }
            </select>
        </div>
    );
}

export default Currency;