import React, { useState } from 'react';
import { Form, FormControl, Button, Container, Row, Col } from 'react-bootstrap';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit} className="my-3">
        <Row>
          <Col sm={9}>
            <Form.Group controlId="searchTerm">
              <FormControl
                type="text"
                placeholder="Search using an ingredient"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col sm={3}>
            <Button variant="dark" type="submit" className="w-100">
              Search
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default SearchBar;
