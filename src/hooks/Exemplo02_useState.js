import React, { useState } from "react";

export default function Exemplo02_useState() {
  const [name, setName] = useState();
  const [idade, setIdade] = useState();

  return (
    <div>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <input type="number" onChange={(e) => setIdade(e.target.value)} />
      <p>Nome:{name}</p>
      <p>Idade:{idade}</p>
    </div>
  );
}
