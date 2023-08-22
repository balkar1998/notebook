import React from "react";
import Notes from "./Notes";

const Home = () => {
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

        <Notes />

      </div>
    </div>
  );
};

export default Home;
