import { Contexto } from "./Context";
import { useContext } from "react";
export default function useAppContext() {
  const context = useContext(Contexto);

  if (context === undefined) {
    throw new Error("Não esta dentro do contexto");
  }

  return context;
}
