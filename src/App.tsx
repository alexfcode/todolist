import './App.css'
import { TaskType, TodoList } from './TodoList'

function App() {
  // DATA:
  const todolisTitle1 = "What to learn"
  const todolisTitle2 = "What to bye"
  const todolisTitle3 = "What to do"
  const tasks1: Array<TaskType> = [
    { id: 1, title: "HTML", isDone: true },
    { id: 2, title: "CSS", isDone: true },
    { id: 3, title: "REACT", isDone: false },
    { id: 3, title: "REACT", isDone: false }
  ]
  const tasks2: TaskType[] = [
    { id: 4, title: "Milk", isDone: true },
    { id: 5, title: "Bread", isDone: true },
    { id: 6, title: "Chicken", isDone: false }
  ]

  const tasks3: TaskType[] = [
  ]

  //UI:
  return (
    <div className="app">
      <TodoList
        title={todolisTitle1}
        tasks={tasks1} />
      <TodoList
        title={todolisTitle2}
        tasks={tasks2}
      />
      <TodoList
        title={todolisTitle3}
        tasks={tasks3}
      />
    </div>
  )
}

export default App
