import useTodosStore from "../store/useTodosStore"

const TodoListItem = ({id, title, description, completed} = props) => {

    const deleteTodo = useTodosStore(state => state.deleteTodo)
    const toggleTodo = useTodosStore(state => state.toggleTodo)

  return (
    <div className='flex gap-2'>
      <span>{title}</span>
      <span>{description}</span>
      <input type="checkbox" checked={completed} onChange={() => toggleTodo(id)}/>
      <button className="cursor-pointer bg-red-400 px-2 py-1 rounded-2xl" onClick={() => deleteTodo(id)}>Delete</button>
    </div>
  )
}

export default TodoListItem
