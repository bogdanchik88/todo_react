import { create } from "zustand";

const useTodosStore = create((set, get) => ({
    todos: [{title: 'todo1', completed: false}, {title: 'todo2', completed: false}]
}))

export default useTodosStore