import React from 'react'
import useTodosStore from "../store/useTodosStore"
import TodoListItem from './TodoListItem'

const TodoList = () => {
    const todos = useTodosStore(state => state.todos)
    
  return (
    <ul>
        {todos.map(todo => (
            <TodoListItem key={todo.id} id={todo.id} title={todo.title} description={todo.description} completed={todo.completed}/>
        ))}
    </ul>
  )
}

export default TodoList
