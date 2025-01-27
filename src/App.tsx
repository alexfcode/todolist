import './App.css'
import { TodoList } from './TodoList'

function App() {
  // DATA:
const todolisTitle1 = "What to learn"
const todolisTitle2 = "What to buy"

  //UI:
  return (
    <div className="app">
      <TodoList title={todolisTitle1}/>
      <TodoList title={todolisTitle2}/>
    </div>
  )
}

export default App
