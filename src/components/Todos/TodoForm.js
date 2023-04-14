import styles from "./TodoForm.module.css";
import { useState } from "react";
import Button from "../UI/Button";
function TodoForm({ onCreate, title = "Submit" }) {
  const [data, setData] = useState({ name: "", description: "" });
  const handleFormSubmit = (event) => {
    event.preventDefault();
  };
  const changeValueInput = (event, name) => {
    setData({ ...data, [name]: event.target.value });
  };

  const handleCreate = () => {
    onCreate({
      name: data.name,
      description: data.description,
    });
    setData({ name: "", description: "" });
  };
  return (
    <div>
      <form onSubmit={handleFormSubmit} className={styles.form}>
        {/* <div className={styles.fields}> */}
        <input
          placeholder="Enter new todo"
          className={styles.input}
          type="text"
          value={data.name}
          onChange={(event) => changeValueInput(event, "name")}
        />

        {/* <textarea
            className={styles.description}
            type="text"
            placeholder="Description"
            value={data.description}
            onChange={(event) => changeValueInput(event, "description")}
          ></textarea> */}
        {/* </div> */}

        <Button
          title={title}
          type="submit"
          className={styles.button}
          onClick={handleCreate}
        >
          Submit
        </Button>
      </form>
    </div>
  );
}
export default TodoForm;
