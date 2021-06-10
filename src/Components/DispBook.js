import React from 'react';
import EngBook from './EngBook';

function DispBook({data, delBook, updateBook}) {
    console.log('disbook')
    console.log(data)
    const engList = data.filter(langData=>langData.language==="English");
    const olangList = data.filter(langData=>langData.language!=="English");
    const oneEnBook = engList.map((elem)=>{
        return(
        <EngBook key={elem.id} eachBook={elem} delBook={delBook}  updateBook={updateBook} />)
    })
    const oneOLangBook = olangList.map((elem)=>{
        return(
        <EngBook key={elem.id} eachBook={elem} delBook={delBook}  updateBook={ updateBook}/>)
    })

    console.log(oneEnBook)
    return (
        <div>
            <h1>English Books</h1>
            <ul >
                {oneEnBook}
            </ul>
            <h1>Other Languages Books</h1>
            <ul>
                {oneOLangBook}
            </ul>
        </div>
    )
}

export default DispBook;
