import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" sticky='top'>
      <Container>
        <Navbar.Brand>Sip Happens</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;