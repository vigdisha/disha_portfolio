// contains the text info in the about pallete
import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Disha vig </span>
            from <span className="purple"> Chandigarh, India.</span>
            <br /> I am a final year student pursuing  Bachelors of Technology in computer Science.
          
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Tech Blogs
            </li>
          </ul>          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
