import React from 'react';
import { Navbar, Container, Image } from 'react-bootstrap';
import cocktailIcon from './cocktail-icon.svg';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" sticky='top'>
      <Container>
        <Navbar.Brand style={{ fontFamily: 'Dancing Script', fontSize: '2em' }}>
          <Image
            src={cocktailIcon}
            alt="Cocktail Icon"
            width="40"
            height="40"
            className="d-inline-block align-top"
            style={{ filter: 'invert(1)' }}
          />
          Sip Finder
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
