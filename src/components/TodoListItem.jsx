import { Trash2 } from "lucide-react"
import useTodosStore from "../store/useTodosStore"
import ToggleButton from "./ToggleButton"
import { useState } from "react"

const TodoListItem = ({id, title, description, completed} = props) => {

    const deleteTodo = useTodosStore(state => state.deleteTodo)
    const toggleTodo = useTodosStore(state => state.toggleTodo)
    const [deleting, setDeleting] = useState(false)

    const handleDelete = () => {
      setDeleting(true)
      setTimeout(() => {
        deleteTodo(id)
      }, 300)
    }

  return (
    <div className={`flex gap-2 py-1 px-1 justify-evenly items-center border-2 border-gray-300 rounded-2xl text-lg
      transition-opacity duration-300 ${deleting ? 'opacity-0' : 'opacity-100'}`}>

      <ToggleButton completed={completed} onToggle={() => toggleTodo(id)}/>  

      <div className="flex flex-col justify-start w-[75%] min-w-0">
        
        <h1 className="">{title}</h1>

        {description && <div>
          <p className={'text-violet-500 wrap-break-word'}>{description}</p>
        
        </div>}
      
      </div>
      <button className="cursor-pointer" onClick={() => handleDelete()}>
        <Trash2 className="text-red-500 hover:scale-[120%]
          active:scale-[100%] transition-transform duration-300"/>
      </button>
    </div>
  )
}

export default TodoListItem