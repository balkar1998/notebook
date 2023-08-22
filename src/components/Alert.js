import React from 'react'

const Alert = (props) => {
  return (
    <div>
        <div className="alert alert-success alert-dismissible fade show" role="alert">
    <strong>{props.title}! </strong> {props.message}
    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    </div>
  )
}

export default Alert