import React, { useState } from "react";
import Note from './Note';

function CreateArea() {

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const[data, setData] = useState([]);


  function changeHandler (event) {
    const {name, value} = event.target

    setNote((previousNote) => {
      return {
        ...previousNote,
        [name]: value
      }

    });
    console.log(note);
  }

  function clickHandler(event) {
    setData([...data, note]);
    event.preventDefault();
    setNote({
      title: "",
      content: ""
    });
  }

 function deleteHandler (id) {
   setData((prevData) => {
     return prevData.filter((item, index) => {
      return index != id;
    });
   });
  }

  return (
    <div>
      <form>
        <input onChange = {changeHandler} name="title" placeholder="Title" value = {note.title} />
        <textarea onChange = {changeHandler} name="content" placeholder="Take a note..." rows="3" value = {note.content} />
        <button onClick = {clickHandler}>Add</button>
      </form>
        { data.map((item, index) => <Note key = {index} id = {index} title = {item.title} content = {item.content} delete = {deleteHandler}/>
        ) }

    </div>
    
  );
}

export default CreateArea;
