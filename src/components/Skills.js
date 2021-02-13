import React from "react";

class Skills extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showEdit: false,
      showCancel: false,
    };
    this.handleEdit = this.handleEdit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleEdit() {
    this.setState((previousState) => ({
      showEdit: !previousState.showEdit,
    }));
    console.log(this.state.showEdit);
  }

  handleCancel() {
    this.setState((previousState) => ({
      showCancel: !previousState.showCancel,
    }));
    console.log(this.state.showCancel);
  }

  render() {
    return (
      <div className="Section">
        <h1 style={{ textAlign: "center" }}>Additional Skills</h1>
        <div>
          <form className="formData" onSubmit={this.props.handleSubmit}>
            <div>
              <label htmlFor="skills">Name one or more Skill(s)</label>
              {!this.props.showEdit ? (
                <textarea
                  type="date"
                  placeholder="Name one or more Skill(s)"
                ></textarea>
              ) : (
                <h1>test</h1>
              )}
            </div>
          </form>
          <div className="addCancelDiv">
            <button>Cancel</button>
            {!this.state.showEdit ? (
              <button onClick={this.props.handleClick}>Submit</button>
            ) : null}
            {/* <button>Add Skill</button> */}
            {this.props.showEdit ? (
              <button onClick={this.handleEdit}>Edit</button>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
