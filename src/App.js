import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import TodoForm from "./components/Todos/TodoForm";
import TodoList from "./components/Todos/TodoList";
import TodoActions from "./components/Todos/TodoActions";
function App() {
  const [todos, setTodos] = useState([]);
  const handleCreateTodo = (todo) => {
    const newTodo = {
      ...todo,
      isCompleted: false,
      id: uuidv4(),
    };
    console.log(newTodo);
    setTodos([newTodo, ...todos]);
  };
  const deleteTodoHandler = (id) => {
    setTodos(
      todos.filter((todo) => {
        return todo.id !== id;
      })
    );
  };
  const toggleTodoHandler = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo }
      )
    );
  };
  const resetTodosHandler = () => {
    setTodos([]);
  };
  const deleteCompletedTodosHandler = () => {
    setTodos(todos.filter((todo) => !todo.isCompleted));
  };
  const completedTodosCount = todos.filter((todo) => todo.isCompleted).length;

  return (
    <div className="App">
      <h1 className="appTitle">Todos</h1>
      <TodoForm onCreate={handleCreateTodo} />
      {todos.length > 0 && (
        <TodoActions
          completedTodosExist={!!completedTodosCount}
          resetTodos={resetTodosHandler}
          deleteCompletedTodos={deleteCompletedTodosHandler}
        />
      )}

      <TodoList
        todos={todos}
        deleteTodo={deleteTodoHandler}
        toggleTodo={toggleTodoHandler}
      />
      {completedTodosCount > 0 && (
        <h2 className="message">
          {`You have ${completedTodosCount} completed ${
            completedTodosCount > 1 ? "todos" : "todo"
          }`}
        </h2>
      )}
    </div>
  );
}

export default App;
