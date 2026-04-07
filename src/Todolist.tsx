import { Button } from "./Button";

export type TasksType = {
  id: number;
  title: string;
  isDone: boolean;
};

export type TodolistPropsType = {
  title: string;
  tasks: TasksType[];
};

export const Todolist = ({ title, tasks }: TodolistPropsType) => {
  return (
    <div>
      <h3>{title}</h3>
      <div>
        <input />
        <button>+</button>
      </div>
      <ul>
        {tasks.length === 0 ? (
          <span>There is no tasks</span>
        ) : (
          tasks.map((task) => {
            return (
              <li key={task.id}>
                <input type="checkbox" checked={task.isDone} />{" "}
                <span>{task.title}</span>
              </li>
            );
          })
        )}
        {}
      </ul>
      <div>
        <Button title="All"/>
        <Button title="Active"/>
        <Button title="Completed"/>
      </div>
    </div>
  );
};

export default Todolist;
