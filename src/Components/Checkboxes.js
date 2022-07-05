import React from "react";

function Checkboxes(props) {
  return (
    <div className="checkboxes">
      <h1> Select the rating you want to view</h1>
      <label>
        <input
          type="checkbox"
          name="fun"
          value="fun"
          checked={props.checkFun}
          onChange={props.handleChange}
        />
        Fun 
      </label>
      <label>
        <input
          type="checkbox"
          name="difficult"
          value="difficult"
          checked={props.checkDifficulty}
          onChange={props.handleChange}
        />
        Difficult 
      </label>
    </div>
  );
}

export default Checkboxes;
