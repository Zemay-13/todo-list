import styles from "./Todo.module.css";

import { RiTodoFill, RiDeleteBin2Line } from "react-icons/ri";
import { FaCheck } from "react-icons/fa";
function Todo({ todo, title, description, deleteTodo, toggleTodo }) {
  return (
    <div
      className={`${styles.todo} ${
        todo.isCompleted ? styles.completedTodo : ""
      }`}
    >
      <div className={styles.containerIconText}>
        <RiTodoFill className={styles.todoIcon} />
        <div>
          <div className={styles.todoText}>{title}</div>
          {/* <div> Description: {description}</div> */}
        </div>
      </div>
      <div className={styles.containerIconUI}>
        <RiDeleteBin2Line
          className={styles.deleteIcon}
          onClick={() => deleteTodo(todo.id)}
        />
        <FaCheck
          className={styles.checkIcon}
          onClick={() => toggleTodo(todo.id)}
        />
      </div>
    </div>
  );
}
export default Todo;
