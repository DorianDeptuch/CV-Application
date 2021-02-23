import React from "react";

function Preview(props) {
  console.log(props);
  return (
    <div
      style={props.visible ? { display: "none" } : { display: "block" }}
      className="previewDiv"
    >
      <div>
        <h2>
          <u>Info</u>
        </h2>
        <p>
          <b>First Name: </b>
          {props.firstName}
        </p>
        <p>
          <b>Last Name: </b>
          {props.lastName}
        </p>
        <p>
          <b>Email: </b>
          {props.email}
        </p>
        <p>
          <b>Phone: </b>
          {props.phone}
        </p>
        <p>
          <b>Date of birth: </b>
          {props.dob}
        </p>
      </div>
      <div>
        <h2>
          <u>Education</u>
        </h2>
        <p>
          <b>School Name: </b>
          {props.schoolName}
        </p>
        <p>
          <b>Major: </b>
          {props.major}
        </p>
        <p>
          <b>Years of study: </b>
          {props.yearsOfStudy}
        </p>
        <p>
          <b>City: </b>
          {props.schoolCity}
        </p>
        <p>
          <b>Description: </b>
          {props.schoolDescription}
        </p>
      </div>
      <div>
        <h2>
          <u>Work</u>
        </h2>
        <p>
          <b>Company name: </b>
          {props.companyName}
        </p>
        <p>
          <b>Role: </b>
          {props.role}
        </p>
        <p>
          <b>Years of work: </b>
          {props.yearsOfWork}
        </p>
        <p>
          <b>City: </b>
          {props.workCity}
        </p>
        <p>
          <b>Description: </b>
          {props.workDescription}
        </p>
      </div>
      <div>
        <h2>
          <u>Skills</u>
        </h2>
        <p>
          <b>Skills: </b>
          {props.skills}
        </p>
      </div>
    </div>
  );
}

export default Preview;
