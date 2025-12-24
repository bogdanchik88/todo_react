import useTodosStore from "./store/useTodosStore"

function App() {

  const todos = useTodosStore(state => state.todos)

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen gap-3">
        <div className="flex flex-col gap-2 justify-start">
          <label htmlFor="Title">Title</label>
          <input type="text" id="Title" placeholder="Enter title..."/>

          <label htmlFor="Description">Description</label>
          <input type="text" id="Description" placeholder="Enter description"/>          
        </div>

        <ul>
          {todos.map(todo => (
            <li key={todo.id} className="flex gap-2">
              <input type="checkbox" checked={todo.completed} />
              <span>{todo.title}</span>
              {todo.description && <span>{todo.description}</span>}
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
