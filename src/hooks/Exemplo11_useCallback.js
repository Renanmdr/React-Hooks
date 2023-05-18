import { useState, useEffect, useCallback } from "react";

export default function Exemplo11_useCallback() {
  const [cor, setCor] = useState("red");
  const [numero, setnumero] = useState(0);

  function changeCor() {
    setCor(cor === "red" ? "blue" : "red");
  }

  const listaNumeros = useCallback(() => {
    return [numero - 1, numero, numero + 1];
  }, [numero]);

  return (
    <>
      <div style={{ background: cor }}>
        <button onClick={changeCor}>Mudar Cor</button>
        <input
          type="number"
          value={numero}
          onChange={(e) => setnumero(Number(e.target.value))}
        ></input>
        <ListaNumeros lista={listaNumeros} />
      </div>
    </>
  );
}

function ListaNumeros({ lista }) {
  const [arr, setArr] = useState([]);

  useEffect(() => {
    setArr(lista);
    console.log("useEffect");
  }, [lista]);

  return (
    <>
      <ul>
        {arr.map((number) => (
          <li key={number}>{number}</li>
        ))}
      </ul>
    </>
  );
}
