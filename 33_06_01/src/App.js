import { AddTodoForm } from "./components/todoForm";
import { TodoList } from "./components/TodoList";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"


function App() {
  return (
    <div className="App">
      <AddTodoForm />
      <TodoList />
    </div>
  );
}

export default App;
