/* Pokemones.jsx */
import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';

const getPokemonList = async () => {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1000');
    const data = await response.json();
    return data.results.map((pokemon) => pokemon.name);
  } catch (error) {
    console.error('Error fetching Pokémon list:', error);
    throw error;
  }
};

const getPokemonData = async (pokemonName) => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);
    const data = await response.json();
    return {
      name: data.name,
      image: data.sprites.front_default,
      stats: data.stats.map((stat) => ({
        name: stat.stat.name,
        base: stat.base_stat,
      })),
    };
  } catch (error) {
    console.error('Error fetching Pokémon data:', error);
    throw error;
  }
};

const Pokemones = ({ selectedPokemon }) => {
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (selectedPokemon) {
        try {
          const data = await getPokemonData(selectedPokemon);
          setPokemonData(data);
        } catch (error) {
          // Manejar errores
          setPokemonData(null);
        }
      }
    };

    fetchData();
  }, [selectedPokemon]);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      {pokemonData && (
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={pokemonData.image} alt={`${pokemonData.name} sprite`} />
          <Card.Body style={{ textAlign: 'center' }}>
            <Card.Title>{pokemonData.name}</Card.Title>
            <Card.Text>
              <p>Estadísticas:</p>
              <ul>
                {pokemonData.stats.map((stat, index) => (
                  <li key={index}>
                    <strong>{stat.name}:</strong> {stat.base}
                  </li>
                ))}
              </ul>
            </Card.Text>
          </Card.Body>
        </Card>
      )}
    </div>
  );
};

export { Pokemones, getPokemonData };
