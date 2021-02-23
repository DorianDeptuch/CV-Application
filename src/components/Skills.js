import React, { useState } from "react";

const Skills = (props) => {
  const [showEdit, setShowEdit] = useState(false);

  const handleEdit = () => {
    setShowEdit((previousState) => !previousState);
  };

  const { skills, handleChange, handleSubmit, visible } = props;

  return (
    <div
      style={visible ? { display: "block" } : { display: "none" }}
      className="Section"
    >
      <h1 style={{ textAlign: "center" }}>Additional Skills</h1>
      <div>
        {!showEdit ? (
          <form
            name="skillsSubmit"
            className="formData"
            onSubmit={handleSubmit}
          >
            <div>
              <label htmlFor="skills">Name one or more Skill(s)</label>
              <textarea
                name="skills"
                placeholder="Name one or more Skill(s)"
                value={skills}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="addCancelDiv">
              <button type="submit" onClick={handleEdit}>
                Submit
              </button>
            </div>
          </form>
        ) : (
          <div>
            <h2>
              <u>Skills</u>
            </h2>
            <b>Skills: </b>
            <p>{skills}</p>
            <div className="addCancelDiv">
              <button onClick={handleEdit}>Edit</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Skills;
