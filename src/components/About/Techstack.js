import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiExpress,
  SiCss3,SiHtml5,
  SiBabel,
  SiPostgresql,
  SiNumpy,
  SiScikitlearn,
  SiPandas
 
} from "react-icons/si";


function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCss3 />
      </Col> 
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
       <Col xs={4} md={2} className="tech-icons">
        <SiExpress />
      </Col> 
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 />
      </Col> 
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql/>
        </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNumpy />
      </Col> 
      <Col xs={4} md={2} className="tech-icons">
        <SiPandas/>
      </Col> 
      <Col xs={4} md={2} className="tech-icons">
        <SiScikitlearn />
      </Col> 
       <Col xs={4} md={2} className="tech-icons">
        <SiBabel />
      </Col> 
    
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>
    </Row>
  );
}

export default Techstack;
