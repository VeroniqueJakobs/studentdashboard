import React from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";

const StudentProfile = ({ data, mockData }) => {
  const { first_name } = useParams();

  return (
    <section>
      <div>
         {mockData
          .filter((student) => student.first_name === first_name)
          .map((student, index) => (
            <div key={index}>
              <h1>
                {student.first_name} {student.last_name}
              </h1>
              <p>Gender: {student.gender}</p>
              <p>Date of birth: {student.age}</p>
              <p>Email: {student.email}</p>
              <p>Phone: {student.phone}</p>
              <img
                src={student.profile_pic}
                alt="StudentLogo"
                className="profile-picture"
              />
            </div>
          ))}
      </div>
    </section>
  );
};

export default StudentProfile;
