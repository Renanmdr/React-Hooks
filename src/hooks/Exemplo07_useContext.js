import Componente01 from "./Componente01";
export default function Principal() {
  return (
    <div>
      <Componente01 />
    </div>
  );
}

// function Componente01() {
//   return (
//     <div
//       style={{
//         backgroundColor: "red",
//         width: "500px",
//         height: "500px",
//         display: "inline-block",
//       }}
//     >
//       <Componente02 />
//     </div>
//   );
// }

// function Componente02() {
//   return (
//     <div
//       style={{
//         backgroundColor: "green",
//         width: "400px",
//         height: "400px",
//         margin: "48px",
//         display: "inline-block",
//       }}
//     >
//       <Componente03 />
//     </div>
//   );
// }

// function Componente03() {
//   const { texto, cor, eventButton } = useContext(Contexto);
//   return (
//     <div
//       style={{
//         backgroundColor: cor,
//         width: "300px",
//         height: "300px",
//         margin: "48px",
//       }}
//     >
//       <p>{texto}</p>
//       <button onClick={eventButton}>Clique aqui</button>
//     </div>
//   );
// }
