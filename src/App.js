import React, { useState } from "react";
import Intro from "./components/Intro";
import Education from "./components/Education";
import Work from "./components/Work";
import Skills from "./components/Skills";
import Preview from "./components/Preview";
import "./App.css";

const App = () => {
  const [state, setState] = useState({
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
  });

  const handleChange = (e) => {
    let name = e.target.name;
    setState({ ...state, [name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let formName = e.target.name;
    setState((prev) => ({ ...state, [formName]: !prev.formName }));
    //Fix this??
  };

  const handlePreview = (e) => {
    setState((previousState) => ({
      ...state,
      previewText:
        previousState.previewText === "Preview"
          ? (e.target.textContent = "Close")
          : (e.target.textContent = "Preview"),
      visible: !previousState.visible,
    }));
  };

  return (
    <div className="App">
      <h1>CV APP</h1>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <button onClick={handlePreview}>Preview</button>
        {!state.visible ? <button onClick={window.print}>Print</button> : null}
      </div>

      <Intro
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        firstName={state.firstName}
        lastName={state.lastName}
        email={state.email}
        phone={state.phone}
        dob={state.dob}
        visible={state.visible}
      />

      <Education
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        schoolName={state.schoolName}
        major={state.major}
        yearsOfStudy={state.yearsOfStudy}
        schoolCity={state.schoolCity}
        schoolDescription={state.schoolDescription}
        visible={state.visible}
      />

      <Work
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        companyName={state.companyName}
        role={state.role}
        yearsOfWork={state.yearsOfWork}
        workCity={state.workCity}
        workDescription={state.workDescription}
        visible={state.visible}
      />

      <Skills
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        skills={state.skills}
        visible={state.visible}
      />

      <Preview
        visible={state.visible}
        firstName={state.firstName}
        lastName={state.lastName}
        email={state.email}
        phone={state.phone}
        dob={state.dob}
        schoolName={state.schoolName}
        major={state.major}
        yearsOfStudy={state.yearsOfStudy}
        schoolCity={state.schoolCity}
        schoolDescription={state.schoolDescription}
        companyName={state.companyName}
        role={state.role}
        yearsOfWork={state.yearsOfWork}
        workCity={state.workCity}
        workDescription={state.workDescription}
        skills={state.skills}
      />
    </div>
  );
};

//            TODO
//        consider adding a button to add work experience, etc, by making a new component (practice creating and deleting Components)
//        ^^^^^ also add a delete button to remove
//         Add regex patterns for each input and form validation (required attribute)
//        Add additional styling such as :selected and :hover
//        Figure out error: "Form submission canceled because the form is not connected"
// DONE   Figure out why when I come out of preview mode, the forms show back up instead of the submitted content
// DONE    >> FIX BY: Conditionally render the styles of each component 'style={this.state.visible ? { display: "none" } : {}}'
// DONE               Possibly need to pass down a prop to each component and then conditionally render the style in that component
// DONE   Re-arrange order of attributes in each module to stay consistent
//        Add a Date method to change Date of birth to Date String
// DONE   Change to functional component and use hooks

export default App;
