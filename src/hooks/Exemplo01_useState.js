import React, { useState } from "react";

export default function Exemplo01_useState() {
  const [texto, setTexto] = useState("Hello world");

  const evento = (e) => {
    setTexto(e.target.value);
  };

  return (
    <div>
      <input type="text" onChange={evento} />
      <h1>{texto}</h1>
    </div>
  );
}
