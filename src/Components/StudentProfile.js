import React from "react";
import { useParams } from "react-router-dom";

const StudentProfile = ({ data }) => {
  const { first_name } = useParams();

  return (
    <section>
      <div>
        {data
          .filter((student) => student.first_name === first_name)
          .map((student, index) => (
            <div key={index} >
              <h1>{student.first_name}</h1>
              <p>{student.age}</p>
            </div>
          ))}
      </div>
    </section>
  );
};

export default StudentProfile;
