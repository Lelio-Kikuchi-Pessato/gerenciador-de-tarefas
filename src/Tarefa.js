import React, { useContext } from "react";
import { TarefasContext } from "./TarefasContext";

function Tarefa({ tarefa }) {
  // Obter o dispatch a partir do contexto
  const { dispatch } = useContext(TarefasContext);

  // Função para alternar o status de conclusão da tarefa
  const toggleConcluida = () => {
    dispatch({ type: "MARCAR_CONCLUIDA", payload: tarefa.id });
  };

  return (
    <li style={{ textDecoration: tarefa.concluida ? "line-through" : "none" }}>
      <input
        type="checkbox"
        checked={tarefa.concluida}
        onChange={toggleConcluida}
      />
      {tarefa.texto}
    </li>
  );
}

export default Tarefa;
