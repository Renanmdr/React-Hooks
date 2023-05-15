import Componente01 from "./Componente01";
export default function principal() {
  const texto = "React Hooks";
  return (
    <div>
      <Componente01 texto={texto} />
    </div>
  );
}
