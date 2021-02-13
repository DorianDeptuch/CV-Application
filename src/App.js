import React from "react";
import Intro from "./components/Intro";
import Education from "./components/Education";
import Work from "./components/Work";
import Skills from "./components/Skills";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      previewText: "Preview",
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
      infoExpanded: false,
      schoolExpanded: false,
      workExpanded: false,
      skillsExpanded: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePreview = this.handlePreview.bind(this);
  }

  handleClick() {
    this.setState({});
  }

  handleChange(e) {
    this.setState({
      text: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({});
  }

  handlePreview(e) {
    this.setState((previousState) => ({
      previewText:
        previousState.previewText === "Preview"
          ? (e.target.textContent = "Close")
          : (e.target.textContent = "Preview"),
    }));
  }

  render() {
    return (
      <div className="App">
        <h1>CV APP</h1>
        <button onClick={this.handlePreview}>Preview</button>
        <Intro
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          email={this.state.email}
          phone={this.state.phone}
          dob={this.state.dob}
        />
        <Education handleSubmit={this.handleSubmit} />
        <Work handleSubmit={this.handleSubmit} />
        <Skills handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
