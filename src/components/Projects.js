import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import elepe from "../assets/img/elepe.png";


export const Projects = () => {
  const projects = [
    {
      title: "eCommerce Template",
      description: "Responsive WebApp created with vanilla JavaScript, HTML/CSS",
      imgUrl: elepe,
      path: "/frechero-e-commerce-template.vercel.app/index.html"
    },
    {
      title: "Comming Soon",
      imgUrl: projImg1,
    },
    {
      title: "Comming Soon",
      imgUrl: projImg1,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container className="projects-data">
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>Here are some of my works!</p>
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
