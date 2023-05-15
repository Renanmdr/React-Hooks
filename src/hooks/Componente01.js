import Componente02 from "./Componente02";

export default function Componente01({ texto }) {
  return (
    <div
      style={{
        backgroundColor: "red",
        width: "500px",
        height: "500px",
        display: "inline-block",
      }}
    >
      <Componente02 texto={texto} />
    </div>
  );
}
