import React from "react";

const Work = (props) => {
  return (
    <div className="Section">
      <h1 style={{ textAlign: "center" }}>Work Experience</h1>
      <div>
        <form className="formData" onSubmit={props.handleSubmit}>
          <div>
            <label htmlFor="companyName">Company Name</label>
            <input type="text" placeholder="Company Name"></input>
          </div>
          <div>
            <label htmlFor="role">Role</label>
            <input type="text" placeholder="Role"></input>
          </div>
          <div>
            <label htmlFor="yearsOfWork">Years of Work</label>
            <input type="email" placeholder="Years of Work"></input>
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
          <button>Add Work Experience</button>
          {props.showEdit ? <button>Edit</button> : null}
        </div>
      </div>
    </div>
  );
};

export default Work;
