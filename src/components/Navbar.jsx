import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar bg="secondary" variant="dark">
      <Container className="justify-content-between">
        <Navbar.Brand>
        <img
          width="50"
          src="/poke-icon.svg"
          alt=""
        />
        </Navbar.Brand>
        <div>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-white ms-3 text-decoration-none${isActive ? " active" : ""}`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/pokemones"
            className={({ isActive }) =>
              `text-white ms-3 text-decoration-none${isActive ? " active" : ""}`
            }
          >
            Pokemones
          </NavLink>
        </div>
      </Container>
    </Navbar>
  );
};

export default Navigation;
