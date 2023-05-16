import { createContext, useState } from "react";

export const Contexto = createContext({});

export function AppContext({ children }) {
  const [cor, setcor] = useState("yellow");

  const texto = "React Hooks is very good";

  function eventButton() {
    setcor(cor === "yellow" ? "blue" : "yellow");
  }

  return (
    <Contexto.Provider value={{ texto, cor, eventButton }}>
      {children}
    </Contexto.Provider>
  );
}
