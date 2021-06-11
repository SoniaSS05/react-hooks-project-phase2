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

    console.log(oneEnBook)
    return (
        <div>
            <div className="row my-12 ">
                <div className="col ms-300  top-10 start-120 left-80">
                    <form  >
                        <input
                            type="text"
                            name="description"
                            id="search"
                            placeholder="Book Title"
                            className = "width60"
                        /> 
                        <button type="submit">🔍</button>
                    </form>
                </div>
            </div>
            <h3>English Books</h3>
            <div className="col posimg" >        
                {oneEnBook}
            </div>
            <h3>Other Languages Books</h3>
                <div className="col posimg" >    
                    {oneOLangBook}    
                </div>
        </div>
    )
}

export default DispBook;
