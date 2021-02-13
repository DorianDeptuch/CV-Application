import React from "react";

class Intro extends React.Component {
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
        <h1 style={{ textAlign: "center" }}>Your Info</h1>
        <div>
          <form className="formData" onSubmit={this.props.handleSubmit}>
            <div>
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                placeholder="First Name"
                value={this.props.firstName}
                onChange={this.props.handleChange}
              />
              {/* <p>{this.props.firstName}</p> */}
            </div>
            <div>
              <label htmlFor="lastName">Last Name</label>
              <input type="text" placeholder="Last Name"></input>
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input type="email" placeholder="Email"></input>
            </div>
            <div>
              <label htmlFor="phone">Phone</label>
              <input type="text" placeholder="Phone"></input>
            </div>
            <div>
              <label htmlFor="dateOfBirth">Description</label>
              <input
                type="text"
                placeholder="Date of Birth (DD-MM-YYYY)"
                pattern="^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$"
              ></input>
            </div>
          </form>
          <div className="addCancelDiv">
            {this.state.showCancel ? <button>Cancel</button> : null}
            {!this.state.showEdit ? (
              <button onClick={this.handleEdit}>Submit</button>
            ) : null}
            {this.state.showEdit ? (
              <button onClick={this.handleCancel}>Edit</button>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;
