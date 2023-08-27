import React,{ useContext } from 'react'
import noteContext from '../contexts/notes/noteContext'

const Noteitem = (props) => {
    const {note} = props
    const context = useContext(noteContext)
    const {deleteNote} = context

    const deletingNote = () => {
        deleteNote(note._id)
    }

    const editingNote = () => {
        console.log("editing note: ", note._id)
    }

  return (
    <div className="col-md-3">
    <div className="card my-3">
    <div className="card-body">
      <h5 className="card-title">{note.title}</h5>
      <p className="card-text">{note.description}</p>
      {note.tag && <a className="btn btn-primary">{note.tag}</a>}
      <hr />
      <div className="d-flex justify-content-between my-3">
        <button className='btn btn-outline-danger btn-sm' onClick={deletingNote} > Delete </button>
        <button className='btn btn-outline-warning btn-sm' onClick={editingNote} > Edit </button>
        </div>
    </div>
  </div>
    </div>
  )
}

export default Noteitem