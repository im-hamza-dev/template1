import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import "./header.scss";
import logo from "../../images/logo.png";

const Header = () => {
 
  return (
      <Navbar className="nav-bar" expand="sm" collapseOnSelect>
        <Container fluid>
          <Navbar.Brand as={Link} to="/">
            <img
              alt="Shape"
              src={logo}
              width="50px"
              className="image"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            className="justify-content-end"
            id="responsive-navbar-nav"
          >
            <Nav className="nav-buttons">
             
              {
                <Nav.Link className="nav-buttons-items" as={Link} to="/">
                  Home
                </Nav.Link>
              }
              
              <a
                className="cta-button"
                href={
                  "https://xd.adobe.com/view/5843ed80-eea1-47a3-8776-76cf6f03c5ad-0d10/"
                }
              >
                {"Schedule a Demo"}
              </a>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
