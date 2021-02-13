import React from "react";

class Intro extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="Section">
        <h1 style={{ textAlign: "center" }}>Your Info</h1>
        <div>
          <form className="formData" onSubmit={this.props.handleSubmit}>
            <div>
              <label for="firstName">First Name</label>
              <input
                type="text"
                placeholder="First Name"
                value={this.props.firstName}
                onChange={this.props.handleChange}
              />
              {/* <p>{this.props.firstName}</p> */}
            </div>
            <div>
              <label for="lastName">Last Name</label>
              <input type="text" placeholder="Last Name"></input>
            </div>
            <div>
              <label for="email">Email</label>
              <input type="email" placeholder="Email"></input>
            </div>
            <div>
              <label for="phone">Phone</label>
              <input type="text" placeholder="Phone"></input>
            </div>
            <div>
              <label for="dateOfBirth">Description</label>
              <input
                type="text"
                placeholder="Date of Birth (DD-MM-YYYY)"
                pattern="^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$"
              ></input>
            </div>
          </form>
          <div className="addCancelDiv">
            <button>Cancel</button>
            <button>Submit</button>
            {/* <button>Edit</button> make submit turn into an edit button after submitting */}
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;
