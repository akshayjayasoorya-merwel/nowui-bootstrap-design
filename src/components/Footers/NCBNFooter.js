import React from "react";
import { Link } from "react-router-dom";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

function NCBNFooter() {
  return (
    <>
      <footer className="footer" data-background-color="black">
        <Container>
          <div className="content">
            <Row>
              <Col md="3">
                <h5>About NCBN</h5>
                <p className="text-muted">
                  The National Cord Blood Network is dedicated to advancing cord blood
                  banking and transplantation through research, education, and the highest
                  standards of quality.
                </p>
              </Col>
              <Col md="2">
                <h5>Quick Links</h5>
                <ul className="links-vertical">
                  <li>
                    <Link className="text-muted" to="/about-us">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link className="text-muted" to="/our-network">
                      Our Network
                    </Link>
                  </li>
                  <li>
                    <Link className="text-muted" to="/cord-blood-transplantation">
                      Transplantation
                    </Link>
                  </li>
                  <li>
                    <Link className="text-muted" to="/contact">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </Col>
              <Col md="2">
                <h5>Resources</h5>
                <ul className="links-vertical">
                  <li>
                    <a className="text-muted" href="#pablo" onClick={(e) => e.preventDefault()}>
                      Research Publications
                    </a>
                  </li>
                  <li>
                    <a className="text-muted" href="#pablo" onClick={(e) => e.preventDefault()}>
                      Educational Materials
                    </a>
                  </li>
                  <li>
                    <a className="text-muted" href="#pablo" onClick={(e) => e.preventDefault()}>
                      FAQs
                    </a>
                  </li>
                  <li>
                    <a className="text-muted" href="#pablo" onClick={(e) => e.preventDefault()}>
                      News & Updates
                    </a>
                  </li>
                </ul>
              </Col>
              <Col md="2">
                <h5>For Professionals</h5>
                <ul className="links-vertical">
                  <li>
                    <a className="text-muted" href="#pablo" onClick={(e) => e.preventDefault()}>
                      Healthcare Providers
                    </a>
                  </li>
                  <li>
                    <a className="text-muted" href="#pablo" onClick={(e) => e.preventDefault()}>
                      Research Collaboration
                    </a>
                  </li>
                  <li>
                    <a className="text-muted" href="#pablo" onClick={(e) => e.preventDefault()}>
                      Quality Standards
                    </a>
                  </li>
                  <li>
                    <a className="text-muted" href="#pablo" onClick={(e) => e.preventDefault()}>
                      Training Programs
                    </a>
                  </li>
                </ul>
              </Col>
              <Col md="3">
                <h5>Stay Connected</h5>
                <div className="social-buttons">
                  <Button
                    className="btn-icon btn-round mr-1"
                    color="facebook"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fab fa-facebook-square"></i>
                  </Button>
                  <Button
                    className="btn-icon btn-round mr-1"
                    color="twitter"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fab fa-twitter"></i>
                  </Button>
                  <Button
                    className="btn-icon btn-round mr-1"
                    color="linkedin"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fab fa-linkedin"></i>
                  </Button>
                </div>
                <p className="mt-3">
                  <small className="text-muted">
                    Subscribe to our newsletter for updates on cord blood banking and research.
                  </small>
                </p>
              </Col>
            </Row>
          </div>
          <hr />
          <div className="copyright text-center">
            © {new Date().getFullYear()} National Cord Blood Network. All rights reserved.
          </div>
        </Container>
      </footer>
    </>
  );
}

export default NCBNFooter;
