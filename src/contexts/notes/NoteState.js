import react from 'react';
import NoteContext from './noteContext';
import { useState } from 'react';

const NoteState = (props) => {

    const notesInitial = [];
      
    const [notes, setNotes] = useState(notesInitial);

    const getNotes = async () => {
        // API call
        let url = `http://localhost:5000/api/notes/fetchallnotes`;
        const response = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjRlMTBmMTNjYTkyODhmNDVlNjRjMjNkIiwiaWF0IjoxNjkyNDcxMDkwfQ.rmlhbZ-6GTfgQYxaUfuL1m2dT8STOIWVhniFHggOIf0"
          }
        }).then(response => response.json()).then(data => {setNotes(data);}).catch(err => console.log(err));
    }

    // add a note
    const addNote = async (title, description, tag) => {
      
        // API call
        let url = `http://localhost:5000/api/notes/addnote`;
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjRlMTBmMTNjYTkyODhmNDVlNjRjMjNkIiwiaWF0IjoxNjkyNDcxMDkwfQ.rmlhbZ-6GTfgQYxaUfuL1m2dT8STOIWVhniFHggOIf0"
          },
          body: JSON.stringify({title, description, tag})
        })
        .then(response => response.json())
        .then(data => {
          if(data.success){
          setNotes(notes.concat(data));
          }
        })
        .catch(      err => console.log(err));
    }

    // delete a note
    const deleteNote = (id) => {
      let url = `http://localhost:5000/api/notes/deletenote/${id}`;
      const response = fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjRlMTBmMTNjYTkyODhmNDVlNjRjMjNkIiwiaWF0IjoxNjkyNDcxMDkwfQ.rmlhbZ-6GTfgQYxaUfuL1m2dT8STOIWVhniFHggOIf0"
        }
      })
      .then(response => response.json())
      .then(data => {
          const newNotes = notes.filter((note) => {return note._id !== data.note._id});
          setNotes(newNotes);
      })
      .catch(err => console.log(err));
    }

    // edit a note
    const editNote = async(id, title, description, tag) => {
      let url = `http://localhost:5000/api/notes/updatenote/${id}`;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjRlMTBmMTNjYTkyODhmNDVlNjRjMjNkIiwiaWF0IjoxNjkyNDcxMDkwfQ.rmlhbZ-6GTfgQYxaUfuL1m2dT8STOIWVhniFHggOIf0"
        },
        body: JSON.stringify({title, description, tag})
      });
      const jsonData = response.json();

      for(let i=0; i<notes.length; i++){
        if(notes[i]._id === id){
          notes[i].title = title;
          notes[i].description = description;
          notes[i].tag = tag;
          break;
        }
      }
    }

    return (
        <NoteContext.Provider value={{notes, addNote, deleteNote, editNote, getNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}
    

export default NoteState;