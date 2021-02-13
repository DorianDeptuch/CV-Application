import React from "react";

const Skills = (props) => {
  return (
    <div className="Section">
      <h1 style={{ textAlign: "center" }}>Additional Skills</h1>
      <div>
        <form className="formData" onSubmit={props.handleSubmit}>
          <div>
            <label for="skills">Name one or more Skill(s)</label>
            <textarea
              type="date"
              placeholder="Name one or more Skill(s)"
            ></textarea>
          </div>
        </form>
        <div className="addCancelDiv">
          <button>Cancel</button>
          <button>Submit</button>
          <button>Add Skill</button>
        </div>
      </div>
    </div>
  );
};

export default Skills;
