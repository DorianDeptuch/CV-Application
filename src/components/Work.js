import React from "react";

class Work extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showEdit: false,
    };
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleEdit() {
    this.setState((previousState) => ({
      showEdit: !previousState.showEdit,
    }));
  }

  render() {
    const {
      companyName,
      role,
      yearsOfWork,
      workCity,
      workDescription,
      handleChange,
      handleSubmit,
    } = this.props;

    return (
      <div className="Section">
        <h1 style={{ textAlign: "center" }}>Work Experience</h1>
        <div>
          {!this.state.showEdit ? (
            <form
              name="workSubmit"
              className="formData"
              onSubmit={handleSubmit}
            >
              <div>
                <label htmlFor="companyName">Company Name</label>
                <input
                  type="text"
                  name="companyName"
                  placeholder="Company Name"
                  onChange={handleChange}
                  value={companyName}
                ></input>
              </div>
              <div>
                <label htmlFor="role">Role</label>
                <input
                  type="text"
                  name="role"
                  placeholder="Role"
                  value={role}
                  onChange={handleChange}
                ></input>
              </div>
              <div>
                <label htmlFor="yearsOfWork">Years of Work</label>
                <input
                  type="email"
                  name="yearsOfWork"
                  placeholder="Years of Work"
                  value={yearsOfWork}
                  onChange={handleChange}
                ></input>
              </div>
              <div>
                <label htmlFor="workCity">City</label>
                <input
                  type="text"
                  name="workCity"
                  placeholder="City"
                  onChange={handleChange}
                  value={workCity}
                ></input>
              </div>
              <div>
                <label htmlFor="workDescription">Description</label>
                <textarea
                  name="workDescription"
                  placeholder="Description"
                  value={workDescription}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="addCancelDiv">
                <button type="submit" onClick={this.handleEdit}>
                  Submit
                </button>
              </div>
            </form>
          ) : (
            <div>
              <h2>
                <u>Work</u>
              </h2>
              <p>
                <b>Company name: </b>
                {companyName}
              </p>
              <p>
                <b>Role: </b>
                {role}
              </p>
              <p>
                <b>Years of work: </b>
                {yearsOfWork}
              </p>
              <p>
                <b>City: </b>
                {workCity}
              </p>
              <p>
                <b>Description: </b>
                {workDescription}
              </p>
              <div className="addCancelDiv">
                <button onClick={this.handleEdit}>Edit</button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Work;
