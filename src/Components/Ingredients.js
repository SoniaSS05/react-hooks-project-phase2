import React, { useState, useEffect } from "react";
import './Ingredients.css';
import  IngredientForm from './IngredientForm';
import IngredientRecipeDisplay from './IngredientRecipeDisplay'

function Ingredients() {

    const [page, setPage] = useState("");
    const [data,setData]=useState([]);
    const [search, setSearch] = useState('');
    console.log('aqui')
console.log(data)
console.log('pagina')
console.log(page)



    function searchRecIng(ing){

        console.log('ENTRE A BUSQUEDA');
        console.log(ing.name);
     const url=`https://api.spoonacular.com/food/ingredients/search?apiKey=13a6e8ebc9614780ae61054bf1761d48&query=${ing.name}`;
     console.log(url)
        fetch(url)
          .then(response => response.json())
         //.then(data => console.log(data))
       .then(resData =>{
         setData(resData)
         setPage("Form")
         setSearch(ing.name)
        })
     
    }
 
    function DeleteRecipe(recId){
      console.log('SEARCH');
      console.log(search);
      const config = {
        method: "DELETE"
      };
      fetch(`https://api.spoonacular.com/food/ingredients/search?apiKey=13a6e8ebc9614780ae61054bf1761d48&query=${search}`, config)
      .then(response => response.json())
      .then(()=>{
          const newList = (data.results).filter(filData=>filData.id!==recId);
          setData(newList);
          setPage("Form");
      })
    }


    console.log(data)
    console.log('page')
    console.log(page)
    
    return (
        <div>
            {page !== "Form" ? <IngredientForm searchIng={searchRecIng} /> : <h1></h1>}
         
            {page === "Form" ? <IngredientRecipeDisplay data={data} delReci={DeleteRecipe}/> : <h1></h1>}
        </div>
    )
}

export default Ingredients;
