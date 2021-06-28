import React, {useState, useEffect, useCallback} from 'react';

import IngredientForm from './IngredientForm';
import IngredientList from "./IngredientList";
import Search from './Search';

function Ingredients() {
    const [userIngredients, setUserIngredients] = useState([]);

    const filteredIngredientsHandler = useCallback(filteredIngredients => {
        setUserIngredients(filteredIngredients);
    }, []);

    const addIngredientHandler = (ingredient) => {
        fetch('https://hooks-react-2915b-default-rtdb.firebaseio.com/ingredients.json', {
            method: 'POST',
            body: JSON.stringify({...ingredient}),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            return response.json();
        }).then(responseData => {
            setUserIngredients(prevIngredients => [
                ...prevIngredients,
                {id: responseData.name, ...ingredient}
            ])
        });
    };

    const removeIngredientHandler = (ingredientId) => {
        const updatedIngredients = userIngredients.filter(ig => ig.id !== ingredientId);

        setUserIngredients(updatedIngredients);
    }


    return (
        <div className="App">
            <IngredientForm onAddIngredient={addIngredientHandler}/>

            <section>
                <Search onLoadIngredients={filteredIngredientsHandler}/>
                <IngredientList
                    ingredients={userIngredients}
                    onRemoveItem={removeIngredientHandler}
                />
            </section>
        </div>
    );
}

export default Ingredients;
