import React from 'react'
import useTodosStore from "../store/useTodosStore"
import TodoListItem from './TodoListItem'

const TodoList = () => {
    const todos = useTodosStore(state => state.todos)
    
  return (
    <div className='flex flex-col gap-2'>
      {todos.length === 0 && 
        <p className='mx-auto 
          text-lg 
          text-primary 
          my-2'>You have no todos yet!</p>}

      {todos.map(todo => (
          <TodoListItem 
            key={todo.id} 
            id={todo.id} 
            title={todo.title} 
            description={todo.description} 
            completed={todo.completed}/>
      ))}
  </div>
  )
}

export default TodoList
