import React, { useDebugValue, useState } from "react";
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
import BarChartStudent from "./Components/BarChartStudent";

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
    studentFun,
    ([studentName, difficulty]) => {
      const difficultyRating = difficulty;
      return { studentName, difficultyRating };
    }
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
                <Checkboxes handleChange={handleChange} userInfo={userInfo} />
                <BarChart
                  averageArrayFun={averageArrayFun}
                  averageArrayDifficulty={averageArrayDifficulty}
                  userInfo={userInfo}
                />
                <StudentList
                  mockData={mockData}
                  studentArrayFun={studentArrayFun}
                  studentArrayDifficulty={studentArrayDifficulty}
                />
              </>
            }
          />
          <Route
            path="/students/:first_name"
            element={
              <>
                <Checkboxes handleChange={handleChange} userInfo={userInfo} />
                <BarChartStudent
                  averageArrayDifficulty={averageArrayDifficulty}
                  userInfo={userInfo}
                />
                <StudentProfile
                  mockData={mockData}
                  data={data}
                  studentFun={studentArrayFun}
                  studentDifficulty={studentArrayDifficulty}
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
