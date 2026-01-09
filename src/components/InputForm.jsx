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
      <div className="flex flex-col justify-start gap-4 w-[70%] text-lg">
        <div className="flex flex-col gap-1 justify-start">
          <input
            id="title"
            type="text"
            placeholder="Enter title..."
            ref={titleRef}
            required
            className="border-2 border-black px-4 py-1 rounded-2xl focus:border-2 outline-none
              focus:ring-2 focus: ring-red-200 focus:border-red-500
                transition-colors duration-300"
          />        
        </div>

        <div className="flex flex-col gap-1 justify-start">
          <input
            id="description"
            type="text"
            placeholder="Enter description..."
            ref={descriptionRef}
            className="border-2 border-border px-4 py-1 rounded-2xl outline-none
              focus:border-primary"
          />        
        </div>        
      </div>

      <button
        type="submit"
        className="cursor-pointer"
      ><ClipboardPlus className="p-1 text-success size-10
        transition-colors duration-100"/>
      </button>
    </form>
  )
}

export default InputForm
