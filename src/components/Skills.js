/* eslint-disable jsx-a11y/img-redundant-alt */
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
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
              <h2>Habilidades</h2>
              <p>
                Experiencia en el desarrollo de
                aplicaciones utilizando diferentes lenguajes de programación y
                tecnologías relevantes, como Java, Python, JavaScript, HTML, CSS y MYSQL,
                entre otros.<br></br>
                Capacidad para diseñar y desarrollar
                arquitecturas de sistemas de información escalables y
                eficientes, utilizando buenas prácticas de diseño y patrones
                arquitectónicos e ingeniería de software.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Desarrollo web</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>React.JS</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>CSS</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
