import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokemons }) {
  const collectionCards = pokemons.map((pokemon) => <PokemonCard key={pokemon.id} pokemon={pokemon}/>)
  return (
    <Card.Group itemsPerRow={6}>
      {collectionCards}
    </Card.Group>
  );
}

export default PokemonCollection;
