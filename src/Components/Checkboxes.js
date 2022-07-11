import React from "react";

function Checkboxes({ handleChange }) {
  return (
    <div className="checkboxes">
      <h1 className="title-overview">
        Overview of the average of the evaluations of all students
      </h1>
      <h2 className="select-checkboxes">
        {" "}
        Select the evaluation you want to view:
      </h2>
      <label className="label-checkbox">
        <input
          type="checkbox"
          name="checkRating"
          value="Fun"
          onChange={handleChange}
        />
        Fun
      </label>
      <label>
        <input
          type="checkbox"
          name="checkRating"
          value="Difficulty"
          onChange={handleChange}
        />
        Difficult
      </label>
    </div>
  );
}

export default Checkboxes;
