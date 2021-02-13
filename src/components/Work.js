import React from "react";

const Work = (props) => {
  return (
    <div className="Section">
      <h1 style={{ textAlign: "center" }}>Work Experience</h1>
      <div>
        <form className="formData" onSubmit={props.handleSubmit}>
          <div>
            <label for="companyName">Company Name</label>
            <input type="text" placeholder="Company Name"></input>
          </div>
          <div>
            <label for="role">Role</label>
            <input type="text" placeholder="Role"></input>
          </div>
          <div>
            <label for="yearsOfWork">Years of Work</label>
            <input type="email" placeholder="Years of Work"></input>
          </div>
          <div>
            <label for="city">City</label>
            <input type="text" placeholder="City"></input>
          </div>
          <div>
            <label for="description">Description</label>
            <textarea type="date" placeholder="Description"></textarea>
          </div>
        </form>
        <div className="addCancelDiv">
          <button>Cancel</button>
          <button>Submit</button>
          <button>Add Work Experience</button>
        </div>
      </div>
    </div>
  );
};

export default Work;
