import React from "react";
import "../styles/Resume.css";

function Resume() {
  return (
    <>
      <div className="info">
        <p>506 260 5400</p>
        <p>nikkivigneault@gmail.com</p>
        <p>64 Loddington Street, New Maryland, New Brunswick, Canada E3C 2S4</p>
      </div>
      <div className="pagebreak"></div>
      <br></br>
      <div className="skills">
        <h3>Skills and Qualifications</h3>
        <br></br>
        <ul>
          <li>Experience with HTML, CSS, React, Javascript and MySql2</li>
          <li>Recent Full-Stack coding bootcamp graduate</li>
          <li>Quick and enthusiastic learner and problem solver</li>
          <li>Dependable, reliable employee</li>
          <li>Works well independantly and in team environments</li>
        </ul>
      </div>
      <br></br>
      <div className="pagebreak"></div>
      <br></br>
      <div className="work">
        <h3>Notable Work Experience</h3>
        <div className="experience">
          <p className="dates">
            September 2019-June 2023: Theatre New Brunswick - Production Manager
            & Technical Director
          </p>
          <p>
            Responsibilities: Creating production schedules for each season,
            organizing and ordering technical equipment, managing and going on
            provincial tours, communicating with incoming artists and booking
            travel and accommodations.
          </p>
          <br></br>
          <p className="dates">
            November 2018 - February 2019: Hart House Theatre - Assistant Stage
            Manager
          </p>
          <p>Director: Julie Tomaino</p>
          <p>Show: Hair</p>
          <p>
            Responsibilities: Organizing props and costumes and assisting actors
            before and during the show with quick changes, or if anything goes
            wrong.{" "}
          </p>

          <br></br>
          <p className="dates">
            January – April 2018: Theatre New Brunswick’s Young Company - Stage
            Manager
          </p>
          <p>Director: Lisa Ann Ross</p>
          <p>
            Shows: <i>A Herman Tale</i> & <i>Goodbye Marianne</i>
          </p>
          <p>
            Responsibilities: Making sure actors were ready to go on time and
            all props, set and costumes were presentable
          </p>

          <br></br>
          <p className="dates">June – September 2016 & May – December 2017: Calithumpians & Fredericton Outdoor Summer Theatre - Production Manager, Prop/Costume organizer, Performer
</p>
          <p>Responsibilities: Along with scheduling and performing on tour I worked organizing and cataloguing the company’s props and costumes as well as making new props and costume pieces as needed. </p>
        </div>
      </div>
      <br></br>
        <div className="pagebreak"></div>
        <br></br>
        <div className="education">
           <h3>Education</h3> 
           <p><b>2023 -</b> Graduated October 17th, 2023 from the University of New Brunswick with a certificate in full stack web development</p>
            <p><b>2017 -</b> Graduated from York University in June with a Bachelor of Fine Arts with Honours in Theatre Production</p>
        </div>

        <br></br>
        <div className="pagebreak"></div>
        <br></br>
        <br></br>
        <div className="button">
            <button className="download"><a href='https://drive.google.com/file/d/1QbLJoQIFm6LMgsACc7WrXdK95N60dR_I/view?usp=sharing' target="blank">Click to view downloadable Resume</a></button>
        </div>
    </>
  );
}

export default Resume;
