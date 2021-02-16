import React from "react";
import Intro from "./components/Intro";
import Education from "./components/Education";
import Work from "./components/Work";
import Skills from "./components/Skills";
import Preview from "./components/Preview";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      previewText: "Preview",
      visible: true,
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      dob: "",
      schoolName: "",
      major: "",
      yearsOfStudy: "",
      schoolCity: "",
      schoolDescription: "",
      companyName: "",
      role: "",
      yearsOfWork: "",
      workCity: "",
      workDescription: "",
      skills: "",
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePreview = this.handlePreview.bind(this);
  }

  handleClick() {
    this.setState((previousState) => ({
      showEdit: !previousState.showEdit,
    }));
    console.log(this.state.showEdit);
  }

  handleChange(e) {
    this.setState({
      skills: e.target.value,
    });
    console.log(this.state.skills);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState((previousState) => ({
      showEdit: !previousState.showEdit,
    }));
  }

  handlePreview(e) {
    this.setState((previousState) => ({
      previewText:
        previousState.previewText === "Preview"
          ? (e.target.textContent = "Close")
          : (e.target.textContent = "Preview"),
      visible: !previousState.visible,
    }));
  }

  render() {
    return (
      <div className="App">
        <h1>CV APP</h1>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <button onClick={this.handlePreview}>Preview</button>
          {!this.state.visible ? (
            <button onClick={window.print}>Print</button>
          ) : null}
        </div>
        {this.state.visible ? (
          <Intro
            showEdit={this.state.showEdit}
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
            firstName={this.state.firstName}
            lastName={this.state.lastName}
            email={this.state.email}
            phone={this.state.phone}
            dob={this.state.dob}
          />
        ) : null}
        {this.state.visible ? (
          <Education
            showEdit={this.state.showEdit}
            handleSubmit={this.handleSubmit}
          />
        ) : null}
        {this.state.visible ? (
          <Work
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        ) : null}
        {this.state.visible ? (
          <Skills
            showEdit={this.state.showEdit}
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
            handleEdit={this.handleEdit}
          />
        ) : null}
        {!this.state.visible ? (
          <Preview
            firstName={this.state.firstName}
            lastName={this.state.lastName}
            email={this.state.email}
            phone={this.state.phone}
            dob={this.state.dob}
            schoolName={this.state.schoolName}
            major={this.state.major}
            yearsOfStudy={this.state.yearsOfStudy}
            schoolCity={this.state.schoolCity}
            schoolDescription={this.state.schoolDescription}
            companyName={this.state.companyName}
            role={this.state.role}
            yearsOfWork={this.state.yearsOfWork}
            workCity={this.state.workCity}
            workDescription={this.state.workDescription}
            skills={this.state.skills}
          />
        ) : null}
      </div>
    );
  }
}

// consider adding a button to add work experience, etc, by making a new component

export default App;
