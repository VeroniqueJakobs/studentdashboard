import React from "react";
import Student from "./Student";

const StudentList = ({ mockData, studentArrayDifficulty, studentArrayFun}) => {
 
  return (
    <section className="hero">
      <div className="button-container">
      <h1 className="button-name"> Student Profiles</h1>
        <Student  mockData={mockData} studentArrayFun={studentArrayFun}
                  studentArrayDifficulty={studentArrayDifficulty}/>
       
      </div>
    </section>
  );
};

export default StudentList;
