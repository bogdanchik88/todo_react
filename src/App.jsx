import InputForm from "./components/InputForm"
import TodoList from "./components/TodoList"

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-100">
      <div className="flex flex-col gap-3 w-[90%] max-w-[500px] p-5 bg-white rounded-2xl">
        <InputForm />
        <TodoList />
      </div>
    </div>
  )
}


export default App
