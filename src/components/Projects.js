import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png"
import projImg2 from "../assets/img/project-img2.png"
import projImg3 from "../assets/img/project-img3.png"


export const Projects = () => {
  const projects = [
    {
      title: "eCommerce Website",
      description: "Design and development",
      imgUrl: projImg1,
    },
    {
      title: "Real State Website",
      description: "Design and development",
      imgUrl: projImg2,
    },
    {
      title: "Twitter Clone",
      description: "Design and development",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container className="projects-data">
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>Lorem Ipsum blablablablablabla</p>
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
