import React from "react";

const Education = (props) => {
  return (
    <div className="Section">
      <h1 style={{ textAlign: "center" }}>Education</h1>
      <div>
        <form className="formData" onSubmit={props.handleSubmit}>
          <div>
            <label htmlFor="schoolName">School Name</label>
            <input type="text" placeholder="School Name"></input>
          </div>
          <div>
            <label htmlFor="major">Major</label>
            <input type="text" placeholder="Major"></input>
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="Years of Study"></input>
          </div>
          <div>
            <label htmlFor="city">City</label>
            <input type="text" placeholder="City"></input>
          </div>
          <div>
            <label htmlFor="description">Description</label>
            <textarea type="date" placeholder="Description"></textarea>
          </div>
        </form>
        <div className="addCancelDiv">
          <button>Cancel</button>
          <button>Submit</button>
          <button>Add Education</button>
          {props.showEdit ? <button>Edit</button> : null}
        </div>
      </div>
    </div>
  );
};

export default Education;
