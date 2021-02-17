import React from "react";

class Intro extends React.Component {
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
      firstName,
      lastName,
      email,
      phone,
      dob,
      handleChange,
      handleSubmit,
    } = this.props;

    return (
      <div className="Section">
        <h1 style={{ textAlign: "center" }}>Your Info</h1>
        <div>
          {!this.state.showEdit ? (
            <form
              name="introSubmit"
              className="formData"
              onSubmit={handleSubmit}
            >
              <div>
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={firstName}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={handleChange}
                ></input>
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={email}
                  onChange={handleChange}
                ></input>
              </div>
              <div>
                <label htmlFor="phone">Phone</label>
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone"
                  value={phone}
                  onChange={handleChange}
                ></input>
              </div>
              <div>
                <label htmlFor="dob">Date of Birth</label>
                <input
                  type="text"
                  name="dob"
                  placeholder="Date of Birth (DD-MM-YYYY)"
                  value={dob}
                  onChange={handleChange}
                  // pattern="^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$"
                ></input>
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
                <u>Info</u>
              </h2>
              <p>
                <b>First Name: </b>
                {firstName}
              </p>
              <p>
                <b>Last Name: </b>
                {lastName}
              </p>
              <p>
                <b>Email: </b>
                {email}
              </p>
              <p>
                <b>Phone: </b>
                {phone}
              </p>
              <p>
                <b>Date of birth: </b>
                {dob}
              </p>
              <div className="addCancelDiv">
                <button type="button" onClick={this.handleEdit}>
                  Edit
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Intro;
