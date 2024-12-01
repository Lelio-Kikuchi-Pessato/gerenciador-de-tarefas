import React, { createContext, useReducer } from "react";

// Estado inicial
const initialState = {
  tarefas: [],
  filtro: "Todas",
};

// Função reducer para gerenciar ações
function tarefasReducer(state, action) {
  switch (action.type) {
    case "ADICIONAR_TAREFA":
      return {
        ...state,
        tarefas: [...state.tarefas, action.payload],
      };
    case "MARCAR_CONCLUIDA":
      return {
        ...state,
        tarefas: state.tarefas.map((tarefa) =>
          tarefa.id === action.payload
            ? { ...tarefa, concluida: !tarefa.concluida }
            : tarefa
        ),
      };
    case "ALTERAR_FILTRO":
      return {
        ...state,
        filtro: action.payload,
      };
    default:
      return state;
  }
}

// Criação do contexto
export const TarefasContext = createContext();

// Provedor de contexto
export const TarefasProvider = ({ children }) => {
  const [state, dispatch] = useReducer(tarefasReducer, initialState);

  return (
    <TarefasContext.Provider value={{ state, dispatch }}>
      {children}
    </TarefasContext.Provider>
  );
};
