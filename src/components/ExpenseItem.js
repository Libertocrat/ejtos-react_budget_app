import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }


    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });

    }

    /*** INTERNAL CSS ***/
    const plusButtonStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius : '50%',
        background : '#65A30D', //Lime 600
        cursor: 'pointer',

        width : '40px',
        height: '40px'
    };

    const minusButtonStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius : '50%',
        background : '#B91C1C', //Red 700
        cursor: 'pointer',

        width : '40px',
        height: '40px'
    };

    const buttonTextStyle = {
        color: 'white',
        fontSize: '36px',
        fontWeight: '900',
    };

    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        <td>
            <div style={plusButtonStyle} onClick={event=> increaseAllocation(props.name)}>
                <div style={buttonTextStyle} >+</div>
            </div>
        </td>
        <td>
            <div style={minusButtonStyle} onClick={event=> decreaseAllocation(props.name)}>
                <div style={{background:'white',height:'6px', width:'20px'}} ></div>
            </div>
        </td>
        <td><TiDelete size='40px' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;
