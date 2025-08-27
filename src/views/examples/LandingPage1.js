import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import DropdownScrollNavbar from "../../components/Navbars/DropdownScrollNavbar.js";
import LandingPage1Header from "../../components/Headers/LandingPage1Header.js";
import NCBNFooter from "../../components/Footers/NCBNFooter.js";

function LandingPage1() {
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  return (
    <>
      <DropdownScrollNavbar />
      <div className="wrapper">
        <LandingPage1Header />
        <div className="section section-about-us">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">Why Choose NCBN?</h2>
                <h5 className="description">
                  The National Cord Blood Network is dedicated to advancing cord blood banking and transplantation.
                  With our extensive network of accredited banks, cutting-edge facilities, and commitment to quality,
                  we ensure the highest standards in cord blood collection, processing, and storage.
                </h5>
              </Col>
            </Row>
            <Row className="mt-5">
              <Col md="6">
                <Card className="card-raised card-background" style={{ minHeight: "400px" }}>
                  <CardBody>
                    <h3 className="card-title">Excellence in Cord Blood Banking</h3>
                    <p className="card-description text-white">
                      Our network maintains the highest standards in cord blood banking,
                      utilizing state-of-the-art processing and storage facilities. We
                      follow rigorous quality control measures and adhere to international
                      accreditation standards.
                    </p>
                    <p className="card-description text-white">
                      With a commitment to research and advancement in stem cell therapy,
                      we collaborate with leading medical institutions to expand the
                      possibilities of cord blood transplantation and regenerative medicine.
                    </p>
                    <Button
                      className="btn-neutral btn-round"
                      color="default"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      Learn About Our Standards
                    </Button>
                  </CardBody>
                </Card>
              </Col>
              <Col md="6">
                <Card className="card-plain">
                  <CardBody>
                    <h3 className="card-title">What Medical Professionals Say</h3>
                    <p className="card-description" style={{ fontSize: "1.2em" }}>
                      "Cord blood banking offers a unique opportunity to preserve potentially life-saving stem cells that would otherwise be discarded. It's an investment in future medical possibilities."
                    </p>
                    <p className="category text-info">
                      - Medical Advisory Board, NCBN
                    </p>
                    <div className="stats">
                      <i className="now-ui-icons business_bulb-63 mr-1"></i>
                      20+ Years of Experience
                      <i className="now-ui-icons education_atom ml-3 mr-1"></i>
                      Advanced Research
                      <i className="now-ui-icons health_ambulance ml-3 mr-1"></i>
                      Global Network
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section section-team text-center">
          <Container>
            <h2 className="title">Our Core Services</h2>
            <Row>
              <Col lg="4" md="6">
                  <Card style={{ 
                    background: "#FF0000",  /* NCBN Red */
                    color: "white" 
                  }}>
                    <CardBody>
                      <h6 className="category-social text-white">
                        <i className="now-ui-icons health_ambulance"></i> Collection
                      </h6>
                      <h4 className="card-title text-white">Cord Blood Collection</h4>
                      <p className="card-description text-white">
                        Professional collection services with highly trained staff ensuring
                        safe and efficient cord blood collection at the time of birth.
                        We follow strict protocols to maximize stem cell viability.
                      </p>
                      <CardFooter>
                        <Button
                          className="btn-round"
                          color="white"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Learn More
                        </Button>
                      </CardFooter>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="4" md="6">
                  <Card style={{ 
                    background: "#1c75bc",  /* NCBN Blue */
                    color: "white" 
                  }}>
                    <CardBody>
                      <h6 className="category-social text-white">
                        <i className="now-ui-icons tech_mobile"></i> Processing
                      </h6>
                      <h4 className="card-title text-white">Processing & Storage</h4>
                      <p className="card-description text-white">
                        State-of-the-art processing facilities and long-term storage
                        in controlled environments. Our advanced techniques ensure
                        maximum stem cell preservation and viability.
                      </p>
                      <CardFooter>
                        <Button
                          className="btn-round"
                          color="white"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Learn More
                        </Button>
                      </CardFooter>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="4" md="6">
                  <Card style={{ 
                    background: "#a7a9ac",  /* NCBN Gray */
                    color: "white" 
                  }}>
                    <CardBody>
                      <h6 className="category-social text-white">
                        <i className="now-ui-icons business_chart-bar-32"></i> Support
                      </h6>
                      <h4 className="card-title text-white">Transplantation Support</h4>
                      <p className="card-description text-white">
                        Comprehensive support for medical professionals and families
                        throughout the transplantation process. We coordinate with
                        healthcare providers to ensure successful outcomes.
                      </p>
                      <CardFooter>
                        <Button
                          className="btn-round"
                          color="white"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Learn More
                        </Button>
                      </CardFooter>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
          </Container>
        </div>
        <NCBNFooter />
      </div>
    </>
  );
}

export default LandingPage1;
