import React from "react";

function Checkboxes(props) {
  return (
    <div className="checkboxes">
      <h1 className="title-overview">Overview of the average of the evaluations of all students</h1>
      <h2 className="select-checkboxes"> Select the evaluation you want to view:</h2>
      <label className="label-checkbox">
        <input
          type="checkbox"
          name="fun"
          checked={props.isFun}
          onChange={props.handleChange}
      
        />
        Fun 
      </label>
      <label>
        <input
          type="checkbox"
          name="difficult"
         checked={props.isDifficulty}
          onChange={props.handleChange}
        />
        Difficult 
      </label>
    </div>
  );
}

export default Checkboxes;
