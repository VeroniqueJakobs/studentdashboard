import React from "react";
import { Link } from "react-router-dom";
import { Data } from "victory";
import BarChartStudent from "./BarChartStudent";
const Student = ({combinedMockAndRatings}) => {

  return (
    <div>
      
      {combinedMockAndRatings?.map((student) => (
        <button
          key={student.id}
          id={student.id}
          className="student-profiles"
          value={student.title}
          name={student.first_name}
                  >
          <img
            src={student.profile_pic}
            alt="StudentLogo"
            className="image-button "
          />
          <Link to={`/students/${student.first_name}`}>
            {" "}
            <h1 className="button-student">{student.first_name}</h1>
          </Link>
        </button>
      ))}
        </div>
  );
};

export default Student;
