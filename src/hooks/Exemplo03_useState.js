import React, { useState } from "react";

export default function Exemplo03_useState() {
  const [nota1, setNota1] = useState();
  const [nota2, setNota2] = useState();

  const media = (nota1 + nota2) / 2;

  const situacao = media >= 7 ? "Aprovado" : "Reprovado";
  return (
    <div>
      <input type="number" onChange={(e) => setNota1(Number(e.target.value))} />
      <input type="number" onChange={(e) => setNota2(Number(e.target.value))} />
      {nota1 && nota2 ? (
        <h1>
          {situacao} com média {media}
        </h1>
      ) : (
        ""
      )}
    </div>
  );
}
