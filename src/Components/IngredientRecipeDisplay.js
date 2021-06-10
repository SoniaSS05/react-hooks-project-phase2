import React from 'react';
import EachRecipe from './EachRecipe';


 function IngredientRecipeDisplay({data, delReci}) {
console.log(data.results)
console.log('delreci ingredientRecipeDisplay')
console.log(delReci)
   const recipeWithIng = (data.results).map((elem)=>{
       console.log(elem.id)
      /* return <li key={elem.id}>{elem.image}</li>*/
      return <EachRecipe elem={elem} delReci={delReci} />
    })

    return (
        <div>
            <ul>
               {recipeWithIng}
            </ul>
        </div>
    )
}

export default IngredientRecipeDisplay;