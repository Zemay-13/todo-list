import styles from "./TodoList.module.css";
import Todo from "./Todo";

function TodoList({ todos, deleteTodo, toggleTodo }) {
  return (
    <div className={styles.todoList}>
      {!!todos.length ? (
        todos.map((todo) => (
          <Todo
            title={todo.name}
            key={todo.id}
            // description={todo.todo.description}
            deleteTodo={deleteTodo}
            todo={todo}
            toggleTodo={toggleTodo}
          />
        ))
      ) : (
        <h2 className={styles.message}>Todos is empty</h2>
      )}
    </div>
  );
}
export default TodoList;
