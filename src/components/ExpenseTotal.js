import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';


const ExpenseTotal = () => {
    const { expenses, currency } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    /*** INTERNAL CSS ***/
    const containerStyle = {
        background : '#FED7AA', //Orange 200
        borderColor : '#FDBA74', //Orange 300
        color : '#F97316', //Orange 500
        display: 'flex', 
        flexDirection: 'row', 
        alignItems:'center'
    }

    return (
        <div className='alert' style={containerStyle}>
            <span>Spent so far: {currency}{totalExpenses}</span>
        </div>
    );
};

export default ExpenseTotal;
