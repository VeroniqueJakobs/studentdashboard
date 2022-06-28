import "./App.css";
import React from "react";
import Papa from "papaparse";
import data from "./CSV.csv";

//Parse CSV file 
function App() {
  Papa.parse(data, {
    header: true,
    download: true,
    dynamicTyping: true,
    complete: function (results) {
      data = results.data;
      console.log(data);
      console.log(results);
    },
  });

  return (<div></div>);
}

export default App;
