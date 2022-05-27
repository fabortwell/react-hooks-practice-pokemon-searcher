import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ pokemon }) {
  const [isFront, setIsClicked] = useState(true)
  function toggleImage() {
    setIsClicked(!isFront)
  }
  return (
    <Card>
      <div>
        <div className="image" onClick={toggleImage}>
          {isFront ? 
          <img src={pokemon.sprites.front} alt="oh no!" /> : 
          <img src={pokemon.sprites.back} alt="oh no!" />
        }
        </div>
        <div className="content">
          <div className="header">{pokemon.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {pokemon.hp} hp
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
