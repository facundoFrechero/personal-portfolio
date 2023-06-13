import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, path }) => {
  return (
    <Col sm={6} md={4} className="proj-card">
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div className="proj-demo">
            <a href={`https:/${path}`}>Link</a>
          </div>
        </div>
      </div>
    </Col>
  );
};
