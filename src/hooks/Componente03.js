import useAppContext from "./useAppContext";
export default function Componente03() {
  const { texto, cor, eventButton } = useAppContext();
  return (
    <div
      style={{
        backgroundColor: cor,
        width: "300px",
        height: "300px",
        margin: "48px",
      }}
    >
      <p>{texto}</p>
      <button onClick={eventButton}>Clique aqui</button>
    </div>
  );
}
