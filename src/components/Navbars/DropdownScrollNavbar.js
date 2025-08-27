import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip,
} from "reactstrap";

function DropdownScrollNavbar() {
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [navbarColor, setNavbarColor] = React.useState(" navbar-transparent");
  const [buyButtonColor, setBuyButtonColor] = React.useState("neutral");
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 499 ||
        document.body.scrollTop > 499
      ) {
        setNavbarColor("");
        setBuyButtonColor("info");
      } else if (
        document.documentElement.scrollTop < 500 ||
        document.body.scrollTop < 500
      ) {
        setNavbarColor(" navbar-transparent");
        setBuyButtonColor("neutral");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar 
        className={"fixed-top" + navbarColor} 
        color="white" 
        expand="lg"
        style={{
          background: "rgba(255, 255, 255, 0.95)"
        }}
      >
        <Container>
          <UncontrolledDropdown className="button-dropdown">
            <DropdownToggle
              caret
              tag="a"
              data-toggle="dropdown"
              href="#pablo"
              id="navbarDropdown"
              onClick={(e) => e.preventDefault()}
            >
              <span className="button-bar"></span>
              <span className="button-bar"></span>
              <span className="button-bar"></span>
            </DropdownToggle>
            <DropdownMenu aria-labelledby="navbarDropdown">
              <DropdownItem header>Dropdown header</DropdownItem>
              <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                Action
              </DropdownItem>
              <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                Another action
              </DropdownItem>
              <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                Something else here
              </DropdownItem>
              <DropdownItem divider></DropdownItem>
              <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                Separated link
              </DropdownItem>
              <DropdownItem divider></DropdownItem>
              <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                One more separated link
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <div className="navbar-translate">
            <NavbarBrand to="/" tag={Link} id="navbar-brand">
              <img
                alt="National Cord Blood Network"
                src={require("assets/img/NCBN.png")}
                style={{ 
                  height: "75px",
                  filter: "brightness(1)",
                  marginTop: "-15px",
                  marginBottom: "-15px"
                }}
              />
            </NavbarBrand>
            <UncontrolledTooltip target="navbar-brand">
              National Cord Blood Network
            </UncontrolledTooltip>
            <button
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              className="navbar-toggler"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse isOpen={collapseOpen} navbar>
            <Nav className="ml-auto" id="ceva" navbar>
              <NavItem>
                <NavLink
                  to="/about-us"
                  tag={Link}
                  className="nav-link"
                >
                  <p>About Us</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to="/our-network"
                  tag={Link}
                  className="nav-link"
                >
                  <p>Our Network</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to="/cord-blood-transplantation"
                  tag={Link}
                  className="nav-link"
                >
                  <p>Cord Blood Transplantation</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to="/contact"
                  tag={Link}
                  className="nav-link"
                  style={{ 
                    background: "#FF0000",  /* NCBN Red */
                    borderRadius: "30px",
                    padding: "10px 20px",
                    color: "#fff",
                    border: "none",
                    transition: "all 0.3s ease",
                    boxShadow: "0 2px 5px rgba(0,0,0,0.2)"
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = "translateY(-1px)";
                    e.currentTarget.style.boxShadow = "0 4px 8px rgba(0,0,0,0.3)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 2px 5px rgba(0,0,0,0.2)";
                  }}
                >
                  <p>Contact</p>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default DropdownScrollNavbar;
