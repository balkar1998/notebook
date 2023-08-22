import React,{ useContext } from 'react'
import noteContext from '../contexts/notes/noteContext'

const AddNote = () => {
    const context = useContext(noteContext)
    const {AddNote} = context
    const  handleClick = (e) => {
        e.preventDefault()
        AddNote()
    }
    
  return (
    <>
    <h1 className="text-center">Add a note</h1>
        <form>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <input type="text" className="form-control" id="description" />
          </div>
          <div className="mb-3">
            <label htmlFor="tag" className="form-label">
              Tag
            </label>
            <input type="text" className="form-control" id="tag" />
          </div>
          <button type="submit" className="btn btn-primary" onClick={handleClick}>
            Add Note
          </button>
        </form>
    </>
  )
}

export default AddNote