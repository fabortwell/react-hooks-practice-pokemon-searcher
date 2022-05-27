iimport React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ addPokemon }) {
  const [formData, setFormData] = useState({})

  function handleDataInput(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  function addNewPokemon() {
    fetch(`http://localhost:3001/pokemon`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: formData.name,
        hp: Number(formData.hp),
        sprites: {
          front: formData.frontUrl,
          back: formData.backUrl
        }
      })
    })
    .then((res) => res.json())
    .then((newData) => addPokemon(newData))
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={addNewPokemon}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={handleDataInput}/>
          <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={handleDataInput}/>
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            onChange={handleDataInput}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            onChange={handleDataInput}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;