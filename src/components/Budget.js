import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { dispatch, budget, expenses } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);

    const handleBudgetChange = (event) => {

        let budgetInput = parseInt(event.target.value);
        // Max allowed budget
        const maxBudget = 20000;

        // Validate that budget is a number
        if (typeof(budgetInput) == 'number') {

            // Set budget as a positive number
            budgetInput = budgetInput >= 0 ? budgetInput : 0;

            //Check if budget is above the max allowed value
            if (budgetInput > maxBudget) {
                alert("The budget cannot exceed " + maxBudget);
                setNewBudget(maxBudget);
            }
            else if (budgetInput < totalExpenses) {
                alert("The budget cannot be less than current spending");
                setNewBudget(totalExpenses);
            }
            else {
                
                setNewBudget(budgetInput);

                // Dispatch budget setting
                dispatch({
                    type: 'SET_BUDGET',
                    payload: budgetInput,
                });
            }
            
        }
    }

    /*** INTERNAL CSS ***/
    const containerStyle = {
        background : '#FED7AA', //Orange 200
        borderColor : '#FDBA74', //Orange 300
        color : '#F97316', //Orange 500
        display: 'flex', 
        flexDirection: 'row', 
        alignItems:'center'
    }

    const inputStyle = {
        width: '50%',
        minWidth: '80px',
        borderWidth : '0px',
        background : '#FFEDD5',
        color : '#4D7C0F',
        fontWeight : '600'
    }

    return (
        <div className='alert' style={containerStyle}>
            <span style={{fontWeight: '400'}}>Budget:</span>
            <span style={{ margin: '0 .1rem 0 .25rem', fontWeight: '600', color : '#4D7C0F'}}> £</span>
            <input type="number" step="10" value={newBudget} onChange={handleBudgetChange} style={inputStyle}></input>
        </div>
    );
};

export default Budget;
