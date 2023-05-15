import Componente03 from "./Componente03";
export default function Componente02({ texto }) {
  return (
    <div
      style={{
        backgroundColor: "green",
        width: "400px",
        height: "400px",
        margin: "48px",
        display: "inline-block",
      }}
    >
      <Componente03 texto={texto} />
    </div>
  );
}
