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
      // introSubmit: false,
      // workSubmit: false,
      // schoolSubmit: false,
      // skillsSubmit: false,
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
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePreview = this.handlePreview.bind(this);
  }

  handleChange(e) {
    let name = e.target.name;
    this.setState({
      [name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let formName = e.target.name;
    this.setState((prev) => ({
      [formName]: !prev.formName,
    }));
    //Fix this??
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
  componentDidUpdate() {
    console.log(this.state);
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
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
            schoolName={this.state.schoolName}
            major={this.state.major}
            yearsOfStudy={this.state.yearsOfStudy}
            schoolCity={this.state.schoolCity}
            schoolDescription={this.state.schoolDescription}
          />
        ) : null}
        {this.state.visible ? (
          <Work
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
            companyName={this.state.companyName}
            role={this.state.role}
            yearsOfWork={this.state.yearsOfWork}
            workCity={this.state.workCity}
            workDescription={this.state.workDescription}
          />
        ) : null}
        {this.state.visible ? (
          <Skills
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
            skills={this.state.skills}
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
//  TODO
// consider adding a button to add work experience, etc, by making a new component
// Add regex patterns for each input and form validation
// Figure out error: "Form submission canceled because the form is not connected"
// Figure out why when I come out of preview mode, the forms show back up instead of the submitted content
// Re-arrange order of attributes in each module to stay consistent
// Add a Date method to change Date of birth to Date String

export default App;
