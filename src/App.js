import React from "react";
import "./App.css";
import studentsData from "./Data/studentsData";
import Header from "./Components/Header";
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryTheme,
  VictoryGroup,
} from "victory";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data:studentsData
    }
  }

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

    const fun = averageArrayFun.map((student) => {
      return student.funRating;
    });

    const difficulty = averageArrayDifficulty.map((student) => {
      return student.difficultyRating;
    });

    const assignment = averageArrayDifficulty.map((student) => {
      return student.assignment;
    });

    return (
      <div>
        <Header />
        <VictoryChart
          theme={VictoryTheme.material}
          width={700}
          height={300}
          domain={{ x: [0, 58] }}
        >
          <VictoryAxis
            // X-as

            style={{
              axisLabel: { fontSize: 14, padding: 30 },
              ticks: { stroke: "grey", size: 1 },
              tickLabels: { fontSize: 6, padding: 20, angle: -70 },
            }}
            label="Assignment"
            // tickValues specifies both the number of ticks and where they are placed on the axis
            tickValues={assignment}
          />

          <VictoryAxis
            //Y-as

            style={{
              axisLabel: { fontSize: 14, padding: 30 },
              ticks: { stroke: "grey", size: 1 },
              tickLabels: { fontSize: 10, padding: 5 },
            }}
            label="Rating"
            dependentAxis
            //The tickValues prop explicitly specifies a set of tick values to draw on the axis.
            tickValues={[1, 2, 3, 4, 5]}
          />

          <VictoryGroup
            offset={3} //The offset prop determines the number of pixels each element in a group should be offset from its original position of the on the independent axis
            //In the case of groups of bars, this number should be equal to the width of the bar plus the desired spacing between bars.
            style={{ data: { width: 3 } }}
            colorScale={["lightgreen", "red"]}
          >
            <VictoryBar data={fun} />
            <VictoryBar data={difficulty} />
          </VictoryGroup>
        </VictoryChart>
      </div>
    );
  }
}

export default App;
