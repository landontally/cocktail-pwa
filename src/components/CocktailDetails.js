import React from 'react';
import { Container, Row, Col, Button, Card, ListGroup } from 'react-bootstrap';
import styles from './CocktailDetails.module.css';

const CocktailDetails = ({ cocktail, onBackClick }) => {
  if (!cocktail) {
    return (
      <Container className={styles.centeredText}>
        <p className='lead'>Please enter an ingredient above.</p>
      </Container>
    );
  }

  const ingredients = [];

  for (let i = 1; i <= 15; i++) {
    const ingredient = cocktail[`strIngredient${i}`];
    const measure = cocktail[`strMeasure${i}`];

    if (ingredient) {
      ingredients.push({
        name: ingredient,
        measure: measure || '',
      });
    }
  }

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <Card className="my-3">
            <Card.Img variant="top" src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
            <Card.Body>
              <Card.Title>{cocktail.strDrink}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Ingredients</Card.Subtitle>
              <ListGroup variant="flush">
                {ingredients.map((ingredient, index) => (
                  <ListGroup.Item key={index}>
                    {ingredient.measure} {ingredient.name}
                  </ListGroup.Item>
                ))}
              </ListGroup>
              <Card.Subtitle className="mt-3 mb-2 text-muted">Instructions</Card.Subtitle>
              <Card.Text>{cocktail.strInstructions}</Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button variant="dark" onClick={onBackClick}>
                Back to list
              </Button>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CocktailDetails;
