import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";
import css3 from "../assets/img/carousel/css3.svg";
import html5 from "../assets/img/carousel/html5.svg";
import js from "../assets/img/carousel/js.svg";
import mongodb from "../assets/img/carousel/mongodb.svg";
import nodejs from "../assets/img/carousel/nodejs.svg";
import react from "../assets/img/carousel/react.svg";
import bootstrap from "../assets/img/carousel/bootstrap.svg";
import github from "../assets/img/carousel/github.svg";
import illustrator from "../assets/img/carousel/adobe-illustrator.svg";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                Here's a little of what i learned in the past few years :)
                <br />
                As i said, i love learning new things! I hope to keep adding
                more technologies in this section.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={js} alt="Javascript" className="skill-logo" draggable="false"/>
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={react} alt="React" className="skill-logo" draggable="false"/>
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img src={nodejs} alt="NodeJS" className="skill-logo" draggable="false"/>
                  <h5>Node.js</h5>
                </div>
                <div className="item">
                  <img src={mongodb} alt="MongoDB" className="skill-logo" draggable="false"/>
                  <h5>MongoDB</h5>
                </div>
                <div className="item">
                  <img src={css3} alt="CSS" className="skill-logo" draggable="false"/>
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <img src={html5} alt="HTML" className="skill-logo" draggable="false"/>
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <img src={bootstrap} alt="Bootstrap" className="skill-logo" draggable="false"/>
                  <h5>Bootstrap</h5>
                </div>
                <div className="item">
                  <img src={github} alt="Github" className="skill-logo" draggable="false"/>
                  <h5>Github</h5>
                </div>
                <div className="item">
                  <img src={illustrator} alt="Adobe Illustrator" className="skill-logo" draggable="false"/>
                  <h5>Adobe Illustrator</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="A smokey background" />
    </section>
  );
};
