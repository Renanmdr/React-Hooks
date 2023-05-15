import { useEffect, useState } from "react";
import axios from "axios";

export default function Exemplo06_useState() {
  const [textos, setTextos] = useState([]);
  const [carregando, setCarregando] = useState("Carregando....");

  const evento = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/photos"
    );
    setTextos(response.data);
    setCarregando("Dados carregados com sucesso");
  };

  useEffect(() => {
    evento();
  });

  return (
    <div>
      <h1>{carregando}</h1>
      <ul>
        {textos.map((texto, index) => (
          <li key={index}>{texto.title}</li>
        ))}
      </ul>
    </div>
  );
}
