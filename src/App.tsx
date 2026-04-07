import './App.css'
import Todolist, { TasksType } from './Todolist'


export const App = () => {

//DATA

const Todolist1Title1 = "What to learn"

const tasks1:TasksType[] = 
[
  {id:1, title: "HTML&CSS", isDone:true},
  {id:2, title: "JS/TS", isDone:true},
  {id:3, title: "REACT", isDone:false},
  {id:3, title: "REDUX", isDone:false},
  {id:3, title: "RTK", isDone:false},
]

  return (
      <div className="app">
        <Todolist title={Todolist1Title1} tasks={tasks1}/>
      </div>
  )
}
