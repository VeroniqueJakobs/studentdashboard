import React from "react";
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryTheme,
  VictoryGroup,
} from "victory";

function BarChart(props) {
  const fun = props.averageArrayFun.map((student) => {
    return student.funRating;
  });

  const difficulty = props.averageArrayDifficulty.map((student) => {
    return student.difficultyRating;
  });

  const assignment = props.averageArrayDifficulty.map((student) => {
    return student.assignment;
  });

  return (
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
  );
}

export default BarChart;