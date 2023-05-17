import { useReducer } from "react";

export default function Exemplo09_UseReducer() {
  function funcao(state, action) {
    console.log("state", state);
    console.log("action", action);
    switch (action.type) {
      case "incrementar":
        return state + 1;

      case "decrementar":
        return state - 1;
      default:
        return 0;
    }
  }

  const [state, dispatch] = useReducer(funcao, 0);
  console.log("state2", state);
  console.log("dispatch", dispatch);

  return (
    <>
      <h1>{state}</h1>
      <button onClick={() => dispatch({ type: "incrementar" })}>
        Incrementar
      </button>
      <button onClick={() => dispatch({ type: "decrementar" })}>
        Decrementar
      </button>
    </>
  );
}
