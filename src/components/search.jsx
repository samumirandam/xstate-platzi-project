import React, { useState } from "react";
import "./search.css";

export const Search = ({ send, state }) => {
  const { countries } = state.context;

  const [flight, setFlight] = useState("");

  const goToPassengers = () => {
    send("CONTINUE", { selectedCountry: flight });
  };

  const handleSelectChange = (event) => {
    setFlight(event.target.value);
  };

  return (
    <div className="Search">
      <p className="Search__title title">Busca tu destino</p>
      <select
        id="country"
        className="Search__select"
        value={flight}
        onChange={handleSelectChange}
      >
        <option value="" disabled defaultValue>
          Escoge un país
        </option>
        {countries.map((country) => (
          <option value={country.name.common} key={country.name.common}>
            {country.name.common}
          </option>
        ))}
      </select>
      <button
        onClick={goToPassengers}
        disabled={flight === ""}
        className="Search__continue button"
      >
        Continuar
      </button>
    </div>
  );
};
