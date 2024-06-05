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

    return (
        <div className='alert alert-secondary'>
            <span>Budget: £</span>
            <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
        </div>
    );
};

export default Budget;
