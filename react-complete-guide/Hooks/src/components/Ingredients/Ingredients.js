import React, {useState} from 'react';

import IngredientForm from './IngredientForm';
import IngredientList from "./IngredientList";
import Search from './Search';

function Ingredients() {
    const [userIngredients, setUserIngredients] = useState([]);

    const addIngredientHandler = (ingredient) => {
        setUserIngredients(prevIngredients => [
            ...prevIngredients,
            {id: Math.random().toString(), ...ingredient}
        ])
    };

    const removeIngredientHandler = (ingredientId) => {
        const updatedIngredients = userIngredients.filter(ig => ig.id !== ingredientId);

        setUserIngredients(updatedIngredients);
    }


    return (
        <div className="App">
            <IngredientForm onAddIngredient={addIngredientHandler}/>

            <section>
                <Search/>
                <IngredientList ingredients={userIngredients} onRemoveItem={removeIngredientHandler}/>
            </section>
        </div>
    );
}

export default Ingredients;
