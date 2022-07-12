import React, { useState } from "react";
import StudentList from "./Components/Studentlist";
import "./App.css";
import studentsData from "./Data/studentsData";
import studentProfileData from "./Data/mockData";
import Header from "./Components/Header";
import BarChart from "./Components/BarChart";
import Checkboxes from "./Components/Checkboxes";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import StudentProfile from "./Components/StudentProfile";

function App() {
  const [data, setData] = useState(studentsData);
  const [mockData, setMockData] = useState(studentProfileData);
  const [userInfo, setUserInfo] = useState({
    checkRating: false,
    response: false,
  });
  console.log(mockData);

  const handleChange = (e) => {
    const { value, checked } = e.target;
    const { checkRating } = userInfo;

    if (checked) {
      setUserInfo({
        checkRating: [...checkRating, value],
        response: [...checkRating, value],
        
      });
    } else {
      setUserInfo({
        checkRating: checkRating.filter((e) => e !== value),
        response: checkRating.filter((e) => e !== value),
      });
    }
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
      const difficultyRating = Math.round(
        difficulty.reduce((a, r) => a + r) / difficulty.length
      );
      return { assignment, difficultyRating };
    }
  );

  const mapDataFun = data.reduce((acc, { assignment, fun }) => {
    const match = acc.get(assignment);
    match ? match.push(fun) : acc.set(assignment, [fun]);
    return acc;
  }, new Map());

  const averageArrayFun = Array.from(mapDataFun, ([assignment, fun]) => {
    const funRating = Math.round(fun.reduce((a, r) => a + r) / fun.length);
    return { assignment, funRating };
  });

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
                <Checkboxes handleChange={handleChange} />
                <BarChart
                  averageArrayFun={averageArrayFun}
                  averageArrayDifficulty={averageArrayDifficulty}
                />
                <StudentList mockData={mockData} />
              </>
            }
          />
          <Route
            path="/students/:first_name"
            element={<StudentProfile mockData={mockData} data={data} />}
          />
        </Routes>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
