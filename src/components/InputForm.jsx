import { useRef } from "react"
import useTodosStore from "../store/useTodosStore"
import { ClipboardPlus } from "lucide-react"

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
      className="flex flex-row gap-12 w-[95%] justify-start"
    >
      <div className="flex flex-col justify-start gap-2 w-[70%]">
        <div className="flex flex-col gap-1 justify-start">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            placeholder="Enter title..."
            ref={titleRef}
            required
            className="border-[1px] border-2 border-black px-4 py-1 rounded-2xl"
          />        
        </div>

        <div className="flex flex-col gap-1 justify-start">
          <label htmlFor="description">Description</label>
          <input
            id="description"
            type="text"
            placeholder="Enter description..."
            ref={descriptionRef}
            className="border-2 border-black px-4 py-2 rounded-2xl"
          />        
        </div>        
      </div>

      <button
        type="submit"
        className="cursor-pointer"
      ><ClipboardPlus className="hover:text-amber-300 hover:bg-cyan-500 p-1 w-10 h-10
        transition-colors duration-300"/>
      </button>
    </form>
  )
}

export default InputForm
