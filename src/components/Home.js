import React, { useContext } from "react";
import noteContext from "../contexts/notes/noteContext";

const Home = () => {
  const { notes, setNotes } = useContext(noteContext);

  return (
    <div>
      <div className="container">
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
          <button type="submit" className="btn btn-primary">
            Add Note
          </button>
        </form>

        <div className="container my-3">
          <h2>Your Notes</h2>
          {notes.map((note) => {
            return (
              <div className="col-md-3">
                <div className="card my-3">
                  <div className="card-body">
                    <h5 className="card-title">{note.title}</h5>
                    <p className="card-text">{note.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
