import React from "react";

function Checkboxes({ handleChange, userInfo }) {
  
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
          name="isFun"
         // value="Fun"
          checked={userInfo.isFun}
          onChange={handleChange}
        />
        Fun
      </label>
      <label>
        <input
          type="checkbox"
          name="isDifficulty"
        //  value="Difficulty"  Bij gebruik van de value is het een ongecontroleerd element, vandaar het gebruik van checked
          checked={userInfo.isDifficulty}
          onChange={handleChange}
        />
        Difficulty
      </label>
    </div>
  );
}

export default Checkboxes;
