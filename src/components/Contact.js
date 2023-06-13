import { useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import contactImg from "../assets/img/contact-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Contact = () => {
  const [buttonText, setButtonText] = useState("Send");

  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    setButtonText("Sending...");

    emailjs
      .sendForm(
        "email_service",
        "template_ahwde3u",
        form.current,
        "xZl9d70wEtmkJVPf-"
      )
      .then(
        (result) => {
          console.log(result.text);
          setButtonText("Sended");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                  src={contactImg}
                  alt="Contact Me"
                  draggable="false"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <div>
              <h2>Come say hello!</h2>
              <form ref={form} onSubmit={handleSubmit}>
                <Row>
                  <Col size={12} sm={6} className="px-1">
                    <input
                      type="text"
                      placeholder="First Name"
                      name="firstName"
                      required
                    />
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input
                      type="text"
                      placeholder="Last Name"
                      name="lastName"
                      required
                    />
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input
                      type="email"
                      placeholder="Email Address"
                      name="email"
                      required
                    />
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input type="tel" placeholder="Phone Number" name="phone" />
                  </Col>
                  <Col size={12} className="px-1">
                    <textarea
                      rows="6"
                      placeholder="Message"
                      name="message"
                      required
                    ></textarea>
                    <button type="submit">
                      <span>{buttonText}</span>
                    </button>
                  </Col>
                </Row>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
