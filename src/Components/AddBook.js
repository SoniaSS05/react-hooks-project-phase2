import React, { useState} from "react";
import './AddBook.css';

function AddBook({addBook}) {
    const [formData, setFormData] = useState({
        author: "",
        country: "",
        imageLink: "",
        language: "",
        link: "",
        pages: 0,
        title: "",
        year: 0,
        like: false
   
      });
    
    function handleChange(event) {
        setFormData({
          ...formData,
          [event.target.name]: event.target.value,
        });
    }

    function handleSubmitNewBook(event){
        event.preventDefault();
        const newAddBook={
            title:formData.title,
            author:formData.author,
            country: formData.country,
            imageLink: formData.imageLink,
            language: formData.language,
            link: "",
            pages: parseInt(0),
            year: parseInt(0),
            like: formData.like
        }
        addBook(newAddBook);
    }

    return(
      <div className="widinput">
        <h1>New Book:</h1>
        <section>
         
          <form onSubmit={handleSubmitNewBook}>
         
            <div  className="secclas">
              <label >
                Title: 
                <input    
                  type="text"
                  name="title"
                  onChange={handleChange}
                  className="forminpadd"
                  placeholder="Title"
                />
                </label>
            </div>
            <div  className="secclas">
              <label>
                Author: 
                <input  
                  type="text"
                  name="author"
                  onChange={handleChange}   
                  className="forminpadd"
                  placeholder="Author"
                />
              </label>
           </div>
           <div  className="secclas">
              <label >
                Country:  
                <input  
                  type="text"
                  name="country"
                  onChange={handleChange}  
                  className="forminpadd" 
                  placeholder="Country"
                />
              </label>
            </div>
            <div  className="secclas">
              <label >
                Image: 
                <input  
                  type="text"
                  name="imageLink"
                  onChange={handleChange}
                  className="forminpadd" 
                  placeholder="ImageLlink"  
                />
              </label>
            </div>
            <div  className="secclas"> 
              <label >
                Language:
                <input  
                  type="text"
                  name="language"
                  onChange={handleChange}  
                  className="forminpadd" 
                  placeholder="Language"
                />
              </label>
            </div>

        
            <button className="btn-3d"  type="submit">Add New Book</button>
          
          </form>
      </section>
    </div>
    )
}

export default AddBook;




