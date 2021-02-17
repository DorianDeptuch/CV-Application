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
    return (
      <div className="Section">
        <h1 style={{ textAlign: "center" }}>Education</h1>
        <div>
          {!this.state.showEdit ? (
            <form
              name="schoolSubmit"
              className="formData"
              onSubmit={this.props.handleSubmit}
            >
              <div>
                <label htmlFor="schoolName">School Name</label>
                <input
                  type="text"
                  name="schoolName"
                  placeholder="School Name"
                  value={this.props.schoolName}
                  onChange={this.props.handleChange}
                ></input>
              </div>
              <div>
                <label htmlFor="major">Major</label>
                <input
                  type="text"
                  name="major"
                  placeholder="Major"
                  value={this.props.major}
                  onChange={this.props.handleChange}
                ></input>
              </div>
              <div>
                <label htmlFor="yearsOfStudy">Years of Study</label>
                <input
                  type="text"
                  name="yearsOfStudy"
                  placeholder="Years of Study"
                  value={this.props.yearsOfStudy}
                  onChange={this.props.handleChange}
                ></input>
              </div>
              <div>
                <label htmlFor="schoolCity">City</label>
                <input
                  type="text"
                  name="schoolCity"
                  placeholder="City"
                  value={this.props.schoolCity}
                  onChange={this.props.handleChange}
                ></input>
              </div>
              <div>
                <label htmlFor="schoolDescription">Description</label>
                <textarea
                  name="schoolDescription"
                  placeholder="Description"
                  value={this.props.schoolDescription}
                  onChange={this.props.handleChange}
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
                {this.props.schoolName}
              </p>
              <p>
                <b>Major: </b>
                {this.props.major}
              </p>
              <p>
                <b>Years of study: </b>
                {this.props.yearsOfStudy}
              </p>
              <p>
                <b>City: </b>
                {this.props.schoolCity}
              </p>
              <p>
                <b>Description: </b>
                {this.props.schoolDescription}
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
