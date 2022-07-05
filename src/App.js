import React from "react";
import "./App.css";
import studentsData from "./Data/studentsData";
import studentProfileData from "./Data/mockData";
import Header from "./Components/Header";
import BarChart from "./Components/BarChart";
import Buttons from "./Components/Buttons";
import Checkboxes from "./Components/Checkboxes";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: studentsData,
      mockData: studentProfileData,
      checkFun: true,
      checkDifficulty: true,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = () => {
    
    this.setState({
      checkFun: !this.state.checkFun,
    });
  };

  render() {
    //gemiddelden verkrijgen van de opdrachten met difficulty
    //First it reduces the original array to a Map that accumulates the ratings of duplicate entries in an array.
    const mapDataDifficulty = this.state.data.reduce(
      (acc, { assignment, difficulty }) => {
        const match = acc.get(assignment);
        match ? match.push(difficulty) : acc.set(assignment, [difficulty]);
        return acc;
      },
      new Map()
    );

    //We then convert this Map back to an array using Array.from and reducing the array of ratings to an average.
    const averageArrayDifficulty = Array.from(
      mapDataDifficulty,
      ([assignment, difficulty]) => {
        const difficultyRating = Math.round(
          difficulty.reduce((a, r) => a + r) / difficulty.length
        );
        return { assignment, difficultyRating };
      }
    );

    const mapDataFun = this.state.data.reduce((acc, { assignment, fun }) => {
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
        <Checkboxes
          checkFun={this.state.checkFun}
          checkDifficulty={this.state.checkDifficulty}
          handleChange={this.handleChange}
        />
        <BarChart
          averageArrayFun={averageArrayFun}
          averageArrayDifficulty={averageArrayDifficulty}
        />
        <Buttons mockData={this.state.mockData} />
      </div>
    );
  }
}

export default App;
