import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './App.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import CocktailList from './components/CocktailList';
import CocktailDetails from './components/CocktailDetails';
import backgroundImage from './assets/background.jpg';

function App() {
  const [cocktails, setCocktails] = useState([]);
  const [selectedCocktail, setSelectedCocktail] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showLanding, setShowLanding] = useState(true);

  useEffect(() => {
    if (searchQuery) {
      fetch(`https://enigmatic-cove-72689.herokuapp.com/api/cocktails/search/${searchQuery}`)
        .then((response) => response.json())
        .then((data) => setCocktails(data));
    } else {
      setCocktails([]);
    }
  }, [searchQuery]);

  return (
    <div className="App">
      <Header />
      <Container fluid>
        {showLanding ? (
          <Row className="landing" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', height: '90vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Col style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', borderRadius: '0px', padding: '30px' }}>
              <h1 className="text-white" style={{ fontSize: '2.5rem' }}>Embark on a delightful journey to uncover your next cocktail</h1>
              <p className="text-white" style={{ fontSize: '1.3rem' }}>Search for cocktails by ingredient</p>
              <Button variant="dark" onClick={() => setShowLanding(false)}>
                Get started
              </Button>
            </Col>
          </Row>
        ) : (
          <>
            <SearchBar onSearch={(query) => setSearchQuery(query)} />
            <div className="content">
              {selectedCocktail ? (
                <CocktailDetails
                  cocktail={selectedCocktail}
                  onBackClick={() => setSelectedCocktail(null)}
                />
              ) : (
                <>
                  <CocktailList
                    cocktails={cocktails}
                    onSelectCocktail={(cocktail) => setSelectedCocktail(cocktail)}
                  />
                  {!searchQuery && <CocktailDetails />}
                </>
              )}
            </div>
          </>
        )}
      </Container>
    </div>
  );
}

export default App;
