import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import { Pokemones, getPokemonData } from '../components/Pokemones';

const PokemonPage = () => {
  const { pokemonName } = useParams();
  const navigate = useNavigate();
  const pokemonList = ['Bulbasaur', 'Charmander', 'Squirtle', 'Pikachu', 'Eevee', 'ditto'];
  const [selectedPokemon, setSelectedPokemon] = useState(pokemonName || '');

  useEffect(() => {
    if (pokemonName && !pokemonList.includes(pokemonName)) {
      navigate('/404');
    }
  }, [pokemonName, navigate, pokemonList]);

  const handlePokemonChange = async (event) => {
    const newSelectedPokemon = event.target.value;
    setSelectedPokemon(newSelectedPokemon);
  
    if (newSelectedPokemon) {
      navigate(`/pokemones/${newSelectedPokemon}`);
      try {
        const data = await getPokemonData(newSelectedPokemon);
        console.log('Data del Pokémon:', data);
      } catch (error) {
        console.error('Error obteniendo datos del Pokémon:', error);
      }
    }
  };

  return (
    <Container className="mt-5 text-center">
      <Row>
        <Col>
          <h2>Selecciona un Pokémon:</h2>
          <select
            id="pokemonSelector"
            onChange={handlePokemonChange}
            value={selectedPokemon}
            className="form-select mt-2"
          >
            <option value="">-- Selecciona --</option>
            {pokemonList.map((pokemon) => (
              <option key={pokemon} value={pokemon}>
                {pokemon}
              </option>
            ))}
          </select>
        </Col>
      </Row>
      {selectedPokemon && (
        <Row className="mt-3">
          <Col>
            <Pokemones selectedPokemon={selectedPokemon} />
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default PokemonPage;
