import React from "react";
import { useParams } from "react-router-dom";
import BarChartStudent from "./BarChart";

const StudentProfile = ({
  mockData,
  studentArrayDifficulty,
  studentArrayFun,
}) => {
  const { first_name } = useParams();

  return (
    <section>
      <div>
        {mockData
          .filter((student) => student.first_name === first_name)
          .map((student, index) => (
            <div key={index}>
              <div>
                <h1 className="student-title-overview">
                  Overview of the evaluation of{" "}
                </h1>
                <h2 className="student-name">
                  {student.first_name} {student.last_name}
                </h2>

                <img
                  src={student.profile_pic}
                  alt="StudentLogo"
                  className="profile-picture"
                />
              </div>

              <p>Gender: {student.gender}</p>
              <p>Date of birth: {student.age}</p>
              <p>Email: {student.email}</p>
              <p>Phone: {student.phone}</p>
            </div>
          ))}
      </div>
    </section>
  );
};

export default StudentProfile;
