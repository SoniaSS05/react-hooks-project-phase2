import React from 'react';
import EngBook from './EngBook';

function DispBook({data}) {
    console.log('disbook')
    console.log(data)
    const engList = data.filter(langData=>langData.language==="English");
    const oneBook = engList.map((elem)=>{
        return(
        
        <EngBook key={elem.id} eachBook={elem}/>)
       
    })
    console.log(oneBook)
    return (
        <div>
            <h1>Author</h1>
            <h1>Language</h1>
            <ul >
                {oneBook}
            </ul>
        </div>
    )
}

export default DispBook;
