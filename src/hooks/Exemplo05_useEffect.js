import { useEffect, useState } from "react";

export default function Exemplo05_useEffect() {
  const [texto, setTexto] = useState("Hello world :");

  useEffect(() => {
    setInterval(() => {
      setTexto("We are the champions ");
    }, 3000);
  });

  return (
    <>
      <h1>{texto}</h1>
    </>
  );
}
