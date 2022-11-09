import React from "react";
import { Navbar, Nav, Container, Form, FormControl } from "react-bootstrap";
import { NavWrapper } from "./style";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

export default function Navbars() {
  return (
    <NavWrapper>
      <Container>
        <Navbar expand="lg">
          <Link to="/">
            <img src="https://stat.dinamalar.com/new/mobile/dmrenglishlogonewdark.png" />
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
              <Link to="/" className="nav-link">
              செய்திகள்
              </Link>
              <Link to="/movies" className="nav-link">
              தினம் தினம்
              </Link>
            </Nav>
            <Form inline>
              <FaSearch />
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
            </Form>
            
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </NavWrapper>
  );
}
