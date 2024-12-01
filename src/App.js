import React from "react";
import { TarefasProvider } from "./TarefasContext";
import ListaDeTarefas from "./ListaDeTarefas";

function App() {
  return (
    <TarefasProvider>
      <div>
        <h1>Gerenciador de Tarefas</h1>
        <ListaDeTarefas />
      </div>
    </TarefasProvider>
  );
}

export default App;
