import React from 'react'

function EachRecipe({elem, delReci}) {
    const { id, key, name } = elem;
    console.log('en Each')
    console.log(id)
    console.log(name);

    function handleClickDelete(){
        delReci(id);
    }

    return (
        <div>
            <ul>
                <li key={id} >{name}  
                <span><button onClick={handleClickDelete}>Delete</button></span></li>
            </ul>
            
        </div>

    )
}

export default EachRecipe;