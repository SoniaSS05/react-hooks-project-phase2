import React, { useState } from "react";
import './Ingredients.css';



function IngredientForm({searchIng}) {
console.log('formingred')


    const[formIng, setFormIng]=useState({
        id:'',
        name:'',
        image:''
    });

    function handleSubmitIng(event){
        event.preventDefault();
        const ing = {
            id: formIng.id,
            name:formIng.name,
            image:formIng.image
        }
        searchIng(ing);
        let putPage = "Form";
        
    }

    function handleChangeInput(event){
        setFormIng({
            ...formIng,
            [event.target.name]: event.target.value,
          });
    }
    console.log('excelente')
    console.log(formIng)
    return (
        <section>
        <form onSubmit={handleSubmitIng}>
            <label>Ingredient:</label>
            <input
                type="text"
                name="name"
                value={formIng.name}
                onChange={handleChangeInput}
            />
            <button type="submit">Search Recipes</button>
        </form>
     </section>
    
    )
}

export default  IngredientForm;
