import react from 'react';
import NoteContext from './noteContext';
import { useState } from 'react';

const NoteState = (props) => {
    const notesInitial = [
        {
          "_id": "64e1ab62899c6f32f34634f6",
          "user": "64e10f13ca9288f45e64c23d",
          "title": "first note",
          "description": "so this is my first note",
          "tag": "new",
          "date": "2023-08-20T05:57:54.873Z",
          "createdAt": "2023-08-20T05:57:54.876Z",
          "updatedAt": "2023-08-20T05:57:54.876Z",
          "__v": 0
        },
        {
          "_id": "64e4f3740b7238adc9873b9a",
          "user": "64e10f13ca9288f45e64c23d",
          "title": "second one",
          "description": "so this is my second note",
          "tag": "",
          "date": "2023-08-22T17:42:12.282Z",
          "createdAt": "2023-08-22T17:42:12.286Z",
          "updatedAt": "2023-08-22T17:42:12.286Z",
          "__v": 0
        },
        {
            "_id": "64e1ab62899c6f32f34634f16",
            "user": "64e10f13ca9288f45e64c23d",
            "title": "first note",
            "description": "so this is my first note",
            "tag": "new",
            "date": "2023-08-20T05:57:54.873Z",
            "createdAt": "2023-08-20T05:57:54.876Z",
            "updatedAt": "2023-08-20T05:57:54.876Z",
            "__v": 0
          },
          {
            "_id": "64e4f3740b7238adc9873b29a",
            "user": "64e10f13ca9288f45e64c23d",
            "title": "second one",
            "description": "so this is my second note",
            "tag": "old",
            "date": "2023-08-22T17:42:12.282Z",
            "createdAt": "2023-08-22T17:42:12.286Z",
            "updatedAt": "2023-08-22T17:42:12.286Z",
            "__v": 0
          },
          {
            "_id": "64e1ab62899c6f32f346342f6",
            "user": "64e10f13ca9288f45e64c23d",
            "title": "first note",
            "description": "so this is my first note",
            "tag": "new",
            "date": "2023-08-20T05:57:54.873Z",
            "createdAt": "2023-08-20T05:57:54.876Z",
            "updatedAt": "2023-08-20T05:57:54.876Z",
            "__v": 0
          },
          {
            "_id": "64e4f3740b7238adc98743b9a",
            "user": "64e10f13ca9288f45e64c23d",
            "title": "second one",
            "description": "so this is my second note",
            "tag": "old",
            "date": "2023-08-22T17:42:12.282Z",
            "createdAt": "2023-08-22T17:42:12.286Z",
            "updatedAt": "2023-08-22T17:42:12.286Z",
            "__v": 0
          },
          {
            "_id": "64e1ab62899c6f32f346344f6",
            "user": "64e10f13ca9288f45e64c23d",
            "title": "first note",
            "description": "so this is my first note",
            "tag": "new",
            "date": "2023-08-20T05:57:54.873Z",
            "createdAt": "2023-08-20T05:57:54.876Z",
            "updatedAt": "2023-08-20T05:57:54.876Z",
            "__v": 0
          },
      ]
    
    const [notes, setNotes] = useState(notesInitial);

    // add a note
    const addNote = (title, description, tag) => {
        // calling a note api
        const note = {
            "title": title,
            "description": description,
            "tag": tag,
        }
        setNotes(notes.concat({title, description, tag}));
    }

    // delete a note
    const deleteNote = (id) => {
        console.log("deleting the note with id: ", id);
    }

    // edit a note
    const editNote = (id, title, description, tag) => {

    }

    return (
        <NoteContext.Provider value={{notes, addNote, deleteNote, editNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}
    

export default NoteState;