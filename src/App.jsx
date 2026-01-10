import InputForm from "./components/InputForm"
import TodoList from "./components/TodoList"

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-bg font-Yantramanav">
      <div className="flex flex-col gap-3 w-[90%] max-w-[500px] max-h-[70vh] p-5 bg-card rounded-2xl shadow-lg">
        <InputForm />

      {/* Контейнер под список */}
      <div className="flex-1 overflow-y-auto">
        <TodoList />
      </div>
      </div>
    </div>
  )
}


export default App
