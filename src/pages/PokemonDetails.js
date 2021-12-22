import React, { useEffect, useState } from "react";
import axios from "axios";
import { POKEMON_API_URL } from "../config";
import { useParams } from "react-router-dom";

export default function PokemonDetails() {
  const params = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const id = params.id;
    axios.get(POKEMON_API_URL + "/" + id).then((response) => {
      if (response.status >= 200 && response.status < 300) {
        setPokemon(response.data);
      }
    });
  });
  return (
    <div>
      <h1 style={{ marginTop: "200px" }}>PokeDetails</h1>
    </div>
  );
}
