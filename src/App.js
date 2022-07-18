import React, { useState } from "react";
import StudentList from "./Components/Studentlist";
import "./App.css";
import studentsData from "./Data/studentsData";
import studentProfileData from "./Data/mockData";
import Header from "./Components/Header";
import BarChart from "./Components/BarChart";
import Checkboxes from "./Components/Checkboxes";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StudentProfile from "./Components/StudentProfile";

function App() {
  const [data, setData] = useState(studentsData);
  const [mockData, setMockData] = useState(studentProfileData);
  const [userInfo, setUserInfo] = useState({
    isFun: true,
    isDifficulty: true,
  });

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const isChecked = event.target.checked;

    setUserInfo({
      ...userInfo,
      [name]: isChecked,
    });
  };

  //gemiddelden verkrijgen van de opdrachten met difficulty
  const mapDataDifficulty = data.reduce((acc, { assignment, difficulty }) => {
    const match = acc.get(assignment);
    match ? match.push(difficulty) : acc.set(assignment, [difficulty]);
    return acc;
  }, new Map());

  const averageArrayDifficulty = Array.from(
    mapDataDifficulty,
    ([assignment, difficulty]) => {
      const difficultyRating =
        difficulty.reduce((a, r) => a + r) / difficulty.length;
      return { assignment, difficultyRating };
    }
  );

  //gemiddelden verkrijgen van de opdrachten met fun
  const mapDataFun = data.reduce((acc, { assignment, fun }) => {
    const match = acc.get(assignment);
    match ? match.push(fun) : acc.set(assignment, [fun]);
    return acc;
  }, new Map());

  const averageArrayFun = Array.from(mapDataFun, ([assignment, fun]) => {
    const funRating = fun.reduce((a, r) => a + r) / fun.length;
    return { assignment, funRating };
  });

  //aparte evaluaties verkrijgen van de studenten van de opdrachten met fun
  const studentFun = data.reduce((acc, { studentName, fun }) => {
    const match = acc.get(studentName);
    match ? match.push(fun) : acc.set(studentName, [fun]);
    return acc;
  }, new Map());

  const studentArrayFun = Array.from(studentFun, ([studentName, fun]) => {
    const funRating = fun;
    return { studentName, funRating };
  });

  //aparte evaluaties verkrijgen van de studenten van de opdrachten met difficulty
  const studentDifficulty = data.reduce((acc, { studentName, difficulty }) => {
    const match = acc.get(studentName);
    match ? match.push(difficulty) : acc.set(studentName, [difficulty]);
    return acc;
  }, new Map());

  const studentArrayDifficulty = Array.from(
    studentDifficulty,
    ([studentName, difficulty]) => {
      const difficultyRating = difficulty;
      return { studentName, difficultyRating };
    }
  );

  //Fun en difficultyrating student samenvoegen in mockData
  const combinedMockAndDifficulty = mockData.map((obj, index) =>
    Object.assign({}, obj, studentArrayDifficulty[index])
  );
  const combinedMockAndRatings = combinedMockAndDifficulty.map((obj, index) =>
    Object.assign({}, obj, studentArrayFun[index])
  );

  return (
    <div>
      <Header />
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <h1 className="title-overview">
                  Overview of the average of the evaluations of all students
                </h1>
                <Checkboxes handleChange={handleChange} userInfo={userInfo} />
                <BarChart
                  averageArrayFun={averageArrayFun}
                  averageArrayDifficulty={averageArrayDifficulty}
                  userInfo={userInfo}
                />
                <StudentList combinedMockAndRatings={combinedMockAndRatings} />
              </>
            }
          />
          <Route
            path="/students/:first_name"
            element={
              <>
                <StudentProfile
                  combinedMockAndRatings={combinedMockAndRatings}
                  userInfo={userInfo}
                  averageArrayDifficulty={averageArrayDifficulty}
                  handleChange={handleChange}
                />
              </>
            }
          />
        </Routes>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
