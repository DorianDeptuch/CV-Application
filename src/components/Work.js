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
    return (
      <div className="Section">
        <h1 style={{ textAlign: "center" }}>Work Experience</h1>
        <div>
          {!this.state.showEdit ? (
            <form className="formData" onSubmit={this.props.handleSubmit}>
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
          ) : (
            <div>
              <h2>
                <u>Work</u>
              </h2>
              <p>
                <b>Company name: </b>
                {this.props.companyName}
              </p>
              <p>
                <b>Role: </b>
                {this.props.role}
              </p>
              <p>
                <b>Years of work: </b>
                {this.props.yearsOfWork}
              </p>
              <p>
                <b>City: </b>
                {this.props.workCity}
              </p>
              <p>
                <b>Description: </b>
                {this.props.workDescription}
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

export default Work;
