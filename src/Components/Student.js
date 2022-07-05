import React from "react";

function Student(props) {
    
  return (
   
    <button 
      key={props.student.id}
      id={props.student.id}
      className="student-profiles"
      value={props.student.title}
     // onClick={() => goToPageStudent(student)}  als je klikt op de button, ga je naar de pagina van deze student
    >
    
     <img src={props.student.profile_pic} alt="StudentLogo" className="image-button "/>
     <h3 className="button-student">{props.student.first_name}</h3>
    </button>
  );
}

export default Student;
