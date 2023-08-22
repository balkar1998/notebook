import React from "react";
import Notes from "./Notes";
import AddNote from "./AddNote";

const Home = () => {
  return (
    <div>
      <div className="container">
        
        <AddNote />
        <Notes />

      </div>
    </div>
  );
};

export default Home;
