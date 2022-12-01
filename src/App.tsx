import { observer } from "mobx-react-lite";
import "./App.css";
import store from "./store";

const App = observer(() => {
  return (
    <div className="App">
      <h1>Learn</h1>
      <div className="todos">
        {store.todos.map((todo) => (
          <p
            key={todo.id}
            style={{ textDecoration: todo.complete ? "line-through" : "none" }}
            onClick={() => store.changeState(todo.id)}
          >
            {todo.task}
          </p>
        ))}
      </div>
      <p>
        {store.notCompletelyToDoCount} / {store.countAllToDo} left
      </p>
    </div>
  );
});

export default App;
