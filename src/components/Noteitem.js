import React from 'react'

const Noteitem = (props) => {
    const {note} = props
  return (
    <div className="col-md-3">
    <div className="card my-3">
    <div className="card-body">
      <h5 className="card-title">{note.title}</h5>
      <p className="card-text">{note.description}</p>
      {note.tag && <a className="btn btn-primary">{note.tag}</a>}
      <hr />
      <div className="d-flex justify-content-between my-3">
        <button className='btn btn-outline-danger btn-sm'> Delete </button>
        <button className='btn btn-outline-warning btn-sm' > Edit </button>
        </div>
    </div>
  </div>
    </div>
  )
}

export default Noteitem