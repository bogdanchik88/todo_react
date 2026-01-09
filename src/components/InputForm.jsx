import { useRef } from "react"
import useTodosStore from "../store/useTodosStore"

const InputForm = () => {
  const addTodo = useTodosStore(state => state.addTodo)

  const titleRef = useRef(null)
  const descriptionRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()

    const title = titleRef.current.value.trim()
    const description = descriptionRef.current.value.trim()

    if (!title) return

    addTodo(title, description)

    titleRef.current.value = ""
    descriptionRef.current.value = ""
    titleRef.current.focus()
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-2 justify-start"
    >
      <label htmlFor="title">Title</label>
      <input
        id="title"
        type="text"
        placeholder="Enter title..."
        ref={titleRef}
        required
      />

      <label htmlFor="description">Description</label>
      <input
        id="description"
        type="text"
        placeholder="Enter description..."
        ref={descriptionRef}
      />

      <button
        type="submit"
        className="border-2 rounded-2xl hover:border-amber-100 cursor-pointer"
      >
        Add
      </button>
    </form>
  )
}

export default InputForm
