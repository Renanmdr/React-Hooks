import React, { useState } from "react";

export default function Exemplo04_useState() {
  const modelo = {
    name: "",
    email: "",
    cidade: "",
  };

  const [formulario, setFormulario] = useState(modelo);

  function evento(e) {
    const name = e.target.name;
    const valor = e.target.value;

    setFormulario({
      ...formulario,
      [name]: valor,
    });
  }

  return (
    <>
      <input type="text" name="name" onChange={evento} />
      <input type="text" name="email" onChange={evento} />
      <input type="text" name="cidade" onChange={evento} />

      <p>{formulario.name}</p>
      <p>{formulario.email}</p>
      <p>{formulario.cidade}</p>
    </>
  );
}
