import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import jsData from "../assets/img/js-algorithms-and-data-structures.png";
import responsiveDesign from "../assets/img/Responsive-web-design.png"


export const Certifications = () => {
  const projects = [
    {
      title: "FreeCodeCamp JS Algorithms and Data Structures",
      description: "Certification representing approx. 300 hours of coursework",
      imgUrl: jsData,
      path: "/www.freecodecamp.org/certification/Hashhh/javascript-algorithms-and-data-structures"
    },
    {
      title: "FreeCodeCamp Responsive Web Design",
      description: "Certification representing approx. 300 hours of coursework",
      imgUrl: responsiveDesign,
      path: "https://www.freecodecamp.org/certification/Hashhh/responsive-web-design"
    }
  ];

  return (
    <section className="project" id="projects">
      <Container className="projects-data">
        <Row>
          <Col>
            <h2>Certifications</h2>
            <p>Recognitions of knowledge acquired along the way :)</p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab" draggable="false">
                <Nav.Item>
                  <Nav.Link eventKey="first" draggable="false">Tab 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second" draggable="false" disabled>Tab 2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third" draggable="false" disabled>Tab 3</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">Lorem Ipsum</Tab.Pane>
                <Tab.Pane eventKey="third">Lorem Ipsum</Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} />
    </section>
  );
};
