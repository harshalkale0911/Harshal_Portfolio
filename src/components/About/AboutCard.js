import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
              I'm <span className="purple">Harshal Kale </span>
             here from <span className="purple"> Maharashatra, India.</span>
            <br />
            <br/>
            Recently completed a Full Stack Developer Course from Masai School, and holds a Bachelor of Science in Computer Science from Rashtrasant Tukadoji Maharaj Nagpur University.
            <br />
 
            <br />
            In addition to coding, enjoys playing games and traveling.
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
             
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Harshal</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
