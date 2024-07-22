import React from "react";

export const About = () => {
  return (
    <div className="container">
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              About Text Utils
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>
                Text Utils is a simple, yet powerful application designed to
                manipulate and analyze text efficiently.
              </strong>{" "}
              <p>
                Our application provides a suite of tools for various text
                operations, including:
              </p>
              <ul>
                <li>Counting characters and words</li>
                <li>
                  Transforming text cases (e.g., uppercase, lowercase, title
                  case)
                </li>
                <li>Removing extra spaces</li>
                <li>Copying text to clipboard</li>
                <li>Reversing text</li>
                <li>Counting vowels and consonant</li>
              </ul>
              <p>
                This app is designed to streamline text processing tasks for
                users in various fields, from students to professionals.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Technologies Used
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>
                The application is built using modern web development
                technologies.
              </strong>{" "}
              We used:
              <ul>
                <li>
                  <strong>React:</strong> For building the user interface with
                  reusable components.
                </li>
                <li>
                  <strong>Bootstrap:</strong> For styling and layout, ensuring a
                  responsive and visually appealing design.
                </li>
                <li>
                  <strong>JavaScript:</strong> For implementing the logic and
                  interactivity of the application.
                </li>
                <li>
                  <strong>HTML & CSS:</strong> For the structural and styling
                  aspects of the application.
                </li>
              </ul>
              These technologies ensure that the app is fast, efficient, and
              easy to maintain.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Practical Purposes
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>
                Text Utils serves a variety of practical purposes, making it an
                essential tool for:
              </strong>
              <ul>
                <li>
                  <strong>Content Writers:</strong> Quickly count words and
                  characters to meet specific requirements.
                </li>
                <li>
                  <strong>Students:</strong> Simplify the process of formatting
                  essays and assignments.
                </li>
                <li>
                  <strong>Developers:</strong> Clean and format code snippets or
                  documentation text.
                </li>
                <li>
                  <strong>General Users:</strong> Perform quick text
                  transformations for emails, reports, or any other text-based
                  work.
                </li>
              </ul>
              The app's ease of use and versatility make it suitable for anyone
              who works with text regularly.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
