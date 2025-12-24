import { useEffect } from "react"
import useTodosStore from "./store/useTodosStore"
import InputForm from "./components/InputForm"
import TodoList from "./components/TodoList"

function App() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen gap-3">
        <InputForm/>
        <TodoList/>
      </div>
    </>
  )
}

export default App
