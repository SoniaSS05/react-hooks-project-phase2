import React, { useState } from 'react';
import './DispBook.css';
import EngBook from './EngBook';




function DispBook({data, delBook, updateBook, searchFilt, setSearchFilt}) {

    function changeFilt(event){
        console.log("entre aqui")
        const searchItem = (event.target.value).toLowerCase();
        setSearchFilt(searchItem);
    }

    let engList = data.filter(langData=>langData.language==="English");
    let olangList = data.filter(langData=>langData.language!=="English");
    if (searchFilt !=''){
        engList =data.filter(filData=>(filData.title.toLowerCase()) === searchFilt);
        olangList = [];
    }


    const oneEnBook = engList.map((elem)=>{
        return(
        <EngBook key={elem.id} eachBook={elem} delBook={delBook}  updateBook={updateBook}  />)
    })
    const oneOLangBook = olangList.map((elem)=>{
        return(
        <EngBook key={elem.id} eachBook={elem} delBook={delBook}  updateBook={ updateBook} />)
    })
  
    return (
        <div className="textcenter">
            <div className="textcenter">
                <div className="topmar">
                    <input type="text" className= "forminp" placeholder="Book Title" onChange={changeFilt}></input>
                </div>
            </div>
         
         
            <h2>English Books</h2>
            <div className="posimg" >        
                {oneEnBook}
            </div>
            <h2>Other Languages Books</h2>
                <div className="posimg" >    
                    {oneOLangBook}    
                </div>
        </div>
    )
}

export default DispBook;
