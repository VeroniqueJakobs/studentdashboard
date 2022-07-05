import React from "react";

function Student(props) {
    console.log(props.student)
  return (
   
    <button 
      key={props.student.id}
      id={props.student.id}
      className="student-profile"
      value={props.student.title}
     // onClick={() => goToPageStudent(student)}  als je klikt op de button, ga je naar de pagina van deze student
    >
      {props.student.first_name}  {props.student.last_name}
     <img src={props.student.profile_pic} alt="StudentLogo" />
    </button>
  );
}

export default Student;
