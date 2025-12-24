import { useEffect, useRef } from "react"
import useTodosStore from "./store/useTodosStore"

function App() {

  const todos = useTodosStore(state => state.todos)
  const addTodo = useTodosStore(state => state.addTodo)
  const toggleTodo = useTodosStore(state => state.toggleTodo)
  const deleteTodo = useTodosStore(state => state.deleteTodo)

  const titleRef = useRef('')
  const descriptionRef = useRef('')

  const handleAddTodo = () => {
    const title = titleRef.current.value.trim()
    const description = descriptionRef.current.value.trim()

    if(title){
      addTodo(title, description)

      titleRef.current.value = ''
      titleRef.current.focus()
      descriptionRef.current.value = ''
    }
  }

  useEffect(() => {
    console.log(todos)
  }, [todos])

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen gap-3">
        <div className="flex flex-col gap-2 justify-start">
          <label htmlFor="Title">Title</label>
          <input type="text" id="Title" placeholder="Enter title..." ref={titleRef}/>

          <label htmlFor="Description">Description</label>
          <input type="text" id="Description" placeholder="Enter description" ref={descriptionRef}/>   

          <button className="border-2 rounded-2xl hover:border-amber-100 cursor-pointer" onClick={() => handleAddTodo()}>Add</button>       
        </div>

        <ul>
          {todos.map(todo => (
            <li key={todo.id} className="flex gap-2">
              <input type="checkbox" checked={todo.completed} onChange={() => toggleTodo(todo.id)}/>
              <span>{todo.title}</span>
              {todo.description && <span>{todo.description}</span>}
              <button className="cursor-pointer bg-red-400 px-2 py-1 rounded-2xl" onClick={() => deleteTodo(todo.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
