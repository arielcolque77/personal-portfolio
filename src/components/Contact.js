import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import { useState } from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Enviar");

  const onFormUpdate = (category, value) => {
    setError(false)
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const form = useRef();

  const [error, setError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    const email = e.target.user_email.value;
    const password = e.target.message.value;

    const regexEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

    console.log(regexEmail.test(email));



    if (email === "" || password === "") {
      console.log("Los campos no pueden estar vacios");
      setError(true)
      return;
    }
    if (email !== "" && !regexEmail.test(email)) {
      console.log("El correo es valido");
      return;
    }
    else {
      e.preventDefault();
    emailjs
      .sendForm(
        "service_ujk85zi",
        "template_v0zrmjk",
        form.current,
        "3Jm6OaRKojsDCifMf"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      setButtonText("Enviado");
    }
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
                  alt="Contact Us"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Contáctame</h2>
                  <form ref={form} onSubmit={sendEmail}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          name="user_name"
                          value={formDetails.firstName}
                          placeholder="Nombre"
                          onChange={(e) =>
                            onFormUpdate("firstName", e.target.value)
                          }
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="email"
                          name="user_email"
                          value={formDetails.email}
                          placeholder="Correo"
                          onChange={(e) =>
                            onFormUpdate("email", e.target.value)
                          }
                        />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea
                          name="message"
                          rows="6"
                          value={formDetails.message}
                          placeholder="Mensaje"
                          onChange={(e) =>
                            onFormUpdate("message", e.target.value)
                          }
                        ></textarea>
                        { error && <Alert variant="danger">Los campos no pueden estar vacios</Alert>}

                        <button type="submit">
                          <span>{buttonText}</span>
                        </button>
                      </Col>

                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
