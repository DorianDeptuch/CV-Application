import React from "react";

class Skills extends React.Component {
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
        <h1 style={{ textAlign: "center" }}>Additional Skills</h1>
        <div>
          {!this.state.showEdit ? (
            <form className="formData" onSubmit={this.props.handleSubmit}>
              <div>
                <label htmlFor="skills">Name one or more Skill(s)</label>
                <textarea
                  value={this.props.skills}
                  onChange={this.props.handleChange}
                  placeholder="Name one or more Skill(s)"
                ></textarea>
              </div>
            </form>
          ) : (
            <div>
              <h2>
                <u>Skills</u>
              </h2>
              <b>Skills: </b>
              <p>{this.props.skills}</p>
            </div>
          )}
          <div className="addCancelDiv">
            {!this.state.showEdit ? (
              <button type="submit" onClick={this.handleEdit}>
                Submit
              </button>
            ) : (
              <button onClick={this.handleEdit}>Edit</button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
