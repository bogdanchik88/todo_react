import { useRef } from "react"
import useTodosStore from "../store/useTodosStore"
import { ClipboardPlus, Github } from "lucide-react"

const InputForm = () => {
  const addTodo = useTodosStore((state) => state.addTodo)

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
      className="border-b-4 border-b-primary"
    >
      <div className="flex flex-col gap-4 text-lg mb-4">

        {/* Title + GitHub link */}
        <div className="flex flex-row items-center gap-6">
          <input
            id="title"
            type="text"
            placeholder="Enter title..."
            ref={titleRef}
            required
            minLength={3}
            maxLength={20}
            className="
              border-2 border-border
              px-4 py-1
              rounded-2xl
              outline-none
              w-[75%]
              text-primary
              placeholder-border
              focus:border-primary
              transition-colors duration-300 ease-in-out
            "
          />

          <a
            href="https://github.com/bogdanchik88"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github
              className="
                size-12
                hover:scale-[120%]
                active:scale-[100%]
                transition-transform duration-200 ease-in-out
              "
            />
          </a>
        </div>

        {/* Description + Submit button */}
        <div className="flex flex-row items-center gap-6">
          <textarea
            id="description"
            placeholder="Enter description..."
            ref={descriptionRef}
            className="
              border-2 border-border
              px-4 py-1
              rounded-2xl
              outline-none
              w-[75%]
              text-primary
              placeholder-border
              focus:border-primary
              transition-colors duration-300 ease-in-out
            "
          />

          <button type="submit" className="cursor-pointer">
            <ClipboardPlus
              className="
                text-primary
                size-12
                rounded-2xl
                hover:text-secondary
                hover:scale-[120%]
                transition-colors duration-100
                motion-safe:transition-transform motion-safe:duration-150
                active:scale-[100%] active:text-primary
              "
            />
          </button>
        </div>

      </div>
    </form>
  )
}

export default InputForm
