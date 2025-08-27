import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

function LandingPage1Header() {
  let pageHeader = React.createRef();
  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });
  return (
    <>
      <div className="page-header">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("C:/Masters-Doc/ASU/Merwel-INC/UI-designs/now-ui-kit-pro-react-v1.5.2/bootstrap-now-ui/src/assets/img/human__embryo.png") + ")"
          }}
          ref={pageHeader}
        ></div>
        <div className="content-center">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h1 className="title">Advanced Blood Storage Solutions</h1>
                <h4 className="description text-white">
                  State-of-the-art blood storage and management systems.
                  Ensuring safety and efficiency in blood banking.
                </h4>
              </Col>
            </Row>
            <Row>
              <Col className="ml-auto mr-auto text-center mt-4" md="6">
                <Button
                  className="btn-round btn-lg mr-3"
                  color="info"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  Get Started
                </Button>
                <Button
                  className="btn-round btn-lg"
                  color="default"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  Learn More
                </Button>
              </Col>
            </Row>
            <Row>
              <Col className="ml-auto mr-auto text-center mt-5" md="12">
                <div className="buttons">
                  <Button
                    className="btn-icon btn-round mr-1"
                    color="info"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fab fa-facebook-square"></i>
                  </Button>
                  <Button
                    className="btn-icon btn-round mr-1"
                    color="info"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fab fa-twitter"></i>
                  </Button>
                  <Button
                    className="btn-icon btn-round"
                    color="info"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fab fa-instagram"></i>
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default LandingPage1Header;
