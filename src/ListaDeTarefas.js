import React, { useContext, useState } from "react";
import { TarefasContext } from "./TarefasContext";
import Tarefa from "./Tarefa"; // Importar o componente Tarefa que vamos criar em breve

function ListaDeTarefas() {
  // Use o contexto para acessar o estado global e o dispatch
  const { state, dispatch } = useContext(TarefasContext);
  const [novaTarefa, setNovaTarefa] = useState(""); // Estado local para a nova tarefa

  // Função para adicionar uma nova tarefa
  const adicionarTarefa = () => {
    if (novaTarefa.trim()) {
      dispatch({
        type: "ADICIONAR_TAREFA",
        payload: { id: Date.now(), texto: novaTarefa, concluida: false },
      });
      setNovaTarefa(""); // Limpar o campo de entrada após adicionar
    }
  };

  // Filtrar tarefas com base no filtro selecionado
  const tarefasFiltradas = state.tarefas.filter((tarefa) => {
    if (state.filtro === "Concluídas") return tarefa.concluida;
    if (state.filtro === "Pendentes") return !tarefa.concluida;
    return true;
  });

  return (
    <div>
      <input
        type="text"
        value={novaTarefa}
        onChange={(e) => setNovaTarefa(e.target.value)}
        placeholder="Digite uma nova tarefa"
      />
      <button onClick={adicionarTarefa}>Adicionar Tarefa</button>
      <div>
        <button
          onClick={() => dispatch({ type: "ALTERAR_FILTRO", payload: "Todas" })}
        >
          Todas
        </button>
        <button
          onClick={() =>
            dispatch({ type: "ALTERAR_FILTRO", payload: "Concluídas" })
          }
        >
          Concluídas
        </button>
        <button
          onClick={() =>
            dispatch({ type: "ALTERAR_FILTRO", payload: "Pendentes" })
          }
        >
          Pendentes
        </button>
      </div>
      <ul>
        {tarefasFiltradas.map((tarefa) => (
          <Tarefa key={tarefa.id} tarefa={tarefa} />
        ))}
      </ul>
    </div>
  );
}

export default ListaDeTarefas;
