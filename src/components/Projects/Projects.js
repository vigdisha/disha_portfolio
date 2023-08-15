import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import keeper from "../../Assets/images/keeper-nnotes.png";
import weather from "../../Assets/images/weather-report.png";
import Newsletter from "../../Assets/images/news.png"
import australia from "../../Assets/images/australia.png";
import house from "../../Assets/images/house.jpeg";



function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Newsletter}
              isBlog={false}
              title="Newsletter-Signup"
              description="Among Us themed newsltter you can sign up to.Made using nodejs and platform for the newsltter used is mailchimp."
              ghLink="https://github.com/vigdisha/NewsletterSignup"
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather-app"
              description="A website to check weather of any city you want.API for weather reference used is OpenWeatherMap:https://openweathermap.org"
              ghLink="https://github.com/vigdisha/weather-"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={keeper}
              isBlog={false}
              title="Keeper-App"
              description="A website made to keep track of things by taking notes usng this website made using Reactjs"
                          
            />
          </Col>

          { <Col md={4} className="project-card">
            <ProjectCard
              imgPath={house}
              isBlog={false}
              title="house_price_prediction"
              description="Used the house_price  dataset from Kaggle and trained a ridge linear regression model to predict the predict the house prices usin given factors."
              ghLink="https://github.com/vigdisha/House_price_prediction"
              
            />
          </Col> }

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={australia}
              isBlog={false}
              title="Australia_Rainfall_prediction"
              description="Using Regression models  for the prediction  of rainfall in Australia.This project is helpful in understanding the regression models and decesion tree and forests."
              ghLink="https://github.com/vigdisha/Australia_rainfall_prediction"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
