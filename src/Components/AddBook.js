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
            country: "",
            imageLink: "",
            language: "",
            link: "",
            pages: parseInt(0),
            year: parseInt(0),
            like: formData.like
        }
        addBook(newAddBook);
    }

    return(
      <div className="widinput">
        <section>
          <h1>New Book:</h1>
          <form onSubmit={handleSubmitNewBook}>
            <label className="labinp" >
              Title:
              <input    
                type="text"
                name="title"
                onChange={handleChange}
                className="widinp"
                placeholder="Title"
              />
            </label>
            <label className="labinp">
              Author:
              <input  
                type="text"
                name="author"
                onChange={handleChange}   
                className="widinp"
                placeholder="Author"
              />
            </label>
            <label className="labinp">
              Country:
              <input  
                type="text"
                name="country"
                onChange={handleChange}  
                className="widinp" 
                placeholder="Country"
              />
            </label>
            <label className="labinp">
              Image:
              <input  
                type="text"
                name="imageLink"
                onChange={handleChange}
                className="widinp" 
                placeholder="ImageLlink"  
              />
            </label>
            <label className="labinp">
              Language:
              <input  
                type="text"
                name="language"
                onChange={handleChange}  
                className="widinp" 
                placeholder="Language"
              />
            </label>
            <label className="labinp">
              Link:
              <input  
                type="text"
                name="link"
                onChange={handleChange}  
                className="widinp" 
                placeholder="Link"
              />
            </label>
            <button  type="submit">Add New Book</button>
          </form>
      </section>
    </div>
    )
}

export default AddBook;




