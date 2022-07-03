import React from "react";
import studentsData from "./studentsData";
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
    this.state = {};
  }

  render() {
    const fun = studentsData.map((student) => {
      return student.fun;
    });

    const difficulty = studentsData.map((student) => {
      return student.difficulty;
    });
    console.log(difficulty);

    const assignment = studentsData.map((student) => {
      return student.assignment;
    });
    console.log(assignment);
    return (
      <div>
        <VictoryChart theme={VictoryTheme.material} width={700} height={300}>
          <VictoryAxis
            // X-as
            style={{
              axisLabel: { fontSize: 14, padding: 30},
              ticks: { stroke: "grey", size: 5 },
              tickLabels: { fontSize: 7, padding: 20, angle: -45 },
            }}
            label="Assignment"
            // tickValues specifies both the number of ticks and where they are placed on the axis
            tickFormat={assignment} // tickFormat specifies how ticks should be displayed
          />

          <VictoryAxis
            //Y-as
            style={{
              axisLabel: { fontSize: 14, padding: 30 },
              ticks: { stroke: "grey", size: 1 },
              tickLabels: { fontSize: 10, padding: 5 },
            }}
            label="Fun rating"
            dependentAxis
            tickFormat={fun}
          />

          <VictoryGroup
            offset={0}
            style={{ data: { width: 4} }}
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
