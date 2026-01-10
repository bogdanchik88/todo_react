import { Check, X } from "lucide-react"
import useTodosStore from "../store/useTodosStore"
import ToggleButton from "./ToggleButton"

const TodoListItem = ({id, title, description, completed} = props) => {

    const deleteTodo = useTodosStore(state => state.deleteTodo)
    const toggleTodo = useTodosStore(state => state.toggleTodo)

  return (
    <div className='flex gap-2'>
      <p>{title}</p>

      <p>{description}</p>

      <ToggleButton completed={completed} onToggle={() => toggleTodo(id)}/>

      <button className="cursor-pointer bg-red-400 px-2 py-1 rounded-2xl" onClick={() => deleteTodo(id)}>Delete</button>
    </div>
  )
}

export default TodoListItem
