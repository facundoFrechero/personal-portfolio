import { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/logo.svg";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(1);
  const toRotate = [
    "▌",
    " ",
    "▌",
    " ",
    "Full-Stack Developer",
    "▌",
    " ",
    "▌",
    " ",
    "Web Designer",
    "▌",
    " ",
    "▌",
    " ",
    "UX/UI Designer",
  ];
  const period = 800;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 1.7);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(300 - Math.random() * 100);
    }
  };

  return (
    <Router>
      <section className="banner" id="home">
        <Container className="banner-content">
          <Row className="align-items-center">
            <Col xs={12} md={6} xl={7}>
              <span className="tagline">Greetings! I'm Facundo Frechero</span>
              <Container className="typing-animation-container">
                <h1>
                  <span className="wrap">{text}</span>
                </h1>
              </Container>
              <p>
                Welcome to my portfolio!
                <br />
                Born in 1997 in Mar del Plata, Buenos Aires, Argentina.
                <br />
                You can find me coding, eating pizza, creating music, skating,
                playing videogames or reading.
                <br />I love what i do, and that's what makes me good in it.
                <br />
                Always chasing knowledge and learning new things!
              </p>
              <HashLink to="#connect" style={{ textDecoration: 'none' }}>
                <button>
                  Contact Me <ArrowRightCircle size={25} />
                </button>
              </HashLink>
            </Col>
            <Col xs={12} md={6} xl={5}>
              <Container className="banner-img-updown">
                <img src={headerImg} alt="header img" draggable="false" />
              </Container>
            </Col>
          </Row>
        </Container>
      </section>  
    </Router>
  );
};

export default Banner;
