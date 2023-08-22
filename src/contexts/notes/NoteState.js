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
            "tag": "old",
            "date": "2023-08-22T17:42:12.282Z",
            "createdAt": "2023-08-22T17:42:12.286Z",
            "updatedAt": "2023-08-22T17:42:12.286Z",
            "__v": 0
          },
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
            "tag": "old",
            "date": "2023-08-22T17:42:12.282Z",
            "createdAt": "2023-08-22T17:42:12.286Z",
            "updatedAt": "2023-08-22T17:42:12.286Z",
            "__v": 0
          },
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
            "tag": "old",
            "date": "2023-08-22T17:42:12.282Z",
            "createdAt": "2023-08-22T17:42:12.286Z",
            "updatedAt": "2023-08-22T17:42:12.286Z",
            "__v": 0
          },
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
            "tag": "old",
            "date": "2023-08-22T17:42:12.282Z",
            "createdAt": "2023-08-22T17:42:12.286Z",
            "updatedAt": "2023-08-22T17:42:12.286Z",
            "__v": 0
          },
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
            "tag": "old",
            "date": "2023-08-22T17:42:12.282Z",
            "createdAt": "2023-08-22T17:42:12.286Z",
            "updatedAt": "2023-08-22T17:42:12.286Z",
            "__v": 0
          },
      ]
    
    const [notes, setNotes] = useState(notesInitial);

    return (
        <NoteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}
    

export default NoteState;