import { create } from "zustand";

const useTodosStore = create((set, get) => ({
    todos: [{id: crypto.randomUUID(), title: 'todo1', description: 'description 1', completed: false}, 
            {id: crypto.randomUUID(), title: 'todo2', description: '', completed: true}],


    
}))

export default useTodosStore