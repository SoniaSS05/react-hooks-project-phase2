import React from 'react';
import './DispBook.css';
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
    console.log('registrocompleto')
    console.log(oneEnBook)
    return (
        <div className="textcenter">
            <div className="textcenter">
                <div className="topmar">
                    <form  >
                        <input
                            type="text"
                            name="description"
                            id="search"
                            placeholder="Book Title"
                            className="forminp"
                        /> 
                        <button type="submit"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg>
                        </button>
                    </form>
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
