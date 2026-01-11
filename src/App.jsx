import InputForm from "./components/InputForm"
import TodoList from "./components/TodoList"

function App() {
  return (
    <div className="min-h-screen flex items-start justify-center bg-bg font-Yantramanav">
      <div className="flex flex-col gap-3 w-[90%] mt-[15vh] max-w-[500px] max-h-[75vh] p-5 bg-card rounded-2xl shadow-lg">
        <InputForm />
        <div className="flex-1 overflow-y-auto">
          <TodoList />
        </div>
      </div>
    </div>
  )
}


export default App
