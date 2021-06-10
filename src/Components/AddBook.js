import React, { useState} from "react";

function AddBook({addBook}) {
    const [formData, setFormData] = useState({
        author: "",
        country: "",
        imageLink: "",
        language: "",
        link: "",
        pages: 0,
        title: "",
        year: 0
   
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
            country: "",
            imageLink: "",
            language: "",
            link: "",
            pages: parseInt(0),
            year: parseInt(0)
        }
        addBook(newAddBook);
    }

    return(
       <section>
      <h1>New Book</h1>
      <form onSubmit={handleSubmitNewBook}>
        <label>
          Title:
          <input    
             type="text"
             name="title"

             onChange={handleChange}
          />
        </label>
        <label>
          Author:
          <input  
             type="text"
             name="author"
             
             onChange={handleChange}   
          />
        </label>
       
      
      
        <button type="submit">Add New Book</button>
      </form>
    </section>
    )
}

export default AddBook;


