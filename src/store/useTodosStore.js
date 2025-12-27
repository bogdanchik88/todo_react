import { create } from "zustand"
import { persist } from "zustand/middleware"

const useTodosStore = create(persist((set, get) => ({
    todos: [{id: crypto.randomUUID(), title: 'todo1', description: 'description 1', completed: false}, 
            {id: crypto.randomUUID(), title: 'todo2', description: '', completed: true}],


    addTodo: (title, description='') => {
        const currentTodos = get().todos
        set({todos: [...currentTodos, {id: crypto.randomUUID(), title, description, completed: false}]})
    },

    deleteTodo: (id) => {
        const currentTodos = get().todos
        set({todos: currentTodos.filter(todo => (
            todo.id !== id))})        
    },

    toggleTodo: (id) => {
        const currentTodos = get().todos
        set({todos: currentTodos.map(todo => (
            todo.id === id ? {...todo, completed: !todo.completed} : todo
        ))})
    }
}), 
{
    name: 'todoStore'
}))

export default useTodosStore