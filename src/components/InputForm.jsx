import { useRef } from "react"
import useTodosStore from "../store/useTodosStore"

const InputForm = () => {
    const addTodo = useTodosStore(state => state.addTodo)
    
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

  return (
    <div className="flex flex-col gap-2 justify-start">
        <label htmlFor="Title">Title</label>
        <input type="text" id="Title" placeholder="Enter title..." ref={titleRef}/>

        <label htmlFor="Description">Description</label>
        <input type="text" id="Description" placeholder="Enter description" ref={descriptionRef}/>   

        <button className="border-2 rounded-2xl hover:border-amber-100 cursor-pointer" onClick={() => handleAddTodo()}>Add</button>       
    </div>
  )
}

export default InputForm
