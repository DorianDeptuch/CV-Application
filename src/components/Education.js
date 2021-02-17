import React from "react";

class Education extends React.Component {
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
      schoolName,
      major,
      yearsOfStudy,
      schoolCity,
      schoolDescription,
      handleChange,
      handleSubmit,
    } = this.props;

    return (
      <div className="Section">
        <h1 style={{ textAlign: "center" }}>Education</h1>
        <div>
          {!this.state.showEdit ? (
            <form
              name="schoolSubmit"
              className="formData"
              onSubmit={handleSubmit}
            >
              <div>
                <label htmlFor="schoolName">School Name</label>
                <input
                  type="text"
                  name="schoolName"
                  placeholder="School Name"
                  value={schoolName}
                  onChange={handleChange}
                ></input>
              </div>
              <div>
                <label htmlFor="major">Major</label>
                <input
                  type="text"
                  name="major"
                  placeholder="Major"
                  value={major}
                  onChange={handleChange}
                ></input>
              </div>
              <div>
                <label htmlFor="yearsOfStudy">Years of Study</label>
                <input
                  type="text"
                  name="yearsOfStudy"
                  placeholder="Years of Study"
                  value={yearsOfStudy}
                  onChange={handleChange}
                ></input>
              </div>
              <div>
                <label htmlFor="schoolCity">City</label>
                <input
                  type="text"
                  name="schoolCity"
                  placeholder="City"
                  value={schoolCity}
                  onChange={handleChange}
                ></input>
              </div>
              <div>
                <label htmlFor="schoolDescription">Description</label>
                <textarea
                  name="schoolDescription"
                  placeholder="Description"
                  value={schoolDescription}
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
                <u>Education</u>
              </h2>
              <p>
                <b>School Name: </b>
                {schoolName}
              </p>
              <p>
                <b>Major: </b>
                {major}
              </p>
              <p>
                <b>Years of study: </b>
                {yearsOfStudy}
              </p>
              <p>
                <b>City: </b>
                {schoolCity}
              </p>
              <p>
                <b>Description: </b>
                {schoolDescription}
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

export default Education;
