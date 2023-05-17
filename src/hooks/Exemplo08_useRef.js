import React, { useRef } from "react";

export default function Exemplo08_useRef() {
  const element = useRef();

  function evento() {
    element.current.focus();
    element.current.style.backgroundColor = "gray";
    element.current.value = "Digite aqui";
  }
  return (
    <div>
      <input type="text" ref={element} />
      <input type="button" value={"Button"} onClick={evento} />
    </div>
  );
}
