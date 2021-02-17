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
            <form
              name="skillsSubmit"
              className="formData"
              onSubmit={this.props.handleSubmit}
            >
              <div>
                <label htmlFor="skills">Name one or more Skill(s)</label>
                <textarea
                  name="skills"
                  placeholder="Name one or more Skill(s)"
                  value={this.props.skills}
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
                <u>Skills</u>
              </h2>
              <b>Skills: </b>
              <p>{this.props.skills}</p>
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

export default Skills;
