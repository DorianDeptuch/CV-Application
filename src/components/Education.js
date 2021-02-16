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
            <form className="formData" onSubmit={this.props.handleSubmit}>
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
            </div>
          )}
          <div className="addCancelDiv">
            {!this.state.showEdit ? (
              <button onClick={this.handleEdit}>Submit</button>
            ) : (
              <button onClick={this.handleEdit}>Edit</button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Education;
