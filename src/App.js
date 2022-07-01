import React from "react";
import studentsData from "./studentsData";
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryTheme,
  VictoryStack,
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

    const assignment = studentsData.map((student) => {
      return student.assignment;
    });
    return (
      <div>
        <VictoryChart theme={VictoryTheme.material} domainPadding={200}>
          <VictoryAxis
            // X-as
            label="Assignment"
            // tickValues={assignment} // tickValues specifies both the number of ticks and where they are placed on the axis
            tickFormat={assignment} // tickFormat specifies how ticks should be displayed
          />
          <VictoryAxis
            //Y-as
            label="Fun rating"
            dependentAxis
            tickFormat={fun}
          />

          <VictoryStack>
            <VictoryBar
              data={fun}
              x="assignment" // data accessor for x values
              y="10" // data accessor for y values
            />
          </VictoryStack>
        </VictoryChart>
      </div>
    );
  }
}

export default App;
