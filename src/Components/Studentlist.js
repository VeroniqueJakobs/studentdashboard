import React from "react";
import Student from "./Student";

const StudentList = ({ combinedMockAndRatings}) => {
 
  return (
    <section className="hero">
      <div className="button-container">
      <h1 className="button-name"> Student Profiles</h1>
        <Student  combinedMockAndRatings={combinedMockAndRatings}/>
       
      </div>
    </section>
  );
};

export default StudentList;
