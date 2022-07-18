import React from "react";
import { useParams } from "react-router-dom";
import BarChartStudent from "./BarChartStudent";
import Checkboxes from "./Checkboxes";

const StudentProfile = ({
  combinedMockAndRatings,
  userInfo,
  handleChange,
  averageArrayDifficulty,
}) => {
  const { first_name } = useParams();

  return (
    <section>
      <div>
        {combinedMockAndRatings
          .filter((student) => student.first_name === first_name)
          .map((student, index) => (
            <div key={index}>
              <h1 className="student-title-overview">
                Overview of the evaluation of{" "}
              </h1>
              <h2 className="student-name">
                {student.first_name} {student.last_name}
              </h2>
              <Checkboxes handleChange={handleChange} userInfo={userInfo} />
              <BarChartStudent
                studentArrayFun={student.funRating}
                studentArrayDifficulty={student.difficultyRating}
                userInfo={userInfo}
                averageArrayDifficulty={averageArrayDifficulty}
              />

              <div className="student-info">
                <img
                  src={student.profile_pic}
                  alt="StudentLogo"
                  className="profile-picture-separate"
                />
                <p className="profile-info">Gender: {student.gender}</p>
                <p className="profile-info">Email: {student.email}</p>
                <p className="profile-info">Phone: {student.phone}</p>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default StudentProfile;
