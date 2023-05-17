import { useMemo, useState } from "react";

export default function Exemplo10_useMemo() {
  const [count, setCount] = useState(0);
  const [lista, setLista] = useState(["Renan", "Lucas", "Marcos"]);

  const listaSemRender = useMemo(() => {
    return <Listas nomes={lista} />;
  }, [lista]);
  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
      <button onClick={() => setLista([...lista, "paulo"])}>Listas</button>
      {listaSemRender}
    </>
  );
}

function Listas({ nomes }) {
  console.log("Listas Exibidas");
  return (
    <>
      <ul>
        {nomes.map((nome, i) => (
          <li key={i}>{nome}</li>
        ))}
      </ul>
    </>
  );
}
