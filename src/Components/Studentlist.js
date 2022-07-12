import React from "react";
import Student from "./Student";

const StudentList = ({ mockData}) => {
  
  return (
    <section className="hero">
      <div className="button-container">
      <h1 className="button-name"> Student Profiles</h1>
        <Student  mockData={mockData}/>
      </div>
    </section>
  );
};

export default StudentList;
