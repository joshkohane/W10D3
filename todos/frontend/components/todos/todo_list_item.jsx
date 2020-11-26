import React from 'react'
import TodoList from './todo_list'

const TodoListItem = ({todo}) => {
    return (
        <ul>
            <li>{todo.title}</li>
            <li>{todo.body}</li>
        </ul>
    )
}

export default TodoListItem