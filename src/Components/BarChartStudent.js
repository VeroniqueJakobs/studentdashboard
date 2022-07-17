import React from "react";
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryTheme,
  VictoryGroup,
  VictoryLegend,
  VictoryContainer,
  VictoryLabel,
} from "victory";

function BarChartStudent({
  combinedMockAndRatings,
  averageArrayDifficulty,
  studentArrayFun,
  studentArrayDifficulty,
  userInfo,
}) {
  console.log(averageArrayDifficulty)
  const fun =studentArrayFun

  const difficulty = studentArrayDifficulty

  const assignment = averageArrayDifficulty?.map((student) => {
    return student.assignment;
  });

  return (
    <VictoryChart
      theme={VictoryTheme.material}
      width={670}
      height={300}
      domain={{ x: [0, 57] }}
      containerComponent={
        <VictoryContainer width={700} height={340} responsive={true} />
      }
    >
      <VictoryLegend
        x={265}
        y={24}
        title=""
        itemsPerRow={2}
        orientation="horizontal"
        gutter={40}
        style={{ border: { stroke: "none" }, title: { fontSize: 8 } }}
        data={[
          { name: "Fun", symbol: { fill: "lightgreen", type: "square" } },
          { name: "Difficulty", symbol: { fill: "red", type: "square" } },
        ]}
      />
      <VictoryLabel
        x={624}
        y={262}
        text="assignment"
        style={[{ fill: "black", fontSize: 10, fontWeight: "bold" }]}
      />

      <VictoryAxis
        // X-as
        style={{
          axisLabel: { fontSize: 14, padding: 40 },
          ticks: { stroke: "grey", size: 4 },
          tickLabels: {
            fontSize: 5,
            padding: 2,
            angle: -70,
            textAnchor: "end",
          },
        }}
        // tickValues specifies both the number of ticks and where they are placed on the axis
        // tickValues={[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20 enz. tot aan de lengte van de opdrachten]}
        tickFormat={assignment}
      />
      <VictoryLabel
        x={24}
        y={77}
        angle={-90}
        text="rating"
        style={[{ fill: "black", fontSize: 10, fontWeight: "bold" }]}
      />
      <VictoryAxis
        //Y-as
        style={{
          axisLabel: { fontSize: 14, padding: 30 },
          ticks: { stroke: "grey", size: 1 },
          tickLabels: { fontSize: 8, padding: 5 },
        }}
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
        <VictoryBar
          data={difficulty}
          style={{ data: { display: userInfo.isFun ? "block" : "none" } }}
        />
        <VictoryBar
          data={fun}
          style={{
            data: { display: userInfo.isDifficulty ? "block" : "none" },
          }}
        />
      </VictoryGroup>
    </VictoryChart>
  );
}

export default BarChartStudent;
