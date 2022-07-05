import React from "react";
import Student from "./Student";

function Buttons(props) {
  return (
    <div className="buttons">
      <h1> Student Profiles</h1>
      {props.mockData.map((student) => (
        <Student student={student} key={student.id} />
      ))}
      
    </div>
  );
}

export default Buttons;