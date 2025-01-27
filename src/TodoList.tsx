import { Button } from "./Button"

type TodoListPropsType = {
  title: string
  tasks: Array<TaskType>
}

export type TaskType = {
  id: number
  title: string
  isDone: boolean
}

export const TodoList = ({ title, tasks }: TodoListPropsType) => {
  // ({ title, tasks }: TodoListPropsType) - это деструктуризация. На лету вытянули из пропсов ключи и значения присвоили одноименным переменным
  // это равносильно записям ниже:
  // const {title: title, tasks: tasks} = props
  // или
  // const {title, tasks} = props

  const tasksList = tasks.length === 0
    ? <span>Your list is empty</span>
    : <ul>
      {tasks.map(taks => {
        return (
          <li>
            <input type="checkbox" checked={taks.isDone} /> <span>{taks.title}</span>
          </li>
        )
      })}
    </ul>

return (
    <div>
      <div>
        <h3>{title}</h3>
        <div>
          <input />
          <button>+</button>
        </div>
        {tasksList}
        <div>
          <Button title={"All"} />
          <Button title="Active"/>
          <Button title="Completed"/>
        </div>
      </div>
    </div>
  )
}
