import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import "./App.css";

function App() {
  return (
    <div>
      <h1 className="title">Gerenciador de Tarefas</h1>
      <AddTask />
      <Tasks />
    </div>
  );
}


export default App;
